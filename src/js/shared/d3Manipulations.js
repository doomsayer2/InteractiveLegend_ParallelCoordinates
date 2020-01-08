import * as d3 from 'd3';

const createHintOne = () => {
  const cylinders = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[5]
  );
  const axisPath = cylinders.select('.axis').select('path');
  const axisText = cylinders.select('.axis').select('text');
  const textBox = axisText.node().getBBox();
  const hint1Group = cylinders.append('g').classed('customD3Hints', true);

  axisPath.style('stroke', '#c51b7d');
  axisText.style('fill', '#c51b7d');

  hint1Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox.x + 48)
    .attr('cy', textBox.y - 22)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint1Group
    .append('text')
    .attr('x', textBox.x + 48)
    .attr('y', textBox.y - 17)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('1');

  return 1;
};

const createHintTwo = () => {
  const carType = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[0]
  );
  const car = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[19];
  const carText = d3.select(car).select('text');
  const textBox = carText.node().getBBox();
  const hint2Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');

  hint2Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox.x - 15)
    .attr('cy', textBox.y + 300)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint2Group
    .append('text')
    .attr('x', textBox.x - 15)
    .attr('y', textBox.y + 305)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('2');

  return 2;
};

const createHintThree = () => {
  const horsepower = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[2]
  );
  const power = d3.select(
    horsepower
      .select('.axis')
      .selectAll('.tick')
      .nodes()[4]
  );
  const transfrom = power.attr('transform');
  let powerBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  powerBox = powerBox.map(e => parseInt(e, 0));
  const hint3Group = horsepower.append('g').classed('customD3Hints', true);

  hint3Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', powerBox[0] - 40)
    .attr('cy', powerBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint3Group
    .append('text')
    .attr('x', powerBox[0] - 40)
    .attr('y', powerBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('3');

  hint3Group
    .append('rect')
    .attr('x', powerBox[0] - 20)
    .attr('y', powerBox[1] + 5)
    .attr('width', '20%')
    .attr('height', '100px')
    .style('fill', 'transparent')
    .style('stroke', '#C51B7D')
    .style('stroke-dasharray', '10,5')
    .style('stroke-width', '2');

  return 3;
};

const createHintFour = () => {
  const acceleration = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[1]
  );
  const acc = d3.select(
    acceleration
      .select('.axis')
      .selectAll('.tick')
      .nodes()[9]
  );
  const transfrom = acc.attr('transform');
  let accBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  accBox = accBox.map(e => parseInt(e, 0));
  const hint4Group = acceleration.append('g').classed('customD3Hints', true);

  hint4Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', accBox[0] - 40)
    .attr('cy', accBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint4Group
    .append('text')
    .attr('x', accBox[0] - 40)
    .attr('y', accBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('4');

  hint4Group
    .append('rect')
    .attr('x', accBox[0] - 20)
    .attr('y', accBox[1] + 5)
    .attr('width', '20%')
    .attr('height', '100px')
    .style('fill', 'transparent')
    .style('stroke', '#C51B7D')
    .style('stroke-dasharray', '10,5')
    .style('stroke-width', '2');

  return 4;
};

const createHintFive = () => {
  const svgImage = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[1]
  );
  const axisLabel = svgImage.select('.axis').select('text');
  const axisLabelBox = axisLabel.node().getBBox();
  const hint5Group = svgImage.append('g').classed('customD3Hints', true);

  hint5Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', axisLabelBox.x + axisLabelBox.width)
    .attr('cy', axisLabelBox.y - 22)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint5Group
    .append('text')
    .attr('x', axisLabelBox.x + axisLabelBox.width)
    .attr('y', axisLabelBox.y - 17)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('5');

  hint5Group
    .append('image')
    .attr('xlink:href', 'img2.svg')
    .attr('x', axisLabelBox.x - 24)
    .attr('y', axisLabelBox.y - 36)
    .attr('width', 100)
    .attr('height', 40);

  return 5;
};

const createHintSix = () => {
  const svgImage = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[4]
  );
  const axisLabel = d3.select(svgImage.select('.axis').selectAll('.tick').nodes()[9]);
  const transfrom = axisLabel.attr('transform');
  let svgBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  svgBox = svgBox.map(e => parseInt(e, 0));
  const hint6Group = svgImage.append('g').classed('customD3Hints', true);

  hint6Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', svgBox[0] + 16)
    .attr('cy', svgBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint6Group
    .append('text')
    .attr('x', svgBox[0] + 16)
    .attr('y', svgBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('6');

  hint6Group
    .append('image')
    .attr('xlink:href', 'img1.svg')
    .attr('x', svgBox[0] - 30)
    .attr('y', svgBox[1])
    .attr('width', 60)
    .attr('height', '25%');
    
  return 6;
};

const createHintSeven = () => {

  return 7;
}

const createHintEight = () => {

  return 8;
}

const createHintNine = () => {

  return 9;
}

const createHintTen = () => {

  return 10;
}

const removeAllHints = () => {
  d3.selectAll('.customD3Hints').remove();

  // HINT 1 ELEMENTS
  const cylinders = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[5]
  );
  const axisPath = cylinders.select('.axis').select('path');
  const axisText = cylinders.select('.axis').select('text');

  axisPath.style('stroke', 'rgb(34, 34, 34)');
  axisText.style('fill', 'black');

  // HINT 2 ELEMENTS
  const carType = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[0]
  );
  const car = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[19];
  const carText = d3.select(car).select('text');

  carText.style('fill', 'black').style('font-weight', 'normal');
};

export {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix,
  createHintSeven,
  createHintEight,
  createHintNine,
  createHintTen,
  removeAllHints
};
