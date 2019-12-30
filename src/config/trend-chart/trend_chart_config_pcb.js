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
  lineChartDigit: ['firstBall', 'secondBall', 'thirdBall'],
  list: {
    Com: {
      column: ['numero', 'digit', 'special', 'specialBS', 'specialOE', 'extremum', 'colorBall', 'baozi'],
      options: {
        digit: ['firstBall', 'secondBall', 'thirdBall'],
      },
    },
  },
};

export default PCB;
