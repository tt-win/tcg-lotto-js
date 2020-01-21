/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
  numberSpread      号码分布
  sum               和值
  span              跨度 (最大值 - 最小值)
  type              组态
  largeSmallRatio   大小比
  oddEvenRatio      单双比
  primCompRatio     质合比
  BSType            大小形态
  OEType            单双形态
  PCType            质合形态
  com3              组三
  com6              组六
  baozi             豹子
  pair              对子
 */
const P3P5 = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // 中間值 用來判斷大小
  meanValue: 5,
  singleDigit: {
    TEN_THOUSANDS: 0,
    THOUSANDS: 1,
    HUNDREDS: 2,
    TENS: 3,
    ONES: 4,
  },
  h5FilterConfig: {
    singleTrend: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
    multipleTrend: ['All_5_Complex', 'P3_First_3', 'P5_Last_3', 'P3_First_2', 'P5_Last_2'],
  },
  list: {
    All_5: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 4],
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
      },
    },
    All_5_Complex: {
      column: ['numero', 'drawNumber', 'numberSpread', 'sum', 'span', 'type', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio'],
      h5Column: ['numero', 'drawNumber', 'sum', 'span', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 4],
        type: ['AllCom120', 'AllCom60', 'AllCom30', 'AllCom20', 'AllCom10', 'AllCom5'],
        largeSmallRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        oddEvenRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        primCompRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
      },
    },
    P3_First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        ballDigit: [0, 2],
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS'],
      },
    },
    P5_Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        ballDigit: [2, 4],
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    P3_First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        ballDigit: [0, 1],
        digit: ['TEN_THOUSANDS', 'THOUSANDS'],
      },
    },
    P5_Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        ballDigit: [3, 4],
        digit: ['TENS', 'ONES'],
      },
    },
  },
};

export default P3P5;
