import React, { Component, Fragment } from 'react';
import parse from 'html-react-parser';
// import VegaChart from './views/VegaChart';
import D3Chart from './views/D3Chart';
import Legend from './Legend';
import StaticLegend from './components/StaticLegend';
import Greeting from './components/Greeting';
import ModeSwitcher from './components/ModeSwitcher';
import FinishStudy from './components/FinishStudy';
import Header from './components/Header';
import manageHints from './shared/d3Interaction';
import { LoadingIndicator } from './shared/util';
import { CONCRETE, MAX_HINTS, VIZ_DESC } from './shared/constants';

import '../css/main.css';

// Antd
import { Row, Col, Divider, Button, message } from 'antd';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true, // Used to show the loading indicator of the page
      init: false, // Used to decide if we greet the user or not
      view: CONCRETE, // Decide which Mode we are in or showing for the user
      mode: 0, // Show at which explain step we are
      showAllHints: false
    };

    // Bindings here
    this.startMainApp = this.startMainApp.bind(this);
    this.changeShowAllHints = this.changeShowAllHints.bind(this);
  }

  /**
   * We set the loading indicator to false in order to show that we are ready.
   */
  componentDidMount() {
    this.setState({ loading: false });
  }

  componentDidUpdate() {
    manageHints(this.state.mode);
  }

  /**
   * This method is used in order to start the main application and switch away form the explain screen.
   */
  startMainApp() {
    this.setState({ mode: 0, init: false });
    message.success('Good! You are ready to go!');
  }

  /**
   * This method can be used in order to toggle the view for all hints.
   * @param show decides wheter to show all hints or not.
   */
  changeShowAllHints(show) {
    this.setState({ showAllHints: show });
  }

  /**
   * This method prevents the user from going over too many steps.
   * @param id of the current step we are in
   */
  changeVis(id) {
    let mode = id;
    if (id > MAX_HINTS) mode = MAX_HINTS;
    if (id < 0) mode = 0;
    this.setState({ mode: mode });
  }

  render() {
    const { mode, view, showAllHints } = this.state;
    // noinspection ThisExpressionReferencesGlobalObjectJS
    return (
      <div>
        {this.state.loading ? (
          <LoadingIndicator css="centered" />
        ) : this.state.init ? (
          <Row type="flex" justify="start">
            <Col span={24} style={{ marginTop: 10 + '%' }}>
              <Greeting startMainApp={this.startMainApp} />
            </Col>
          </Row>
        ) : (
          <Fragment>
            <Header />
            <Divider />
            <div id="vizHeader" style={{ marginTop: 40 + 'px' }}>
              <Row type="flex" justify="start">
                <Col md={15} lg={15} xxl={12}>
                  <h6 className="vizDesc">{parse(VIZ_DESC)}</h6>
                </Col>
                <Col md={9} lg={9} xxl={8} className="pullRight">
                  <ModeSwitcher
                    mode={mode}
                    changeShowAllHints={this.changeShowAllHints}
                  />
                  <Button
                    id="previous"
                    type="primary"
                    onClick={() => this.changeVis(mode - 1)}
                    disabled={mode === 0 || showAllHints}
                  >
                    Previous
                  </Button>
                  <Button
                    id="next"
                    type="primary"
                    onClick={() => this.changeVis(mode + 1)}
                    disabled={mode >= MAX_HINTS - 1 || showAllHints}
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </div>
            <div id="vizMain">
              <Row type="flex" justify="start">
                <Col md={15} lg={17} xxl={12}>
                  <Row type="flex" justify="center" style={{marginLeft: -100 + 'px'}}>
                    {/* <VegaChart mode={mode} view={view} chartID={1} /> */}
                    <D3Chart mode={mode} />
                  </Row>
                </Col>
                <Col md={9} lg={7} xxl={8}>
                  <div id="dynamicLegend">
                    <Legend
                      mode={mode}
                      view={view}
                      cb={i => this.changeVis(i)}
                    />
                  </div>
                  <div id="staticLegend" className="hiddenClass">
                    <StaticLegend />
                  </div>
                </Col>
              </Row>
            </div>
            <div id="vizControls" style={{ marginTop: 40 + 'px' }}>
              <FinishStudy mode={mode} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
