const sourceData = require('./data/cars.json'); // All cities data

const TEXTS = {
  ONE: 'First Text',
  TWO: '<span class="hT">Second</span> Text',
  THREE: 'Third Text',
  FOUR: 'Fourth Text',
  FIVE: 'Fifth Text',
  SIX: 'Sixth Text',
  SEVEN: 'Seventh Text',
  EIGHT: 'Eighth Text',
  NINE: 'Nineth Text',
  TEN: 'Tenth Text',
  ELEVEN: 'Eleventh Text'
};

const TEXTGROUPS = {
  g1: 'Reading',
  g2: 'Interact',
  g3: 'Using'
};

export class ConcreteDataProvider {
  getVizData(chartID) {
    switch (chartID) {
      case 1:
        return sourceData;
      default:
        return this.viz;
    }
  }

  getSingleHintData(hintId) {
    switch (hintId) {
      case 1:
        return this.hint_1;
      case 2:
        return this.hint_2;
      case 3:
        return this.hint_3;
      case 4:
        return this.hint_4;
      case 5:
        return this.hint_5;
      case 6:
        return this.hint_6;
      default:
        return this.hint_1;
    }
  }

  getAllHintData() {
    return this.allHints;
  }

  constructor() {
    // Config for the chart
    this.viz = {
      data: {
        values: sourceData
      },
      spec: {
        mark: {
          type: 'rect',
          tooltip: null
        },
        encoding: {
          y: {
            field: 'a',
            type: 'nominal',
            title: 'City',
            axis: {
              labelColor: 'black',
              tickColor: 'white'
            }
          },
          x: {
            field: 'b',
            type: 'ordinal',
            title: 'Month',
            axis: {
              orient: 'top',
              labelColor: 'black',
              labelAngle: 0,
              tickColor: 'white'
            }
          },
          color: {
            field: 'c',
            type: 'quantitative'
          }
        },
        layer: [
          {
            mark: {
              type: 'rect'
            },
            encoding: {
              color: {
                field: 'c',
                type: 'quantitative',
                title: 'Value Change',
                legend: true,
                scale: {
                  domain: [-9, 0, 9],
                  range: ['steelblue', '#FDFDFD', '#D2B48C']
                }
              }
            }
          }
        ],
        config: {
          scale: {
            rangeStep: 40
          },
          axis: {
            grid: true,
            bandPosition: 0,
            labelFontSize: 13,
            titleFontSize: 14
          },
          legend: {
            gradientDirection: 'horizontal',
            titleFontSize: 13,
            labelFontSize: 13
          }
        },
        width: 500,
        height: 170,
        title: {
          text: 'Average temperature change in °C between 1990 and 1991',
          fontSize: 15
        }
      }
    };

    this.allHints = {
      text: [
        {
          h1: `<div class="vizHint">${TEXTS.ONE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h2: `<div class="vizHint">${TEXTS.TWO}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h3: `<div class="vizHint">${TEXTS.THREE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h4: `<div class="vizHint">${TEXTS.FOUR}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h5: `<div class="vizHint">${TEXTS.FIVE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h6: `<div class="vizHint">${TEXTS.SIX}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h7: `<div class="vizHint">${TEXTS.SEVEN}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h8: `<div class="vizHint">${TEXTS.EIGHT}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h9: `<div class="vizHint">${TEXTS.NINE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h10: `<div class="vizHint">${TEXTS.TEN}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h11: `<div class="vizHint">${TEXTS.ELEVEN}</div>`,
          group: `${TEXTGROUPS.g2}`
        }
      ]
    };
  }
}
