const sourceData = require('./data/cars.json'); // All cities data

const TEXTS = {
  ONE: 'Each <span class="hT">vertical axis</span> represents one attribute (e.g., acceleration).',
  TWO: 'Each line going through all axes represents a specific <span class="hT">car type</span> (e.g., Mazda RX4) and its <span class="hT">attribute</span> values (e.g., Mazda RX4 has 6 cylinders).',
  THREE: '<span class="hT">Parallel lines</span> between two adjacent axes indicate a <span class="hT">positive correlation</span> (e.g., more horsepower means heavier cars).',
  FOUR: 'Crossing/intersecting lines between two adjacent axes (like an <span class="hT">X-shape</span>) indicate a <span class="hT">negative correlation</span> (e.g., the higher the horsepower, the lower the acceleration (mph)). ',
  FIVE: 'Placing two axes next to each other helps to analyze their <span class="hT">relationship</span>. For example, click on the header <span class="hT">Weight (lbs)</span> and drag it to the left of the axis Horsepower (hp).',
  SIX: '<span class="hT">Filter</span> the data based on attribute values (e.g., ProdYear) by creating a box through <span class="hT">clicking-and-dragging</span> at the same time over the desired value range (multiple-selections are possible).',
  SEVEN: 'The <span class="hT">acceleration</span> of the car <span class="hT">Chrysler Valiant</span> is <span class="hT">20.2 mph</span>.',
  EIGHT: '<span class="hT">Maserati Bora</span> has an <span class="hT">accelaration</span> of 14.6 mph, a <span class="hT">horsepower</span> of 335.0 hp, a <span class="hT">weight</span> of 3570 lbs, was <span class="hT">produced</span> in 1972, and has 8 <span class="hT">cylinders</span>.',
  NINE: 'The car <span class="hT">Lincoln Continental</span> has a higher <span class="hT">weight</span> than the <span class="hT">Lotus Europa</span>.',
  TEN: 'The <span class="hT">more cylinders</span> a car has, the <span class="hT">more Horsepower (hp)</span> it has.'
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
        }
      ]
    };
  }
}
