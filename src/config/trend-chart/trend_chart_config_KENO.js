/*
  numero            期號
  drawNumber        开奖号码
 */
  const KENO = {
    numGroup: [],
    singleDigit: {},
    lineChart:[
      'sum'
    ], 
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
  