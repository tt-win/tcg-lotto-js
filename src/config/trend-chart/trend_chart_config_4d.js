/*
  numero            期号
  drawNumber        开奖号码
  digit             顯示位數
  sum               和值
  span              跨度
  BSType            大小形态
  OEType            单双形态
  PCType            质合形态
  com3              组三
  com6              组六
  baozi             豹子
  pair              对子
  type              组态
 */

const _4D = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // 中間值 用來判斷大小
  meanValue: 5,
  singleDigit: {
    THOUSANDS: 0,
    HUNDREDS: 1,
    TENS: 2,
    ONES: 3,
  },
  h5FilterConfig: {
    singleTrend: ['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
    multipleTrend: ['All_4', 'First_3', 'Last_3', 'First_2', 'Last_2'],
  },
  list: {
    All_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum', 'span', 'type'],
      h5Column: ['numero', 'drawNumber', 'sum', 'span', 'type'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 3],
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
        type: ['F4Com24', 'F4Com12', 'F4Com6', 'F4Com4'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 2],
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
      },
    },
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [1, 3],
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 1],
        digit: ['THOUSANDS', 'HUNDREDS'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [2, 3],
        digit: ['TENS', 'ONES'],
      },
    },
  },
}

export default _4D;
