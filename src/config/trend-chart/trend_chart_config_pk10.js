/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
 */
const PK10 = {
  numGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // 中間值 用來判斷大小
  meanValue: 6,
  singleDigit: {
    firstPlace: 0,
    secondPlace: 1,
    thirdPlace: 2,
    fourthPlace: 3,
    fifthPlace: 4,
    sixthPlace: 5,
    seventhPlace: 6,
    eighthPlace: 7,
    ninthPlace: 8,
    tenthPlace: 9,
  },
  h5FilterConfig: {
    singleTrend: [
      'firstPlace',
      'secondPlace',
      'thirdPlace',
      'fourthPlace',
      'fifthPlace',
      'sixthPlace',
      'seventhPlace',
      'eighthPlace',
      'ninthPlace',
      'tenthPlace',
    ],
    dragonTiger: ['Dragon_Tiger'],
  },
  list: {
    First_To_Third: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [0, 2],
        digit: ['firstPlace', 'secondPlace', 'thirdPlace'],
      },
    },
    Fourth_To_Sixth: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [3, 5],
        digit: ['fourthPlace', 'fifthPlace', 'sixthPlace'],
      },
    },
    Seventh_To_Tenth: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        // 判斷 計算所需 開獎號碼位置
        ballDigit: [6, 9],
        digit: ['seventhPlace', 'eighthPlace', 'ninthPlace', 'tenthPlace'],
      },
    },
    sum: {
      column: ['numero', 'drawNumber', 'sumDigit'],
      options: {
        sumDigit: {
          firstSecondSum: { type: 'sum', digit: [0, 1] },
          firstSecondThirdSum: { type: 'sum', digit: [0, 1, 2] },
          firstThirdSum: { type: 'sum', digit: [0, 9] },
        },
      },
    },
    BSOE: {
      column: ['numero', 'drawNumber', 'BSOEDigit'],
      options: {
        BSOEDigit: {
          firstBSOE: 0,
          secondBSOE: 1,
          thirdBSOE: 2,
          fourthBSOE: 3,
          fifthBSOE: 4,
          sixthBSOE: 5,
          seventhBSOE: 6,
          eighthBSOE: 7,
          ninthBSOE: 8,
          tenthBSOE: 9,
        },
      },
    },
    Dragon_Tiger: {
      column: ['numero', 'drawNumber', 'dragonTiger'],
      h5Column: ['numero', 'drawNumber', 'dragonTiger'],
      options: {
        dragonTiger: {
          Dragon_Tiger_1_VS_10: [0, 9],
          Dragon_Tiger_2_VS_9: [1, 8],
          Dragon_Tiger_3_VS_8: [2, 7],
          Dragon_Tiger_4_VS_7: [3, 6],
          Dragon_Tiger_5_VS_6: [4, 5],
        },
      },
    },
  },
};

export default PK10;
