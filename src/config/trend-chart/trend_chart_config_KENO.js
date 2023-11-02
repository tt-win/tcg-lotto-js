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
      kenoTrend: {
        column: [
          'numero', 
          'drawNumber', 
          'kenoSum', 
          'kenoTotalBS', 
          'kenoTotalOE', 
          'kenoTotalFE',
          'kenoUp', 
          'kenoMid', 
          'kenoDown',
          'kenoOdd', 
          'kenoEqual', 
          'kenoEven',
        ],
        options: {
          ballDigit: [0, 19],
        },
      },
    },
    h5List: {
      kenoTotalBS: {
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalBS'],
        options: {
          ballDigit: [0, 19],
        },
      },
      kenoTotalOE: {
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalOE'],
        options: {
          ballDigit: [0, 19],
        },
      },
      kenoTotalFE: {
        h5Column: ['numero', 'drawNumber', 'sum', 'kenoTotalFE'],
        options: {
          ballDigit: [0, 19],
        },
      },
      Up_Down: {
        h5Column: ['numero', 'drawNumber', 'kenoUp', 'kenoMid', 'kenoDown'],  
      },
      Odd_Even: {
        h5Column: ['numero', 'drawNumber', 'kenoOdd', 'kenoEqual', 'kenoEven'],
      },
    }
  };
  
  export default KENO;
