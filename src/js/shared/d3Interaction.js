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

  moveElementsToNewParent(['step-0', 'step-1', 'step-2', 'step-3'], 'reading');
  moveElementsToNewParent(['step-4', 'step-5'], 'interacting');
  moveElementsToNewParent(['step-6', 'step-7', 'step-8', 'step-9'], 'using');
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

  moveElementsToNewParent(['stepS-0', 'stepS-1', 'stepS-2', 'stepS-3'], 'reading2');
  moveElementsToNewParent(['stepS-4', 'stepS-5'], 'interacting2');
  moveElementsToNewParent(['stepS-6', 'stepS-7', 'stepS-8', 'stepS-9'], 'using2');
};

export default manageHints;
export { enableAllHints, makeLegendBoxes, makeStaticLegendBoxes };
