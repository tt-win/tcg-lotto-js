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

const _4d = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  list: {
    All_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum,', 'span', 'type'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
        type: ['F4Com24', 'F4Com12', 'F4Com6', 'F4Com4'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
      },
    },
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      option: {
        digit: ['TENS', 'ONES'],
      },
    },
  },
}

export default _4d;
