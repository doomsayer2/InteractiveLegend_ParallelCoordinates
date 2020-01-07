import React, { Component, Fragment } from 'react';
import { getData } from '../shared/DataProvider';
import * as d3 from 'd3';

import '../../css/d3chart.css';

const dimensions = {
  Name: { type: 'string' },
  'Acceleration (mph)': {
    type: 'number',
    ticks: 20
  },
  'Horsepower (hp)': {
    type: 'number',
    ticks: 20
  },
  'Weight (lbs)': {
    type: 'number',
    ticks: 20
  },
  ProdYear: {
    type: 'string'
  },
  Cylinders: { type: 'number' },
};
let graph = null;

export default class D3Chart extends Component {
  constructor(props) {
    super(props);

    this.data = getData();
    this.chartRef = React.createRef();
    this.state = {
      mode: props.mode
    };
  }

  componentDidMount() {
    this.createViz();
  }

  createViz() {
    // 1st create basic viz
    graph = window
      .ParCoords()('#pcChart')
      .data(this.data)
      .composite('source-over') // Change foreground context https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
      .alpha(1) // Opacity of foregoround lines
      .margin({ top: 60, left: 100, bottom: 40, right: 30 })
      .dimensions(dimensions) // Custom dimensions
      .color('darkgrey') // Color of the lines
      .render()
      // .shadows() // Background Shadows
      .reorderable() // Make axes reorderable
      .brushMode('1D-axes') // Enable brushing
      .brushedColor('orange') // Color of the lines if brushed or selected
      .alphaOnBrushed(0.5) // This lets the other lines still be visible when the brush or slected are viewed
      .interactive(); // Trigger the rerenders when changed after render

    // Custom adaptations based on the current data
    graph.scale('Acceleration (mph)', [14, 23]);
    graph.scale('Horsepower (hp)', [40, 340]);
    graph.scale('Weight (lbs)', [1400, 5600]);
    graph.flipAxes(['Name']);

    // Move labels up a bit (needs to be in timeout if we want to modify it after the draw of the viz)
    setTimeout(() => {
      d3.selectAll('.label').attr('transform', 'translate(0, -10)');
    }, 1);

    // 2nd Add hover event
    d3.select('#pcChart svg')
      .on('mousemove', function() {
        const mousePosition = d3.mouse(this);
        highlightLineOnClick(mousePosition, true); //true will also add tooltip
      })
      .on('mouseout', function() {
        cleanTooltip();
        graph.unhighlight();
      });

    // 3rd attach Key listener for brush clearing
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.altKey && event.key === 'd') {
        graph.brushReset();
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div
          ref={this.chartRef}
          id={'pcChart'}
          style={{ width: 100 + '%', height: 600, marginRight: 10 + 'px' }}
          className={'parcoords'}
          mode={this.state.mode}
        />
      </Fragment>
    );
  }
}

// Add highlight for every line on click
const getCentroids = data => {
  // This function returns centroid points for data. Had to change the source
  // for parallelcoordinates and make compute_centroids public.
  const margins = graph.margin();
  const graphCentPts = [];

  data.forEach(function(d) {
    const initCenPts = graph.compute_centroids(d).filter(function(d, i) {
      return i % 2 === 0;
    });

    // Move points based on margins
    const cenPts = initCenPts.map(function(d) {
      return [d[0] + margins['left'], d[1] + margins['top']];
    });

    graphCentPts.push(cenPts);
  });

  return graphCentPts;
};

// Get the active points
const getActiveData = () => {
  if (graph.brushed() !== false) return graph.brushed();
  return graph.data();
};

// Find out if on line
const isOnLine = (startPt, endPt, testPt, tol) => {
  // Check if test point is close enough to a line
  // between startPt and endPt. close enough means smaller than tolerance
  const x0 = testPt[0];
  const y0 = testPt[1];
  const x1 = startPt[0];
  const y1 = startPt[1];
  const x2 = endPt[0];
  const y2 = endPt[1];
  const Dx = x2 - x1;
  const Dy = y2 - y1;
  const delta =
    Math.abs(Dy * x0 - Dx * y0 - x1 * y2 + x2 * y1) /
    Math.sqrt(Math.pow(Dx, 2) + Math.pow(Dy, 2));
  //console.log(delta);
  if (delta <= tol) return true;
  return false;
};

// Fin the axes we are on
const findAxes = (testPt, cenPts) => {
  // Finds between which two axis the mouse is
  const x = testPt[0];
  // const y = testPt[1];

  // Make sure it is inside the range of x
  if (cenPts[0][0] > x) return false;
  if (cenPts[cenPts.length - 1][0] < x) return false;

  // Find between which segment the point is
  for (let i = 0; i < cenPts.length; i++) {
    if (cenPts[i][0] > x) return i;
  }
};

// Removes any object under #tooltip is
const cleanTooltip = () => {
  graph.svg.selectAll('#tooltip').remove();
};

// Add tooltips to multi lines if they are near
const addTooltip = (clicked, clickedCenPts) => {
  let clickedDataSet = [];
  let margins = graph.margin();
  let order = Object.keys(graph.dimensions());
  let clickedNew = [];
  let obj = {};

  for (let i = 0; i < clicked.length; i++) {
    // eslint-disable-next-line
    order.forEach(e => {
      obj[e] = clicked[i][e];
    });
    clickedNew.push(obj);
    obj = {};
  }

  for (let i = 0; i < clickedNew.length; i++) {
    for (let j = 0; j < clickedCenPts[i].length; j++) {
      const text = d3.values(clickedNew[i])[j];
      const x = clickedCenPts[i][j][0] - margins.left;
      const y = clickedCenPts[i][j][1] - margins.top;
      clickedDataSet.push([x, y, text]);
    }
  }

  // Add rectangles
  const fontSize = 14;
  const padding = 2;
  const rectHeight = fontSize + 2 * padding; // Based on font size

  graph.svg
    .selectAll("rect[id='tooltip']")
    .data(clickedDataSet)
    .enter()
    .append('rect')
    .attr('x', function(d) {
      return d[0] - d[2].toString().length * 5;
    })
    .attr('y', function(d) {
      return d[1] - rectHeight + 2 * padding;
    })
    .attr('rx', '2')
    .attr('ry', '2')
    .attr('id', 'tooltip')
    .attr('fill', 'grey')
    .attr('opacity', 0.9)
    .attr('width', function(d) {
      return d[2].toString().length * 10;
    })
    .attr('height', rectHeight);

  // Add text on top of rectangle
  graph.svg
    .selectAll("text[id='tooltip']")
    .data(clickedDataSet)
    .enter()
    .append('text')
    .attr('x', function(d) {
      return d[0];
    })
    .attr('y', function(d) {
      return d[1];
    })
    .attr('id', 'tooltip')
    .attr('fill', 'white')
    .attr('text-anchor', 'middle')
    .attr('font-size', fontSize)
    .text(function(d) {
      return d[2];
    });
};

// Get the current hovered lines
const getClickedLines = mouseClick => {
  let clicked = [];
  let clickedCenPts = [];

  // Find which data is activated right now
  const activeData = getActiveData();

  // Find centriod points
  const graphCentPts = getCentroids(activeData);

  if (graphCentPts.length === 0) return false;

  // Find between which axes the point is
  const axeNum = findAxes(mouseClick, graphCentPts[0]);
  if (!axeNum) return false;

  graphCentPts.forEach(function(d, i) {
    if (isOnLine(d[axeNum - 1], d[axeNum], mouseClick, 2)) {
      clicked.push(activeData[i]);
      clickedCenPts.push(graphCentPts[i]); // For tooltip
    }
  });

  return [clicked, clickedCenPts];
};

// Actually highlight the lines clicked
const highlightLineOnClick = (mouseClick, drawTooltip) => {
  let clicked = [];
  let clickedCenPts = [];

  let clickedData = getClickedLines(mouseClick);

  if (clickedData && clickedData[0].length !== 0) {
    clicked = clickedData[0];
    clickedCenPts = clickedData[1];

    // Highlight clicked line
    graph.highlight(clicked);

    if (drawTooltip) {
      cleanTooltip();
      addTooltip(clicked, clickedCenPts);
    }
  }
};
