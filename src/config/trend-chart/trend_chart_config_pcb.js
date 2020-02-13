/*
  numero            期號
  digit             顯示位數
  special           特码
  specialBS         特码大小
  specialOE         特码单双
  extremum          极值
  colorBall         色波
  baozi             豹子
*/
import _ from 'lodash';

const PCB = {
  numGroup: _.times(10),
  sumNumGroup: _.times(28),
  sumMeanValue: 14,
  singleDigit: {
    firstBall: 0,
    secondBall: 1,
    thirdBall: 2,
  },
  h5FilterConfig: {
    singleTrend: ['firstBall', 'secondBall', 'thirdBall'],
    multipleTrend: ['Complex'],
  },
  list: {
    Complex: {
      column: ['numero', 'digitFixed', 'special', 'specialBS', 'specialOE', 'extremum', 'colorBall', 'baozi'],
      h5Column: ['numero', 'special', 'specialBS', 'specialOE', 'extremum', 'colorBall', 'baozi'],
      options: {
        ballDigit: [0, 2],
        digitFixed: {
          firstBall: 0,
          secondBall: 1,
          thirdBall: 2,
        },
        digit: ['firstBall', 'secondBall', 'thirdBall'],
        extremum: {
          extremumBig: [22, 27],
          extremumSmall: [0, 5],
        },
      },
    },
    Number_Spread: {
      column: ['numero', 'drawNumber', 'numberSpread', 'sumTrend'],
      h5Column: ['numero', 'drawNumber', 'numberSpread', 'sumTrend'],
      options: {
        ballDigit: [0, 2],
        sumTrend: ['sumTrend'],
      },
    },
  },
};

export default PCB;
