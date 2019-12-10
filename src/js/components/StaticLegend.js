import React, { useEffect, Fragment } from 'react';
import StepContent from './StepContent';
import { makeStaticLegendBoxes } from '../shared/d3Interaction';
import { getAllHints } from '../shared/DataProvider';
import '../../css/legend.css';

import { Steps, Row } from 'antd';
const { Step } = Steps;

// Do this before in order to make sure we have it
const hintsText = getAllHints().text;

const StaticLegend = () => {
  useEffect(() => {
    makeStaticLegendBoxes('');
  }, []);

  return (
    <Fragment>
      <Row type="flex" justify="start" style={{ marginTop: 20 + 'px' }}>
        <Steps
          direction="vertical"
          className='stepsContainer'
          id="staticSteps"
        >
          {hintsText.map((item, idx) => (
            <Step
              id={`stepS-${idx}`}
              key={idx}
              title={<StepContent content={item[`h${idx + 1}`]} />}
              status={'process'}
            />
          ))}
        </Steps>
      </Row>
    </Fragment>
  );
};

export default StaticLegend;
