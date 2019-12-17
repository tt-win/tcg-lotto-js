/*
  numero            期号
  drawNumber        开奖号码
  digit             顯示位數
  numberSpread      号码分布
  largeSmallRatio   大小比 : 5:0 4:1 3:2 2:3 1:4 0:5，五球的大小比重 01-05为小 06-11为大
  oddEvenRatio      单双比 : 5:0 4:1 3:2 2:3 1:4 0:5，五球的单双比重
  primCompRatio     质合比 : 5:0 4:1 3:2 2:3 1:4 0:5，五球的质合比重
  sum               和值 : 五球奖号的总和
  span              跨度 : 五球开奖号最大值 - 最小值
  middleNumber      中位值 : 开奖号从小排列到大，第三球的奖号
  BSType            大小形态
  OEType            单双形态
  PCType            质合形态
  dragonTiger       龍虎位數
 */

const _11X5 = {
  numGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  list: {
    Fixed_Place: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        digit: ['firstBall_11X5', 'secondBall_11X5', 'thirdBall_11X5', 'fourthBall_11X5', 'fifthBall_11X5'],
      },
    },
    Fixed_Place_Complex: {
      column: ['numero', 'drawNumber', 'numberSpread', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio', 'sum', 'span', 'middleNumber'],
      options: {
        largeSmallRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        oddEvenRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        primCompRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      options: {
        digit: ['firstBall_11X5', 'secondBall_11X5', 'thirdBall_11X5'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      options: {
        digit: ['firstBall_11X5', 'secondBall_11X5'],
      },
    },
    Dragon_Tiger: {
      column: ['numero', 'drawNumber', 'dragonTiger'],
      options: {
        dragonTigerDigit: [
          'Dragon_Tiger_Tie_5_4',
          'Dragon_Tiger_Tie_5_3',
          'Dragon_Tiger_Tie_5_2',
          'Dragon_Tiger_Tie_5_1',
          'Dragon_Tiger_Tie_4_3',
          'Dragon_Tiger_Tie_4_2',
          'Dragon_Tiger_Tie_4_1',
          'Dragon_Tiger_Tie_3_2',
          'Dragon_Tiger_Tie_3_1',
          'Dragon_Tiger_Tie_2_1',
        ],
      },
    },
  },
};

export default _11X5;
