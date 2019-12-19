import * as d3 from 'd3';

const createHintOne = () => {
  console.log('Hint 1');

  d3.select('svg').select('g').select('g').append('circle').attr('cx', 10).attr('cy', 100).attr('r', 10).attr('fill', 'green');
  return 1;
};

const createHintTwo = () => {
  console.log('Hint 2');

  return 2;
};

const createHintThree = () => {
  console.log('Hint 3');

  return 3;
};

const createHintFour = () => {
  console.log('Hint 4');

  return 4;
};

const createHintFive = () => {
  console.log('Hint 5');

  return 5;
};

const createHintSix = () => {
  console.log('Hint 6');

  return 6;
};

const removeAllHints = () => {
  console.log('Remove Hints');
};

export {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix,
  removeAllHints
};
