import * as d3 from 'd3';

const hint7 = () => {
  const carType = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[0]
  );
  const car = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[4];
  const carText = d3.select(car).select('text');
  const textLen = carText.node().getBBox();
  const carItem = d3.select(car);
  const transfrom = carItem.attr('transform');
  let textBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  textBox = textBox.map(e => parseInt(e, 0));
  const hint7Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');

  hint7Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox[0] - textLen.width - 28)
    .attr('cy', textBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint7Group
    .append('text')
    .attr('x', textBox[0] - textLen.width - 28)
    .attr('y', textBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('7');

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
      .nodes()[12]
  );

  const transfrom2 = acc.attr('transform');
  let accBox = transfrom2
    .substring(transfrom2.indexOf('(') + 1, transfrom2.indexOf(')'))
    .split(',');
  accBox = accBox.map(e => parseInt(e, 0));
  const hint7GroupA = acceleration.append('g').classed('customD3Hints', true);

  hint7GroupA
    .append('circle')
    .attr('r', 4)
    .attr('cx', accBox[0])
    .attr('cy', accBox[1] - 14)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint7GroupA
    .append('text')
    .attr('x', accBox[0])
    .attr('y', accBox[1] - 11)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('7');
};

const hint8 = () => {
  const carType = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[0]
  );
  const car = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[17];
  const carText = d3.select(car).select('text');
  const textLen = carText.node().getBBox();
  const carItem = d3.select(car);
  const transfrom = carItem.attr('transform');
  let textBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  textBox = textBox.map(e => parseInt(e, 0));
  const hint8Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');

  hint8Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox[0] - textLen.width - 28)
    .attr('cy', textBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8Group
    .append('text')
    .attr('x', textBox[0] - textLen.width - 28)
    .attr('y', textBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');

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
      .nodes()[1]
  );
  const transfrom2 = acc.attr('transform');
  let accBox = transfrom2
    .substring(transfrom2.indexOf('(') + 1, transfrom2.indexOf(')'))
    .split(',');
  accBox = accBox.map(e => parseInt(e, 0));

  const horespower = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[2]
  );
  const hp = d3.select(
    horespower
      .select('.axis')
      .selectAll('.tick')
      .nodes()[15]
  );
  const transform3 = hp.attr('transform');
  let hpBox = transform3
    .substring(transform3.indexOf('(') + 1, transform3.indexOf(')'))
    .split(',');
  hpBox = hpBox.map(e => parseInt(e, 0));

  const weight = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[3]
  );
  const wei = d3.select(
    weight
      .select('.axis')
      .selectAll('.tick')
      .nodes()[11]
  );
  const transform4 = wei.attr('transform');
  let weiBox = transform4
    .substring(transform4.indexOf('(') + 1, transform4.indexOf(')'))
    .split(',');
  weiBox = weiBox.map(e => parseInt(e, 0));

  const prodYear = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[4]
  );
  const year = d3.select(
    prodYear
      .select('.axis')
      .selectAll('.tick')
      .nodes()[3]
  );
  const transform5 = year.attr('transform');
  let yearBox = transform5
    .substring(transform5.indexOf('(') + 1, transform5.indexOf(')'))
    .split(',');
  yearBox = yearBox.map(e => parseInt(e, 0));

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
      .nodes()[4]
  );
  const transform6 = cyl.attr('transform');
  let cylBox = transform6
    .substring(transform6.indexOf('(') + 1, transform6.indexOf(')'))
    .split(',');
  cylBox = cylBox.map(e => parseInt(e, 0));

  const hint8GroupA = acceleration.append('g').classed('customD3Hints', true);
  const hint8GroupB = horespower.append('g').classed('customD3Hints', true);
  const hint8GroupC = weight.append('g').classed('customD3Hints', true);
  const hint8GroupD = prodYear.append('g').classed('customD3Hints', true);
  const hint8GroupE = cylinders.append('g').classed('customD3Hints', true);

  hint8GroupA
    .append('circle')
    .attr('r', 5)
    .attr('cx', accBox[0])
    .attr('cy', accBox[1] - 2)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8GroupA
    .append('text')
    .attr('x', accBox[0])
    .attr('y', accBox[1] + 1)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');

  hint8GroupB
    .append('circle')
    .attr('r', 5)
    .attr('cx', hpBox[0])
    .attr('cy', hpBox[1] + 8)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8GroupB
    .append('text')
    .attr('x', hpBox[0])
    .attr('y', hpBox[1] + 11)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');

  hint8GroupC
    .append('circle')
    .attr('r', 5)
    .attr('cx', weiBox[0])
    .attr('cy', weiBox[1] + 3)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8GroupC
    .append('text')
    .attr('x', weiBox[0])
    .attr('y', weiBox[1] + 6)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');

  hint8GroupD
    .append('circle')
    .attr('r', 5)
    .attr('cx', yearBox[0])
    .attr('cy', yearBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8GroupD
    .append('text')
    .attr('x', yearBox[0])
    .attr('y', yearBox[1] + 3)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');

  hint8GroupE
    .append('circle')
    .attr('r', 5)
    .attr('cx', cylBox[0])
    .attr('cy', cylBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint8GroupE
    .append('text')
    .attr('x', cylBox[0])
    .attr('y', cylBox[1] + 3)
    .style('font-size', '8px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('8');
};

const hint9 = () => {
  const carType = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[0]
  );
  const car = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[16];
  const car2 = carType
    .select('.axis')
    .selectAll('.tick')
    .nodes()[15];
  const carText = d3.select(car).select('text');
  const carText2 = d3.select(car2).select('text');
  const textLen = carText2.node().getBBox();
  const carItem = d3.select(car2);
  const transfrom = carItem.attr('transform');
  let textBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  textBox = textBox.map(e => parseInt(e, 0));
  const hint9Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');
  carText2.style('fill', '#c51b7d').style('font-weight', 'bold');

  const weight = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[3]
  );
  const weiText = weight.select('.axis').select('.label');

  weiText.style('fill', '#c51b7d');

  hint9Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox[0] - textLen.width - 30)
    .attr('cy', textBox[1] + 7)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint9Group
    .append('text')
    .attr('x', textBox[0] - textLen.width - 30)
    .attr('y', textBox[1] + 12)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('9');
};

const hint10 = () => {
  const cylinders = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[5]
  );
  const cyl = cylinders
    .select('.axis')
    .selectAll('.tick')
    .nodes()[4];
  const cylText =cylinders.select('.axis').select('.label');
  const cylItem = d3.select(cyl);
  const transfrom = cylItem.attr('transform');
  let cylBox = transfrom
    .substring(transfrom.indexOf('(') + 1, transfrom.indexOf(')'))
    .split(',');
  cylBox = cylBox.map(e => parseInt(e, 0));

  const horsepower = d3.select(
    d3
      .select('svg')
      .selectAll('.dimension')
      .nodes()[2]
  );
  const hpText = horsepower.select('.axis').select('.label');

  const hint10Group = cylinders.append('g').classed('customD3Hints', true);

  cylText.style('fill', '#c51b7d');
  hpText.style('fill', '#c51b7d');

  hint10Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', cylBox[0] + 30)
    .attr('cy', cylBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint10Group
    .append('text')
    .attr('x', cylBox[0] + 30)
    .attr('y', cylBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('10');

  hint10Group
    .append('image')
    .attr('xlink:href', 'img3.svg')
    .attr('x', cylBox[0] - 20)
    .attr('y', cylBox[1] - 50)
    .attr('width', 40)
    .attr('height', '20%')
    .style('pointer-events', 'none');
};

export { hint7, hint8, hint9, hint10 };
