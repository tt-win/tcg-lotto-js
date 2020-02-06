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
    multipleTrend: ['All_5_Complex', 'First_4', 'Last_4', 'First_3', 'Middle_3', 'Last_3','First_2', 'Last_2'],
    dragonTiger: ['Dragon_Tiger'],
  },
  list: {
    All_5: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 4],
        // 位數 萬千百十個
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
      },
    },
    All_5_Complex: {
      column: ['numero', 'drawNumber', 'numberSpread', 'sum', 'span', 'type', 'largeSmallRatio', 'oddEvenRatio', 'primCompRatio'],
      h5Column: ['numero', 'drawNumber', 'sum', 'largeSmallRatio', 'oddEvenRatio'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 4],
        // 組態 結果
        type: ['AllCom120', 'AllCom60', 'AllCom30', 'AllCom20', 'AllCom10', 'AllCom5'],
        // 比值
        largeSmallRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        // 比值
        oddEvenRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
        // 比值
        primCompRatio: ['5:0', '4:1', '3:2', '2:3', '1:4', '0:5'],
      },
    },
    First_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum', 'span', 'type'],
      h5Column: ['numero', 'drawNumber', 'sum', 'span', 'type'],
      options: {
        ballDigit: [0, 3],
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS', 'TENS'],
        type: ['F4Com24', 'F4Com12', 'F4Com6', 'F4Com4'],
      },
    },
    Last_4: {
      column: ['numero', 'drawNumber', 'digit', 'sum', 'span', 'type'],
      h5Column: ['numero', 'drawNumber', 'sum', 'span', 'type'],
      options: {
        ballDigit: [1, 4],
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'],
        type: ['L4Com24', 'L4Com12', 'L4Com6', 'L4Com4'],
      },
    },
    First_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType',  'com3', 'com6', 'baozi'],
      options: {
        ballDigit: [0, 2],
        digit: ['TEN_THOUSANDS', 'THOUSANDS', 'HUNDREDS'],
      },
    },
    Middle_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        ballDigit: [1, 3],
        digit: ['THOUSANDS', 'HUNDREDS', 'TENS'],
      },
    },
    Last_3: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'com3', 'com6', 'baozi'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'com3', 'com6', 'baozi'],
      options: {
        ballDigit: [2, 4],
        digit: ['HUNDREDS', 'TENS', 'ONES'],
      },
    },
    First_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'pair'],
      options: {
        ballDigit: [0, 1],
        digit: ['TEN_THOUSANDS', 'THOUSANDS'],
      },
    },
    Last_2: {
      column: ['numero', 'drawNumber', 'digit', 'BSType', 'OEType', 'PCType', 'sum', 'span', 'pair'],
      h5Column: ['numero', 'drawNumber', 'BSType', 'OEType', 'PCType', 'sum', 'pair'],
      options: {
        ballDigit: [3, 4],
        digit: ['TENS', 'ONES'],
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

export default SSC;
