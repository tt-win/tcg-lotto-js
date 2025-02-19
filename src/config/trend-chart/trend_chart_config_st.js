/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
  sum               和值
  span              跨度 (最大值 - 最小值)
  BSType            大小形态
  OEType            单双形态
  PCType            质合形态
  com3              组三
  com6              组六
  baozi             豹子
  pair              对子
 */
const ST = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // 中間值 用來判斷大小
  meanValue: 5,
  singleDigit: {
    HUNDREDS: 2,
    TENS: 3,
    ONES: 4,
  },
  h5FilterConfig: {
    singleTrend: ['HUNDREDS', 'TENS', 'ONES'],
    multipleTrend: ['Last_3', 'Last_2'],
  },
  list: {
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [2, 4],
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'pair'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [3, 4],
        digit: ['TENS', 'ONES'],
      },
    },
  },
};

export default ST;
