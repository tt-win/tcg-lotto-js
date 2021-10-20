/*
  numero            期號
  drawNumber        开奖号码
  digit             顯示位數 ex: 万位、千位、百位、十位、个位
 */
  const KENO = {
    numGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // 中間值 用來判斷大小
    // meanValue: 6,
    // tie: 0,
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
      kenoSumTrend: [
        'kenoTotalBS',
        'kenoTotalOE',
        'kenoTotalFE'
      ],
      kenoUpDown: ['Up_Down'],
      kenoOddEven: ['Odd_Even'],
    },
    list: {
      kenoTotalBS: {
        column: ['numero', 'drawNumber', 'sum', 'kenoTotalBS'],
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalBS'],
        options: {
          ballDigit: [0, 19],
        },
      },
      kenoTotalOE: {
        column: ['numero', 'drawNumber', 'sum', 'kenoTotalOE'],
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalOE'],
        options: {
          ballDigit: [0, 19],
        },
      },
      kenoTotalFE: {
        column: ['numero', 'drawNumber', 'sum', 'kenoTotalFE'],
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalFE'],
        options: {
          ballDigit: [0, 19],
        },
      },
      Up_Down: {
        column: ['numero', 'drawNumber', 'kenoUp', 'kenoMid', 'kenoDown'],
        h5Column: ['numero', 'drawNumber', 'kenoUp', 'kenoMid', 'kenoDown'],  
      },
      Odd_Even: {
        column: ['numero', 'drawNumber', 'kenoOdd', 'kenoEqual', 'kenoEven'],
        h5Column: ['numero', 'drawNumber', 'kenoOdd', 'kenoEqual', 'kenoEven'],
      },
    },
  };
  
  export default KENO;
  