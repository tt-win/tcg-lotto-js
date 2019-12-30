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
  lineChartDigit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
  list: {
    All_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        digit: ['TEN_THOUSANDS', 'THOUSANDS'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        digit: ['HUNDREDS', 'TENS'],
      },
    },
    Sum: {
      column: ['numero', 'digit'],
      options: {
        digit: [
          'Hundreds_Tens_Sum',
          'Hundreds_Tens_Sum_Last',
          'Hundreds_Units_Sum',
          'Hundreds_Units_Sum_Last',
          'Tens_Units_Sum',
          'Tens_Units_Sum_Last',
          'Hundreds_Tens_Units_Sum',
          'Hundreds_Tens_Units_Sum_Tail',
        ],
      },
    },
  },
};

export default _3D;
