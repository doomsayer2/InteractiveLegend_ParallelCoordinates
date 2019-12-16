import React, { Component, Fragment } from 'react';
import { getData } from '../shared/DataProvider';
import * as d3 from 'd3';

import '../../css/d3chart.css';

const dimensions = {
  Name: { type: 'string' },
  Cylinders: { type: 'number' },
  'Horsepower (hp)': {
    type: 'number',
    ticks: 20
  },
  'Acceleration (mph)': {
    type: 'number',
    ticks: 20
  },
  'Weight (lbs)': {
    type: 'number',
    ticks: 20
  },
  ProdYear: {
    type: 'string'
  }
};
let graph = null;

export default class D3Chart extends Component {
  constructor(props) {
    super(props);

    this.data = getData();
    this.chartRef = React.createRef();
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
      .margin({ top: 30, left: 100, bottom: 40, right: 0 })
      .dimensions(dimensions) // Custom dimensions
      .color('darkgrey') // Color of the lines
      .render()
      // .shadows() // Background Shadows
      .reorderable() // Make axes reorderable
      .brushMode('1D-axes') // Enable brushing
      .brushedColor('orange') // Color of the lines if brushed or selected
      .alphaOnBrushed(0.5) // This lets the other lines still be visible when the brush or slected are viewed
      .interactive(); // Trigger the rerenders when changed after render

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

    // 3rd add instructions and more
    createInstructions();

    // 4th attach Key listener for brush clearing
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
          style={{ width: 100 + '%', height: 600 }}
          className={'parcoords'}
        />
      </Fragment>
    );
  }
}

const createInstructions = () => {
  // add instruction text
  const instructions =
    '-Drag around axis to begin brush. -CTRL + ALT + D to clear brush. -Reorder axes by dragging. -Hover on each line to highlight.';

  d3.select('#pcChart svg')
    .append('text')
    .text(instructions)
    .attr('text-anchor', 'middle')
    .attr('text-decoration', 'overline')
    .attr(
      'transform',
      'translate(' + graph.width() / 2 + ',' + (graph.height() - 5) + ')'
    );
};

// Add highlight for every line on click
const getCentroids = data => {
  // this function returns centroid points for data. I had to change the source
  // for parallelcoordinates and make compute_centroids public.
  // I assume this should be already somewhere in graph and I don't need to recalculate it
  // but I couldn't find it so I just wrote this for now
  const margins = graph.margin();
  const graphCentPts = [];

  data.forEach(function(d) {
    const initCenPts = graph.compute_centroids(d).filter(function(d, i) {
      return i % 2 === 0;
    });

    // move points based on margins
    const cenPts = initCenPts.map(function(d) {
      return [d[0] + margins['left'], d[1] + margins['top']];
    });

    graphCentPts.push(cenPts);
  });

  return graphCentPts;
};

const getActiveData = () => {
  // I'm pretty sure this data is already somewhere in graph
  if (graph.brushed() !== false) return graph.brushed();
  return graph.data();
};

const isOnLine = (startPt, endPt, testPt, tol) => {
  // check if test point is close enough to a line
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

const findAxes = (testPt, cenPts) => {
  // finds between which two axis the mouse is
  const x = testPt[0];
  const y = testPt[1];

  // make sure it is inside the range of x
  if (cenPts[0][0] > x) return false;
  if (cenPts[cenPts.length - 1][0] < x) return false;

  // find between which segment the point is
  for (let i = 0; i < cenPts.length; i++) {
    if (cenPts[i][0] > x) return i;
  }
};

const cleanTooltip = () => {
  // removes any object under #tooltip is
  graph.svg.selectAll('#tooltip').remove();
};

const addTooltip = (clicked, clickedCenPts) => {
  // sdd tooltip to multiple clicked lines
  let clickedDataSet = [];
  let margins = graph.margin();

  // get all the values into a single list
  // I'm pretty sure there is a better way to write this is Javascript
  for (let i = 0; i < clicked.length; i++) {
    for (let j = 0; j < clickedCenPts[i].length; j++) {
      const text = d3.values(clicked[i])[j];
      // not clean at all!
      const x = clickedCenPts[i][j][0] - margins.left;
      const y = clickedCenPts[i][j][1] - margins.top;
      clickedDataSet.push([x, y, text]);
    }
  }

  // add rectangles
  const fontSize = 14;
  const padding = 2;
  const rectHeight = fontSize + 2 * padding; //based on font size

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

  // add text on top of rectangle
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

const getClickedLines = mouseClick => {
  let clicked = [];
  let clickedCenPts = [];

  // find which data is activated right now
  const activeData = getActiveData();

  // find centriod points
  const graphCentPts = getCentroids(activeData);

  if (graphCentPts.length === 0) return false;

  // find between which axes the point is
  const axeNum = findAxes(mouseClick, graphCentPts[0]);
  if (!axeNum) return false;

  graphCentPts.forEach(function(d, i) {
    if (isOnLine(d[axeNum - 1], d[axeNum], mouseClick, 2)) {
      clicked.push(activeData[i]);
      clickedCenPts.push(graphCentPts[i]); // for tooltip
    }
  });

  return [clicked, clickedCenPts];
};

const highlightLineOnClick = (mouseClick, drawTooltip) => {
  let clicked = [];
  let clickedCenPts = [];

  let clickedData = getClickedLines(mouseClick);

  if (clickedData && clickedData[0].length !== 0) {
    clicked = clickedData[0];
    clickedCenPts = clickedData[1];

    // highlight clicked line
    graph.highlight(clicked);

    if (drawTooltip) {
      // clean if anything is there
      cleanTooltip();
      // add tooltip
      addTooltip(clicked, clickedCenPts);
    }
  }
};
