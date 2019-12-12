import React, { Component, Fragment } from 'react';
import { getData } from '../shared/DataProvider';

import '../../css/parcoords.css';

let graph = null;
let textLength = 15;

export default class D3Chart extends Component {
  constructor(props) {
    super(props);

    this.data = getData();
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.createViz();
    console.log('Graph: ', graph);
  }

  createViz() {
    graph = window.d3
      .parcoords()('#pcChart')
      .data(this.data)
      .margin({ top: 30, left: 3 * textLength, bottom: 40, right: 0 })
      .alpha(0.6)
      // .mode('queue')
      // .rate(5)
      .render()
      .brushMode('1D-axes') // enable brushing
      .reorderable() // I removed this for now as it can mess up with tooltips
      .interactive();
  }

  render() {
    return (
      <Fragment>
        <div
          ref={this.chartRef}
          id={'pcChart'}
          style={{ width: 100 + '%', height: 500 }}
          className={'parcoords'}
        />
      </Fragment>
    );
  }
}
