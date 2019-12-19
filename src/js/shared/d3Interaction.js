import * as d3 from 'd3';
import { moveElementsToNewParent } from './util';
import {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix
} from './d3Manipulations';

const manageHints = mode => {
  switch (mode) {
    case 0:
      createHintOne();
      break;
    case 1:
      createHintTwo();
      break;
    case 2:
      createHintThree();
      break;
    case 3:
      createHintFour();
      break;
    case 4:
      createHintFive();
      break;
    case 5:
      createHintSix();
      break;
    default:
      console.log('Nothing happens');
  }
};

const enableAllHints = () => {
  createHintOne();
  createHintTwo();
  createHintThree();
  createHintFour();
  createHintFive();
  createHintSix();
};

/** FOR LEGEND BOXES NECESSARY */
const makeLegendBoxes = () => {
  d3.select('#dynamicLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'reading')
    .append('legend')
    .text('Reading the Chart');
  d3.select('#dynamicLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'interacting')
    .append('legend')
    .text('Interacting with Chart');
  d3.select('#dynamicLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'using')
    .append('legend')
    .text('Using the Chart');

  moveElementsToNewParent(['step-0', 'step-1', 'step-2', 'step-3', 'step-4'], 'reading');
  moveElementsToNewParent(['step-5', 'step-6'], 'interacting');
  moveElementsToNewParent(['step-7', 'step-8', 'step-9', 'step-10'], 'using');
};

/** FOR STATIC LEGEND BOXES NECESSARY */
const makeStaticLegendBoxes = () => {
  d3.select('#staticLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'reading2')
    .append('legend')
    .text('Reading the Chart');
  d3.select('#staticLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'interacting2')
    .append('legend')
    .text('Interacting with Chart');
  d3.select('#staticLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'using2')
    .append('legend')
    .text('Using the Chart');

  moveElementsToNewParent(['stepS-0', 'stepS-1', 'stepS-2', 'stepS-3', 'stepS-4'], 'reading2');
  moveElementsToNewParent(['stepS-5', 'stepS-6'], 'interacting2');
  moveElementsToNewParent(['stepS-7', 'stepS-8', 'stepS-9', 'stepS-10'], 'using2');
};

export default manageHints;
export { enableAllHints, makeLegendBoxes, makeStaticLegendBoxes };
