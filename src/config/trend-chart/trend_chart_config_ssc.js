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
const SSC = {
  numGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  kChartDigit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
  list: {
    All_5: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
      },
    },
    All_5_Complex: {
      column: ['numero', 'drawNumber', 'numberSpread', 'sum', 'span', 'type', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio'],
      options: {
        type: ['AllCom120', 'AllCom60', 'AllCom30', 'AllCom20', 'AllCom10', 'AllCom5'],
        largeSmallRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        oddEvenRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        primCompRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
      },
    },
    First_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum', 'span', 'type'],
      options: {
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS'],
        type: ['F4Com24', 'F4Com12', 'F4Com6', 'F4Com4'],
      },
    },
    Last_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum', 'span', 'type'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
        type: ['L4Com24', 'L4Com12', 'L4Com6', 'L4Com4'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS'],
      },
    },
    Middle_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
      },
    },
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      options: {
        digit: ['HUNDREDS', 'TENS', 'ONES'],
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
        digit: ['TENS', 'ONES'],
      },
    },
    Dragon_Tiger: {
      column: ['numero', 'drawNumber', 'dragonTiger'],
      options: {
        dragonTiger: [
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

export default SSC;
