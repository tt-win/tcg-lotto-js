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
  list: {
    Com: {
      column: [
        'numero',
        'drawNumber',
        'digit',
        'special',
        'total',
        'totalBS',
        'totalOE',
        'colorBall',
        'specialBS',
        'specialOE',
        'specialSumBS',
        'specialSumOE',
        'specialTailBS',
      ],
      options: {
        digit: ['normalOne', 'normalTwo', 'normalThree', 'normalFour', 'normalFive', 'normalSix'],
      },
    },
  },
};

export default LHC;
