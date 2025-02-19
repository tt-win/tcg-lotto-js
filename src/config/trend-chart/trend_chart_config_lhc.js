/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
  special           特码
  total             总数
  totalBS           总单双
  totalOE           总大小
  colorBall         色波
  specialBS         特单双
  specialOE         特大小
  specialSumBS      特合单双
  specialSumOE      特合大小
  specialTailBS     特尾大小
 */
import _ from 'lodash';

const LHC = {
  numGroup: _.times(49, (n) => _.padStart(n + 1, 2, '0')),
  sumMeanValue: 175,
  specialMeanValue: 25,
  specialSumMeanValue: 7,
  specialTailMeanValue: 5,
  singleDigit: {
    normalOne: 0,
    normalTwo: 1,
    normalThree: 2,
    normalFour: 3,
    normalFive: 4,
    normalSix: 5,
    special: 6,
  },
  h5FilterConfig: {
    singleTrend: ['Digit_Fixed'],
    multipleTrend: ['Complex_LHC'],
  },
  list: {
    Complex_LHC: {
      column: [
        'numero',
        'digitFixed',
        'total',
        'totalBS',
        'totalOE',
        'colorBallLHC',
        'specialBSLHC',
        'specialOELHC',
        'specialSumBS',
        'specialSumOE',
        'specialTailBS',
        'chineseZodiac',
      ],
      h5Column: [
        'numero',
        'total',
        'totalBS',
        'totalOE',
        'colorBallLHC',
        'specialBSLHC',
        'specialOELHC',
        'specialSumBS',
        'specialSumOE',
        'specialTailBS',
      ],
      options: {
        ballDigit: [0, 6],
        digitFixed: {
          normalOne: 0,
          normalTwo: 1,
          normalThree: 2,
          normalFour: 3,
          normalFive: 4,
          normalSix: 5,
          special: 6,
        },
      },
    },
  },
};

export default LHC;
