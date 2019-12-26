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
  list: {
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        digit: ['TENS', 'ONES'],
      },
    },
  },
};

export default ST;
