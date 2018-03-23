// ==================== 娛樂城PlayMenu ====================
const chreateNumberArray = (firstNum, length) => {
    const arr = [];
    for (let i = 0; i < length; i += 1) {
        arr.push(`${firstNum + i}`);
    }
    return arr;
};

const ARR_STRAIGHT = chreateNumberArray(0, 10);
const ARR_BSOE = ['大', '小', '单', '双'];
const ARR_TOTALSUM = ['大', '小', '单', '双'];
const ARR_SPECIAL = ['豹子', '顺子', '对子', '杂六', '半顺'];
const ARR_DRAGON = ['虎', '龙', '和'];
const ARR_PK10_STRAIGHT = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const ARR_TWO_SUM = chreateNumberArray(3, 17);
const ARR_THREE_SUM = chreateNumberArray(6, 22);

const ARR_SPECIAL_SUM = chreateNumberArray(0, 28);
const ARR_EXTREMUM = ['极大', '极小' ];
const ARR_COLOR = ['', '红', '蓝', '绿' ];
const ARR_BOE = ['大单', '大双' ];
const ARR_SOE = ['小单', '小双' ];

const ARR_K3_STRAIGHT = chreateNumberArray(3, 26);
const OBJ_K3_Different_Two =  {
    '12': '1,2',
    '13': '1,3',
    '14': '1,4',
    '15': '1,5',
    '16': '1,6',
    '23': '2,3',
    '24': '2,4',
    '25': '2,5',
    '26': '2,6',
    '34': '3,4',
    '35': '3,5',
    '36': '3,6',
    '45': '4,5',
    '46': '4,6',
    '56': '5,6',
};
const ARR_K3_Single_Same = chreateNumberArray(1, 6);
const OBJ_K3_Boazi = {
    '1': '1,1,1',
    '2': '2,2,2',
    '3': '3,3,3',
    '4': '4,4,4',
    '5': '5,5,5',
    '6': '6,6,6',
};
const ARR_K3_Any_Boazi = ['任意豹子'];
const OBJ_K3_Single_SameTwo = {
    '1': '1,1',
    '2': '2,2',
    '3': '3,3',
    '4': '4,4',
    '5': '5,5',
    '6': '6,6',
};

const ARR_Total_Sum_Group = ['和大', '和小', '和单', '和双', '尾大', '尾小' ];

const ARR_11X5_ball = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];

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
        case 'pk10Straight':
            item = [].concat(ARR_PK10_STRAIGHT);
            break;
        case 'twoSum':
            item = [].concat(ARR_TWO_SUM);
            break;
        case 'threeSum':
            item = [].concat(ARR_THREE_SUM);
            break;
        case 'spcialSum':
            item = [].concat(ARR_SPECIAL_SUM);
            break;
        case 'extremum':
            item = [].concat(ARR_EXTREMUM);
            break;
        case 'color':
            item = [].concat(ARR_COLOR);
            break;
        case 'bigOe':
            item = [].concat(ARR_BOE);
            break;
        case 'smallOe':
            item = [].concat(ARR_SOE);
            break;
        case 'k3Straight':
            item = [].concat(ARR_K3_STRAIGHT);
            break;
        case 'k3DifferentTwo':
            item = OBJ_K3_Different_Two;
            break;
        case 'k3SingleSame':
            item = [].concat(ARR_K3_Single_Same);
            break;
        case 'k3Boazi':
            item = OBJ_K3_Boazi;
            break;
        case 'k3AnyBoazi':
            item = [].concat(ARR_K3_Any_Boazi);
            break;
        case 'k3SingleSameTwo':
            item = OBJ_K3_Single_SameTwo;
            break;
        case '11X5TwoSideTotalSumGroup':
            item = [].concat(ARR_Total_Sum_Group);
            break;
        case '11X5Ball':
            item = [].concat(ARR_11X5_ball);
        break;
        default:
            break;
    }
    if (type === 'pk10Straight' ||
        type === 'twoSum' ||
        type === 'threeSum' ||
        type === 'k3Straight' ||
        type === 'k3SingleSame') {
        item.forEach((data) => {
            obj[`${playId}_${data}`] = data;
        });
    } else if(type === 'bigOe' || type === 'smallOe') {
        item.forEach((data, betContent) => {
            obj[`${playId}_${betContent+2}`] = data;
        });
    } else if(type == 'k3DifferentTwo' || type == 'k3Boazi' || type == 'k3SingleSameTwo'){
        Object.keys(item).forEach((data) => {
            obj[`${playId}_${data}`] = item[data];
        });
    }
    else {
        item.forEach((data, betContent) => {
            obj[`${playId}_${betContent}`] = data;
        });
    }
    return obj;
};

// ======================= SSC =======================
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
// ======================= SSC =======================

// ====================== PK10 =======================
// 兩面-冠亞和
const PK10TwoSideFirst2SumBSOE = createObj(1858, 'bsoe');
// 兩面-冠軍
const PK10TwoSideFirstPlaceBSOE = createObj(1860, 'bsoe');
const PK10TwoSideFirstPlaceDragonENT = createObj(1861, 'dragon');
// 兩面-亞軍
const PK10TwoSideSecondPlaceBSOE = createObj(1863, 'bsoe');
const PK10TwoSideSecondPlaceDragonENT = createObj(1864, 'dragon');
// 兩面-季军
const PK10TwoSideThirdPlaceBSOE = createObj(1866, 'bsoe');
const PK10TwoSideThirdPlaceDragonENT = createObj(1867, 'dragon');
// 兩面-第四名
const PK10TwoSideFourthPlaceBSOE = createObj(1869, 'bsoe');
const PK10TwoSideFourthPlaceDragonENT = createObj(1870, 'dragon');
// 兩面-第五名
const PK10TwoSideFifthPlaceBSOE = createObj(1872, 'bsoe');
const PK10TwoSideFifthPlaceDragonENT = createObj(1873, 'dragon');
// 兩面-第六名 ~ 第十名
const PK10TwoSideSixthPlaceBSOE = createObj(1875, 'bsoe');
const PK10TwoSideSeventhPlaceBSOE = createObj(1877, 'bsoe');
const PK10TwoSideEighthPlaceBSOE = createObj(1879, 'bsoe');
const PK10TwoSideNinthPlaceBSOE = createObj(1881, 'bsoe');
const PK10TwoSideTenthPlaceBSOE = createObj(1883, 'bsoe');
// 第1-10名
const PK10FixedPlaceFirst = createObj(1889, 'pk10Straight');
const PK10FixedPlaceSecond = createObj(1890, 'pk10Straight');
const PK10FixedPlaceThird = createObj(1891, 'pk10Straight');
const PK10FixedPlaceFourth = createObj(1892, 'pk10Straight');
const PK10FixedPlaceFifth = createObj(1893, 'pk10Straight');
const PK10FixedPlaceSixth = createObj(1894, 'pk10Straight');
const PK10FixedPlaceSeventh = createObj(1895, 'pk10Straight');
const PK10FixedPlaceEighth = createObj(1896, 'pk10Straight');
const PK10FixedPlaceNinth = createObj(1897, 'pk10Straight');
const PK10FixedPlaceTenth = createObj(1898, 'pk10Straight');
// 龍虎鬥
const PK10Dragon1VS10 = createObj(1900, 'dragon');
const PK10Dragon2VS9 = createObj(1901, 'dragon');
const PK10Dragon3VS8 = createObj(1902, 'dragon');
const PK10Dragon4VS7 = createObj(1903, 'dragon');
const PK10Dragon5VS6 = createObj(1904, 'dragon');
// 猜和值
const PK10First2Sum = createObj(1885, 'twoSum');
const PK10First3Sum = createObj(1886, 'threeSum');
const PK10FirstLastSum = createObj(1887, 'twoSum');
// ====================== PK10 =======================

// ======================= PCB =======================
//和值
const SpecialSum_PCB =  createObj(1907, 'spcialSum');
//大小單雙
const SpecialBSOE_PCB =  createObj(1909, 'bsoe');
//組合大小單雙
const Special_BOE_PCB =  createObj('1910_0', 'bigOe');
const Special_SOE_PCB =  createObj('1910_1', 'smallOe');
//極值
const Special_Extremum_BS_PCB =  createObj(1911, 'extremum');
//色波
const Color_PCB =  createObj(1913, 'color');
//豹子
const Boazi_PCB =  createObj(1914, 'special');
// ======================= PCB =======================

// ======================= K3 =======================
// 和值
const K3SpecialSum = createObj(1934, 'k3Straight');
// 大小單雙
const K3SpecialBSOE = createObj(1936, 'bsoe');
// 兩連
const K3DifferentTwo = createObj(1938, 'k3DifferentTwo');
// 獨膽
const K3SingleSame = createObj(1940, 'k3SingleSame');
//豹子
const K3Boazi =  createObj(1942, 'k3Boazi');
// 任意豹子
const K3AnyBoazi = createObj(1943, 'k3AnyBoazi');
// 對子
const K3SingleSameTwo = createObj(1945, 'k3SingleSameTwo');
// ======================= K3 =======================

// ======================= 11X5 =======================
//總和
const _11X5TwoSideTotalSumGroup = createObj(1948, '11X5TwoSideTotalSumGroup');
//第一球(大小单双)
const _11X5TwoSideFirstBSOE = createObj(1950, 'bsoe');
//第二球(大小单双)
const _11X5TwoSideSecondBSOE = createObj(1952, 'bsoe');
//第三球(大小单双)
const _11X5TwoSideThirdBSOE = createObj(1954, 'bsoe');
//第四球(大小单双)
const _11X5TwoSideFourthBSOE = createObj(1956, 'bsoe');
//第五球(大小单双)
const _11X5TwoSideFifthBSOE = createObj(1958, 'bsoe');
//第一球
const _11X5First = createObj(1961, '11X5Ball');
//第一球(大小单双)
const _11X5FirstBSOE = createObj(1963, 'bsoe');
//第二球
const _11X5Second = createObj(1966, '11X5Ball');
//第二球(大小单双)
const _11X5SecondBSOE = createObj(1968, 'bsoe');
//第三球
const _11X5Third = createObj(1971, '11X5Ball');
//第三球(大小单双)
const _11X5ThirdBSOE = createObj(1973, 'bsoe');
//第四球
const _11X5Fourth = createObj(1976, '11X5Ball');
//第四球(大小单双)
const _11X5FourthBSOE = createObj(1978, 'bsoe');
//第五球
const _11X5Fifth = createObj(1981, '11X5Ball');
//第五球(大小单双)
const _11X5FifthBOSE = createObj(1983, 'bsoe');
//龍虎鬥
const _11X5DragonTiger54 = createObj(2004, 'dragon');
const _11X5DragonTiger53 = createObj(2005, 'dragon');
const _11X5DragonTiger52 = createObj(2006, 'dragon');
const _11X5DragonTiger51 = createObj(2007, 'dragon');
const _11X5DragonTiger43 = createObj(2008, 'dragon');
const _11X5DragonTiger42 = createObj(2009, 'dragon');
const _11X5DragonTiger41 = createObj(2010, 'dragon');
const _11X5DragonTiger32 = createObj(2011, 'dragon');
const _11X5DragonTiger31 = createObj(2012, 'dragon');
const _11X5DragonTiger21 = createObj(2013, 'dragon');
// ======================= 11X5 =======================
const EntPlayMenu = {
    // ======================= SSC =======================
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
    // ====================== PK10 =======================
    ...PK10TwoSideFirstPlaceBSOE,
    ...PK10TwoSideFirstPlaceDragonENT,
    ...PK10TwoSideFirst2SumBSOE,
    ...PK10TwoSideSecondPlaceBSOE,
    ...PK10TwoSideSecondPlaceDragonENT,
    ...PK10TwoSideThirdPlaceBSOE,
    ...PK10TwoSideThirdPlaceDragonENT,
    ...PK10TwoSideFourthPlaceBSOE,
    ...PK10TwoSideFourthPlaceDragonENT,
    ...PK10TwoSideFifthPlaceBSOE,
    ...PK10TwoSideFifthPlaceDragonENT,
    ...PK10TwoSideSixthPlaceBSOE,
    ...PK10TwoSideSeventhPlaceBSOE,
    ...PK10TwoSideEighthPlaceBSOE,
    ...PK10TwoSideNinthPlaceBSOE,
    ...PK10TwoSideTenthPlaceBSOE,
    ...PK10First2Sum,
    ...PK10First3Sum,
    ...PK10FirstLastSum,
    ...PK10FixedPlaceFirst,
    ...PK10FixedPlaceSecond,
    ...PK10FixedPlaceThird,
    ...PK10FixedPlaceFourth,
    ...PK10FixedPlaceFifth,
    ...PK10FixedPlaceSixth,
    ...PK10FixedPlaceSeventh,
    ...PK10FixedPlaceEighth,
    ...PK10FixedPlaceNinth,
    ...PK10FixedPlaceTenth,
    ...PK10FixedPlaceFifth,
    ...PK10Dragon1VS10,
    ...PK10Dragon2VS9,
    ...PK10Dragon3VS8,
    ...PK10Dragon4VS7,
    ...PK10Dragon5VS6,
    // ====================== PCB =======================
    ...SpecialSum_PCB,
    ...SpecialBSOE_PCB,
    ...Special_BOE_PCB,
    ...Special_SOE_PCB,
    ...Special_Extremum_BS_PCB ,
    ...Color_PCB ,
    ...Boazi_PCB ,
    // ====================== K3 =======================
    ...K3SpecialSum,
    ...K3SpecialBSOE,
    ...K3DifferentTwo,
    ...K3SingleSame,
    ...K3Boazi,
    ...K3AnyBoazi,
    ...K3SingleSameTwo,
    // ====================== 11X5 =======================
    ..._11X5TwoSideTotalSumGroup,
    ... _11X5TwoSideFirstBSOE,
    ... _11X5TwoSideSecondBSOE,
    ... _11X5TwoSideThirdBSOE,
    ... _11X5TwoSideFourthBSOE,
    ... _11X5TwoSideFifthBSOE,
    ... _11X5First,
    ... _11X5FirstBSOE,
    ... _11X5Second,
    ... _11X5SecondBSOE,
    ... _11X5Third,
    ... _11X5ThirdBSOE,
    ... _11X5Fourth,
    ... _11X5FourthBSOE,
    ... _11X5Fifth,
    ... _11X5FifthBOSE,
    ... _11X5DragonTiger54,
    ... _11X5DragonTiger53,
    ... _11X5DragonTiger52,
    ... _11X5DragonTiger51,
    ... _11X5DragonTiger43,
    ... _11X5DragonTiger42,
    ... _11X5DragonTiger41,
    ... _11X5DragonTiger32,
    ... _11X5DragonTiger31,
    ... _11X5DragonTiger21,
};

export default EntPlayMenu;
// ==================== 娛樂城PlayMenu ====================
