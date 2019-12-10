import * as d3 from 'd3';
import { moveElementsToNewParent } from './util';
import {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix
} from "./d3Manipulations";


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
      console.log("Nothing happens");
  }
};

const enableAllHints = () => {
  createHintOne();
  createHintTwo();
  createHintThree();
  createHintFour();
  createHintFive();
  createHintSix();
}

/** FOR LEGEND BOXES NECESSARY */
const makeLegendBoxes = () => {
  d3.select('#dynamicLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'reading')
    .append('legend')
    .text('Reading the Chart');
  d3.select('#dynamicLegend > div > .stepsContainer')
    .append('fieldset')
    .attr('id', 'using')
    .append('legend')
    .text('Using the Chart');

  moveElementsToNewParent(['step-0', 'step-1', 'step-2'], 'reading');
  moveElementsToNewParent(['step-3', 'step-4', 'step-5'], 'using');
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
    .attr('id', 'using2')
    .append('legend')
    .text('Using the Chart');

  moveElementsToNewParent(['stepS-0', 'stepS-1', 'stepS-2'], 'reading2');
  moveElementsToNewParent(['stepS-3', 'stepS-4', 'stepS-5'], 'using2');
};

export default manageHints;
export { enableAllHints, makeLegendBoxes, makeStaticLegendBoxes };