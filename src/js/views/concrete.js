const sourceData = require("./data/cars.json"); // All cities data

const TEXTS = {
  ONE: "First Text",
  THREE:
    '<span class="hT">Second</span> Text',
  TWO:
    'Third Text',
  FOUR:
    'Fourth Text',
  FIVE:
    'Fifth Text',
  SIX:
    'Sixth Text'
};

const TEXTGROUPS = {
  g1: "Reading",
  g2: "Interact",
  g3: "Using"
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
          type: "rect",
          tooltip: null
        },
        encoding: {
          y: {
            field: "a",
            type: "nominal",
            title: "City",
            axis: {
              labelColor: "black",
              tickColor: "white"
            }
          },
          x: {
            field: "b",
            type: "ordinal",
            title: "Month",
            axis: {
              orient: "top",
              labelColor: "black",
              labelAngle: 0,
              tickColor: "white"
            }
          },
          color: {
            field: "c",
            type: "quantitative"
          }
        },
        layer: [
          {
            mark: {
              type: "rect"
            },
            encoding: {
              color: {
                field: "c",
                type: "quantitative",
                title: "Value Change",
                legend: true,
                scale: {
                  domain: [-9, 0, 9],
                  range: ["steelblue", "#FDFDFD", "#D2B48C"]
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
            gradientDirection: "horizontal",
            titleFontSize: 13,
            labelFontSize: 13
          }
        },
        width: 500,
        height: 170,
        title: {text: "Average temperature change in °C between 1990 and 1991", fontSize: 15},
      }
    };

    this.hint_1 = {
      hintID: 1,
      text: {
        h1: `<div class="vizHint">${TEXTS.ONE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_2 = {
      hintID: 2,
      text: {
        h2: `<div class="vizHint">${TEXTS.TWO}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_3 = {
      hintID: 3,
      text: {
        h3: `<div class="vizHint">${TEXTS.THREE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_4 = {
      hintID: 4,
      text: {
        h4: `<div class="vizHint">${TEXTS.FOUR}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_5 = {
      hintID: 5,
      text: {
        h5: `<div class="vizHint">${TEXTS.FIVE}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_6 = {
      hintID: 6,
      text: {
        h6: `<div class="vizHint">${TEXTS.SIX}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.allHints = {
      hintIDs: [
        this.hint_1.hintID,
        this.hint_2.hintID,
        this.hint_3.hintID,
        this.hint_4.hintID,
        this.hint_5.hintID,
        this.hint_6.hintID
      ],
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
        }
      ]
    };
  }
}
