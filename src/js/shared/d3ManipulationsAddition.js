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
  const hint2Group = carType.append('g').classed('customD3Hints', true);

  carText.style('fill', '#c51b7d').style('font-weight', 'bold');

  hint2Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', textBox[0] - textLen.width - 28)
    .attr('cy', textBox[1])
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint2Group
    .append('text')
    .attr('x', textBox[0] - textLen.width - 28)
    .attr('y', textBox[1] + 5)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('7');
};

export {
    hint7
};