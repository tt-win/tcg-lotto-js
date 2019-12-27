/*
  numero            期號
  drawNumber        开奖号码
  firstBall         第一位走势
  firstBallBS       第一位大小
  firstBallOE       第一位单双
  secondBall        第二位走势
  secondBallBS      第二位大小
  secondBallOE      第二位单双
  thirdBall         第三位走势
  thirdBallBS       第三位大小
  thirdBallOE       第三位单双
  span              跨度 (最大值 - 最小值)
  numberSpread_K3   号码走势(跟 numberSpread 邏輯一樣 )
  sumTrend          和值走势
  pair_K3           对子（二同号）
  com6_K3           组六（三不同）
  baozi_K3          豹子（三同号）
  sumBSOE          和值大小单双
 */
const K3 = {
  numGroup: [1, 2, 3, 4, 5, 6],
  kChartDigit: ['HUNDREDS', 'TENS', 'ONES'],
  list: {
    Com: {
      column: [
        'numero',
        'drawNumber',
        'firstBall',
        'firstBallBS',
        'firstBallOE',
        'secondBall',
        'secondBallBS',
        'secondBallOE',
        'thirdBall',
        'thirdBallBS',
        'thirdBallOE',
        'span',
      ],
    },
    Sum: {
      column: ['numero', 'drawNumber', 'numberSpread_K3', 'sumTrend', 'pair_K3', 'com6_K3', 'baozi_K3', 'sumBSOE'],
    },
  },
};

export default K3;
