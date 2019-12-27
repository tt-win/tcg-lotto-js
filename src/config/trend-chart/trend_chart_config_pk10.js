/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
 */
const PK10 = {
  numGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  kChartDigit: [
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
  list: {
    First_To_Fifth: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        digit: ['firstPlace', 'secondPlace', 'thirdPlace', 'fourthPlace', 'fifthPlace'],
      },
    },
    Sixth_To_Tenth: {
      column: ['numero', 'drawNumber', 'digit'],
      options: {
        digit: ['sixthPlace', 'seventhPlace', 'eighthPlace', 'ninthPlace', 'tenthPlace'],
      },
    },
    Dragon_Tiger: {
      column: ['numero', 'drawNumber', 'dragonTiger'],
      options: {
        dragonTiger: [
          'Dragon_Tiger_1_VS_10',
          'Dragon_Tiger_2_VS_9',
          'Dragon_Tiger_3_VS_8',
          'Dragon_Tiger_4_VS_7',
          'Dragon_Tiger_5_VS_6',
        ],
      },
    },
  },
};

export default PK10;
