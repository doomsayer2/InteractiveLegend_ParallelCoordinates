import * as d3 from 'd3';
import { hint7, hint8, hint9, hint10 } from './d3ManipulationsAddition';

const createHintOne = () => {
  const accel = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[1]
  );
  const axisPath = accel.select('.axis').select('path');
  const axisText = accel.select('.axis').select('text');
  const textBox = axisText.node().getBBox();
  const hint1Group = accel.append('g').classed('customD3Hints', true);

  axisPath.style('stroke', '#c51b7d').style('stroke-width', 2);
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
  const textLen = carText.node().getBBox();
  const carItem = d3.select(car);
  const transfrom = carItem.attr('transform');
  let textBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  textBox = textBox.map(e => parseInt(e, 0));
  const hint2Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');

  const cylinders = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[5]
  );
  const cyl = d3.select(
    cylinders
      .select('.axis')
      .selectAll('.tick')
      .nodes()[2]
  );
  const transform6 = cyl.attr('transform');
  let cylBox = transform6
    .substring(transform6.indexOf('(') + 1, transform6.indexOf(')'))
    .split(',');
  cylBox = cylBox.map(e => parseInt(e, 0));

  const hint2GroupA = cylinders.append('g').classed('customD3Hints', true);

  hint2GroupA
    .append('circle')
    .attr('r', 5)
    .attr('cx', cylBox[0])
    .attr('cy', cylBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint2GroupA
    .append('text')
    .attr('x', cylBox[0])
    .attr('y', cylBox[1] + 3)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('2');

  hint2Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox[0] - textLen.width - 25)
    .attr('cy', textBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint2Group
    .append('text')
    .attr('x', textBox[0] - textLen.width - 25)
    .attr('y', textBox[1] + 5)
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
    .attr('height', '120px')
    .style('fill', '#C51B7D')
    .style('opacity', '0.1');

  hint3Group
    .append('rect')
    .attr('x', powerBox[0] - 20)
    .attr('y', powerBox[1] + 5)
    .attr('width', '20%')
    .attr('height', '120px')
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
    .style('fill', '#C51B7D')
    .style('opacity', '0.1');

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
      .nodes()[3]
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
    .attr('x', axisLabelBox.x - 50)
    .attr('y', axisLabelBox.y - 32)
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
  const axisLabel = d3.select(
    svgImage
      .select('.axis')
      .selectAll('.tick')
      .nodes()[9]
  );
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
    .attr('x', svgBox[0] - 50)
    .attr('y', svgBox[1] + 10)
    .attr('width', 80)
    .attr('height', '22%')
    .style('pointer-events', 'none');

  return 6;
};

const createHintSeven = () => {
  hint7();
  return 7;
};

const createHintEight = () => {
  hint8();
  return 8;
};

const createHintNine = () => {
  hint9();
  return 9;
};

const createHintTen = () => {
  hint10();
  return 10;
};

const removeAllHints = () => {
  d3.selectAll('.customD3Hints').remove();

  // HINT 1 ELEMENTS
  const accel = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[1]
  );
  const axisPath = accel.select('.axis').select('path');
  const axisText = accel.select('.axis').select('text');

  axisPath.style('stroke', 'rgb(34, 34, 34)').style('stroke-width', 1);
  axisText.style('fill', 'black');

  // HINT 2,7,8 ELEMENTS
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
  const car2 = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[4];
  const carText2 = d3.select(car2).select('text');
  const car3 = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[17];
  const carText3 = d3.select(car3).select('text');
  const car4 = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[16];
  const carText4 = d3.select(car4).select('text');
  const car5 = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[15];
  const carText5 = d3.select(car5).select('text');

  carText.style('fill', 'black').style('font-weight', 'normal');
  carText2.style('fill', 'black').style('font-weight', 'normal');
  carText3.style('fill', 'black').style('font-weight', 'normal');
  carText4.style('fill', 'black').style('font-weight', 'normal');
  carText5.style('fill', 'black').style('font-weight', 'normal');

  // HINT 9 ELEMENTS
  const weight = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[3]
  );
  const weiText = weight.select('.axis').select('.label');

  weiText.style('fill', 'black');

  // HINT 10 ELEMENTS
  const cylinders = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[5]
  );
  const cylText = cylinders.select('.axis').select('.label');

  const horsepower = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[2]
  );
  const hpText = horsepower.select('.axis').select('.label');

  cylText.style('fill', 'black');
  hpText.style('fill', 'black');
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
