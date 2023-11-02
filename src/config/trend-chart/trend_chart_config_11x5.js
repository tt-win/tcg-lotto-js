/*
  numero            期号
  drawNumber        开奖号码
  digit             顯示位數
  numberSpread      号码分布
  largeSmallRatio   大小比
  oddEvenRatio      单双比
  primCompRatio     质合比
  sum               和值
  span              跨度
  middleNumber      中位值
  BSType            大小形态
  OEType            单双形态
  PCType            质合形态
  dragonTiger       龍虎位數
 */

const _11X5 = {
  numGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  // 中間值 用來判斷大小
  meanValue: 6,
  tie: 11,
  singleDigit: {
    firstBall: 0,
    secondBall: 1,
    thirdBall: 2,
    fourthBall: 3,
    fifthBall: 4,
  },
  // H5號碼分佈位數
  h5NumberSpreadDigit: {
    fullSpread: [0, 10],
    First_3: [0, 2],
    First_2: [0, 1],
  },
  h5FilterConfig: {
    singleTrend: ['firstBall', 'secondBall', 'thirdBall', 'fourthBall', 'fifthBall'],
    multipleTrend: ['Fixed_Place_Complex', 'First_3', 'First_2'],
    dragonTiger: ['Dragon_Tiger'],
    numberSpread: ['fullSpread', 'First_3', 'First_2'],
  },
  list: {
    Fixed_Place: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 4],
        digit: ['firstBall', 'secondBall', 'thirdBall', 'fourthBall', 'fifthBall'],
      },
    },
    Fixed_Place_Complex: {
      column: ['numero', 'drawNumber', 'numberSpread', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio', 'sum', 'span', 'middleNumber'],
      h5Column: ['numero', 'drawNumber', 'largeSmallRatio', 'oddEvenRatio', 'middleNumber'],
      options: {
        ballDigit: [0, 4],
        largeSmallRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        oddEvenRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        primCompRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      options: {
        ballDigit: [0, 2],
        digit: ['firstBall', 'secondBall', 'thirdBall'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span'],
      options: {
        ballDigit: [0, 1],
        digit: ['firstBall', 'secondBall'],
      },
    },
    Dragon_Tiger: {
      column: ['numero', 'drawNumber', 'dragonTiger'],
      h5Column: ['numero', 'drawNumber', 'dragonTiger'],
      options: {
        dragonTiger: {
          Dragon_Tiger_Tie_5_4: [0, 1],
          Dragon_Tiger_Tie_5_3: [0, 2],
          Dragon_Tiger_Tie_5_2: [0, 3],
          Dragon_Tiger_Tie_5_1: [0, 4],
          Dragon_Tiger_Tie_4_3: [1, 2],
          Dragon_Tiger_Tie_4_2: [1, 3],
          Dragon_Tiger_Tie_4_1: [1, 4],
          Dragon_Tiger_Tie_3_2: [2, 3],
          Dragon_Tiger_Tie_3_1: [2, 4],
          Dragon_Tiger_Tie_2_1: [3, 4],
        },
      },
    },
  },
};

export default _11X5;
