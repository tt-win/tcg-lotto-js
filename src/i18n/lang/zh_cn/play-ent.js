// ==================== 娛樂城PlayMenu ====================
const ARR_STRAIGHT = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ARR_BSOE = ['大', '小', '单', '双'];
const ARR_TOTALSUM = ['大', '小', '单', '双'];
const ARR_SPECIAL = ['豹子', '顺子', '对子', '杂六', '半顺'];
const ARR_DRAGON = ['虎', '龙', '和'];
const createObj = (playId, type) => {
  const obj = {};
  let item = [];
  switch (type) {
    case 'straight':
      item = [].concat(ARR_STRAIGHT);
      break;
    case 'bsoe':
      item = [].concat(ARR_BSOE);
      break;
    case 'totalsum':
      item = [].concat(ARR_TOTALSUM);
      break;
    case 'special':
      item = [].concat(ARR_SPECIAL);
      break;
    case 'dragon':
      item = [].concat(ARR_DRAGON);
      break;
    default:
      break;
  }
  item.forEach((data, betContent) => {
    obj[`${playId}_${betContent}`] = data;
  });
  return obj;
};

// 第一球
const firstStraightENT = createObj(1756, 'straight');
const firstBSOEENT = createObj(1758, 'bsoe');
const firstTotalSumENT = createObj(1759, 'totalsum');
const firstFirst3ENT = createObj(1761, 'special');
const firstMiddle3ENT = createObj(1762, 'special');
const firstLast3ENT = createObj(1763, 'special');
// 第二球
const secondStraightENT = createObj(1766, 'straight');
const secondBSOEENT = createObj(1768, 'bsoe');
const secondTotalSumENT = createObj(1769, 'totalsum');
const secondFirst3ENT = createObj(1771, 'special');
const secondMiddle3ENT = createObj(1772, 'special');
const secondLast3ENT = createObj(1773, 'special');
// 第三球
const thirdStraightENT = createObj(1776, 'straight');
const thirdBSOEENT = createObj(1778, 'bsoe');
const thirdTotalSumENT = createObj(1779, 'totalsum');
const thirdFirst3ENT = createObj(1781, 'special');
const thirdMiddle3ENT = createObj(1782, 'special');
const thirdLast3ENT = createObj(1783, 'special');
// 第四球
const fourthStraightENT = createObj(1786, 'straight');
const fourthBSOEENT = createObj(1788, 'bsoe');
const fourthTotalSumENT = createObj(1789, 'totalsum');
const fourthFirst3ENT = createObj(1791, 'special');
const fourthMiddle3ENT = createObj(1792, 'special');
const fourthLast3ENT = createObj(1793, 'special');
// 第五球
const fifthStraightENT = createObj(1796, 'straight');
const fifthBSOEENT = createObj(1798, 'bsoe');
const fifthTotalSumENT = createObj(1799, 'totalsum');
const fifthFirst3ENT = createObj(1801, 'special');
const fifthMiddle3ENT = createObj(1802, 'special');
const fifthLast3ENT = createObj(1803, 'special');
// 龍虎鬥
const dragon54ENT = createObj(1843, 'dragon');
const dragon53ENT = createObj(1844, 'dragon');
const dragon52ENT = createObj(1845, 'dragon');
const dragon51ENT = createObj(1846, 'dragon');
const dragon43ENT = createObj(1847, 'dragon');
const dragon42ENT = createObj(1848, 'dragon');
const dragon41ENT = createObj(1849, 'dragon');
const dragon32ENT = createObj(1850, 'dragon');
const dragon31ENT = createObj(1851, 'dragon');
const dragon21ENT = createObj(1852, 'dragon');
// 全五中一
const fiveHaveOneStraightENT = createObj(1855, 'straight');
// 兩面
const twoSideFirstBSOEENT = createObj(1830, 'bsoe');
const twoSideSecondBSOEENT = createObj(1832, 'bsoe');
const twoSideThirdBSOEENT = createObj(1834, 'bsoe');
const twoSideFourthBSOEENT = createObj(1836, 'bsoe');
const twoSideFifthBSOEENT = createObj(1838, 'bsoe');
const twoSideTotalSumBSOEENT = createObj(1840, 'totalsum');
// 整合
// 第一球
const combineFirstStraightENT = createObj(1805, 'straight');
const combineFirstBSOEENT = createObj(1806, 'bsoe');
// 第二球
const combineSecondStraightENT = createObj(1808, 'straight');
const combineSecondBSOEENT = createObj(1809, 'bsoe');
// 第三球
const combineThirdStraightENT = createObj(1811, 'straight');
const combineThirdBSOEENT = createObj(1812, 'bsoe');
// 第四球
const combineFourthStraightENT = createObj(1814, 'straight');
const combineFourthBSOEENT = createObj(1815, 'bsoe');
// 第五球
const combineFifthStraightENT = createObj(1817, 'straight');
const combineFifthBSOEENT = createObj(1818, 'bsoe');
// 特殊玩法
const combineFirst3ENT = createObj(1820, 'special');
const combineMiddle3ENT = createObj(1822, 'special');
const combineLast3ENT = createObj(1824, 'special');
// 總和大小單雙
const combineTotalSumENT = createObj(1826, 'totalsum');
// 龍虎鬥
const combineDragonENT = createObj(1827, 'dragon');

const entertainmentPlayMenu = {
  // 第一球
  ...firstStraightENT,
  ...firstBSOEENT,
  ...firstTotalSumENT,
  ...firstFirst3ENT,
  ...firstMiddle3ENT,
  ...firstLast3ENT,
  // 第二球
  ...secondStraightENT,
  ...secondBSOEENT,
  ...secondTotalSumENT,
  ...secondFirst3ENT,
  ...secondMiddle3ENT,
  ...secondLast3ENT,
  // 第三球
  ...thirdStraightENT,
  ...thirdBSOEENT,
  ...thirdTotalSumENT,
  ...thirdFirst3ENT,
  ...thirdMiddle3ENT,
  ...thirdLast3ENT,
  // 第四球
  ...fourthStraightENT,
  ...fourthBSOEENT,
  ...fourthTotalSumENT,
  ...fourthFirst3ENT,
  ...fourthMiddle3ENT,
  ...fourthLast3ENT,
  // 第五球
  ...fifthStraightENT,
  ...fifthBSOEENT,
  ...fifthTotalSumENT,
  ...fifthFirst3ENT,
  ...fifthMiddle3ENT,
  ...fifthLast3ENT,
  // 龍虎鬥
  ...dragon54ENT,
  ...dragon53ENT,
  ...dragon52ENT,
  ...dragon51ENT,
  ...dragon43ENT,
  ...dragon42ENT,
  ...dragon41ENT,
  ...dragon32ENT,
  ...dragon31ENT,
  ...dragon21ENT,
  // 全五中一
  ...fiveHaveOneStraightENT,
  // 兩面
  ...twoSideFirstBSOEENT,
  ...twoSideSecondBSOEENT,
  ...twoSideThirdBSOEENT,
  ...twoSideFourthBSOEENT,
  ...twoSideFifthBSOEENT,
  ...twoSideTotalSumBSOEENT,
  // 整合
  ...combineFirstStraightENT,
  ...combineFirstBSOEENT,
  ...combineSecondStraightENT,
  ...combineSecondBSOEENT,
  ...combineThirdStraightENT,
  ...combineThirdBSOEENT,
  ...combineFourthStraightENT,
  ...combineFourthBSOEENT,
  ...combineFifthStraightENT,
  ...combineFifthBSOEENT,
  ...combineFirst3ENT,
  ...combineMiddle3ENT,
  ...combineLast3ENT,
  ...combineTotalSumENT,
  ...combineDragonENT,
};

export default entertainmentPlayMenu;
// ==================== 娛樂城PlayMenu ====================
