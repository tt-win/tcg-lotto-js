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
  dragonTiger       龍虎位數
 */
const _3D = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // 中間值 用來判斷大小
  meanValue: 5,
  singleDigit: {
    HUNDREDS: 0,
    TENS: 1,
    ONES: 2,
  },
  h5FilterConfig: {
    singleTrend: ['HUNDREDS', 'TENS', 'ONES'],
    multipleTrend: ['All_3', 'First_2', 'Last_2', 'Sum'],
  },
  list: {
    All_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 2],
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 1],
        digit: ['HUNDREDS', 'TENS'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [1, 2],
        digit: ['TENS', 'ONES'],
      },
    },
    '3D_Sum': {
      column: ['numero', 'drawNumber', 'sumDigit'],
      h5Column: ['numero', 'drawNumber', 'sumDigit'],
      options: {
        sumDigit: {
          Hundreds_Tens_Sum: { type: 'sum', digit: [0, 1] },
          Hundreds_Tens_Sum_Last: { type: 'lastSum', digit: [0, 1] },
          Hundreds_Units_Sum: { type: 'sum', digit: [0, 2] },
          Hundreds_Units_Sum_Last: { type: 'lastSum', digit: [0, 2] },
          Tens_Units_Sum: { type: 'sum', digit: [1, 2] },
          Tens_Units_Sum_Last: { type: 'lastSum', digit: [1, 2] },
          Hundreds_Tens_Units_Sum: { type: 'sum', digit: [0, 1, 2] },
          Hundreds_Tens_Units_Sum_Tail: { type: 'lastSum', digit: [0, 1, 2] },
        },
      },
    },
  },
};

export default _3D;
