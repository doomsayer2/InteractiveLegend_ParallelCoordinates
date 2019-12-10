import React, { Component, Fragment } from 'react';
import VegaLite from 'react-vega-lite';
import { Handler } from 'vega-tooltip';
import { getData } from './shared/DataProvider';

export default class VegaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cfg: getData(props.chartID)
    };
  }

  render() {
    return (
      <Fragment>
        <VegaLite
          spec={this.state.cfg.spec}
          data={this.state.cfg.data}
          tooltip={new Handler().call}
          className={`vegaViz${this.props.chartID}`}
        />
      </Fragment>
    );
  }
}
