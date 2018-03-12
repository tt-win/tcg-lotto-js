/*
 * LHC play menu
 * @copyright TCG-gaming
 * 2017.08.18 added by G
 */

// 特碼
const special = {
  // Menu
  1615: '特码',
  1618: '特码',  // SpecialB_Straight_LHC 球號1-49
  1631: '特码',  // SpecialB_BSOE_LHC 特大小單雙
  1633: '特码',  // SpecialB_BS_OE_LHC 特(大小)(單雙)
  1639: '特码',  // SpecialB_Tail_BS_LHC 特尾大小
  1641: '特码',  // SpecialB_TOSum_BSOE_LHC 特合大小單雙
  1714: '特码',  // SpecialB_Animal_LHC 特天地前后家野肖
  
  // TP-335移除特碼A
  // Sub menu & ball bet common
  // 1617: '特码A',  // SpecialA_Straight_LHC 球號1-49
  // play type
  // 1630: '特码A',  // SpecialA_BSOE_LHC 特大小單雙
  // 1632: '特码A',  // SpecialA_BS_OE_LHC 特(大小)(單雙)
  // 1638: '特码A',  // SpecialA_Tail_BS_LHC 特尾大小
  // 1640: '特码A',  // SpecialA_TOSum_BSOE_LHC 特合大小單雙
  // 1713: '特码A',  // SpecialA_Animal_LHC 特天地前后家野肖
};

// 兩面
const bothSide = {
  // Menu
  1642: '两面',

  // play type
  1644: '两面',  // Two_Sides_Special_BSOE_LHC 特大小單雙
  1645: '两面',  // Two_Sides_Special_BS_LHC 特尾大小
  1646: '两面',  // Two_Sides_Special_TOSum_BSOE_LHC 特合大小單雙
  1647: '两面',  // Two_Sides_Special_Animal_LHC 特天地前后家野肖
  1648: '两面',  // Two_Sides_Total_Sum_BSOE_LHC 總大小單雙

};

// 色波
const color = {
  // menu
  1634: '色波',

  // play type
  1635: '色波',   // Color_Straight_LHC 藍綠紅波
  1636: '半波',   // Color_BSOE_LHC 藍綠紅波大小單雙
  1637: '半半波', // Color_BS_OE_LHC 藍綠紅波(大小)(單雙)
};

const specialZodiac = {
  // menu
  1691: '特肖',  // Special_Zodiac_Straight_LHC 鼠牛虎兔龍蛇馬羊猴雞狗豬

  // title
  1693: '生肖',
};

// 頭尾數
const headTail = {
  // menu
  1649: '头尾数',

  // play type
  1651: '头尾数',  // Head_Tail_Special_LHC 01234头 1234567890尾
};

// 合肖
const combineZodiac = {
  // menu
  1728: '合肖',

  // play type
  1730: '合肖', // Special_Combine_Chinese_Zodiac_LHC 鼠牛虎兔龍蛇馬羊猴雞狗豬
};

// 正碼
const normal = {
  1619: '正码',
  1621: '正码', // Normal_Straight_LHC 球號1-49
  1653: '正码', // Normal_Total_BSOE_LHC 總大小單雙
};

// 正碼特
const fixed = {
  // Menu
  1622: '正码特',

  // Sub menu
  1623: '正一特', // First_Fixed_LHC 球號1-49
  1624: '正二特', // Second_Fixed_LHC 球號1-49
  1625: '正三特', // Third_Fixed_LHC 球號1-49
  1626: '正四特', // Fourth_Fixed_LHC 球號1-49
  1627: '正五特', // Fifth_Fixed_LHC 球號1-49
  1628: '正六特', // Sixth_Fixed_LHC 球號1-49

  // play type
  1695: '正一特',  // Fixed_First_BSOE_LHC 大小單雙
  1696: '正一特',  // Fixed_First_TOSum_OE_LHC 合單雙
  1697: '正一特',  // Fixed_First_Color_LHC 紅藍綠波

  1698: '正二特',  // Fixed_Second_BSOE_LHC 大小單雙
  1699: '正二特',  // Fixed_Second_TOSum_OE_LHC 合單雙
  1700: '正二特',  // Fixed_Second_Color_LHC 紅藍綠波

  1701: '正三特',  // Fixed_Third_BSOE_LHC 大小單雙
  1702: '正三特',  // Fixed_Third_TOSum_OE_LHC 合單雙
  1703: '正三特',  // Fixed_Third_Color_LHC 紅藍綠波

  1704: '正四特',  // Fixed_Fourth_BSOE_LHC 大小單雙
  1705: '正四特',  // Fixed_Fourth_TOSum_OE_LHC 合單雙
  1706: '正四特',  // Fixed_Fourth_Color_LHC 紅藍綠波

  1707: '正五特',  // Fixed_Fifth_BSOE_LHC 大小單雙
  1708: '正五特',  // Fixed_Fifth_TOSum_OE_LHC 合單雙
  1709: '正五特',  // Fixed_Fifth_Color_LHC 紅藍綠波

  1710: '正六特',  // Fixed_Sixth_BSOE_LHC 大小單雙
  1711: '正六特',  // Fixed_Sixth_TOSum_OE_LHC 合單雙
  1712: '正六特',  // Fixed_Sixth_Color_LHC 紅藍綠波
};

// 正碼1-6
const normalFirstToSix = {
  // menu
  1657: '正码1-6',

  // sub menu
  1658: '正码一',
  1659: '正码二',
  1660: '正码三',
  1661: '正码四',
  1662: '正码五',
  1663: '正码六',

  // play type
  1664: '正码一', // Normal_First_BSOE_LHC 大小單雙
  1665: '正码一', // Normal_First_TOSum_BSOE_LHC 合大小單雙
  1666: '正码一', // Normal_First_Color_LHC 紅藍綠波
  1667: '正码一', // Normal_First_Tail_BS_LHC 尾大小

  1668: '正码二', // Normal_Second_BSOE_LHC 大小單雙
  1669: '正码二', // Normal_Second_TOSum_BSOE_LHC 合大小單雙
  1670: '正码二', // Normal_Second_Color_LHC 紅藍綠波
  1671: '正码二', // Normal_Second_Tail_BS_LHC 尾大小

  1672: '正码三', // Normal_Third_BSOE_LHC 大小單雙
  1673: '正码三', // Normal_Third_TOSum_BSOE_LHC 合大小單雙
  1674: '正码三', // Normal_Third_Color_LHC 紅藍綠波
  1675: '正码三', // Normal_Third_Tail_BS_LHC 尾大小

  1676: '正码四', // Normal_Fourth_BSOE_LHC 大小單雙
  1677: '正码四', // Normal_Fourth_TOSum_BSOE_LHC 合大小單雙
  1678: '正码四', // Normal_Fourth_Color_LHC 紅藍綠波
  1679: '正码四', // Normal_Fourth_Tail_BS_LHC 尾大小

  1680: '正码五', // Normal_Fifth_BSOE_LHC 大小單雙
  1681: '正码五', // Normal_Fifth_TOSum_BSOE_LHC 合大小單雙
  1682: '正码五', // Normal_Fifth_Color_LHC 紅藍綠波
  1683: '正码五', // Normal_Fifth_Tail_BS_LHC 尾大小

  1684: '正码六', // Normal_Sixth_BSOE_LHC 大小單雙
  1685: '正码六', // Normal_Sixth_TOSum_BSOE_LHC 合大小單雙
  1686: '正码六', // Normal_Sixth_Color_LHC 紅藍綠波
  1687: '正码六', // Normal_Sixth_Tail_BS_LHC 尾大小
};

// 平特一肖尾數
const normalSpecialOneZodiac = {
  // menu
  1654: '平特肖尾',

  // sub menu
  1731: '平特一肖',
  1655: '平特尾数',

  // play type
  1694: '平特一肖',  // Normal_Special_One_Zodiac_LHC 鼠牛虎兔龍蛇馬羊猴雞狗豬
  1656: '平特尾数',  // Normal_Special_Tail_No_LHC 0123456789尾
};

// 自選不中
const chooseNotInWinningNumbers = {
  // menu
  1688: '自选不中',

  // play type
  1690: '自选不中',  // Choose_Not_in_Winning_Numbers_LHC 球號1-49
};

export const lhcPlayId = {
  ...special, // 特碼
  ...bothSide, // 两面
  ...color, // 色波
  ...specialZodiac, // 特肖
  ...headTail, // 头尾数
  ...combineZodiac, // 合肖
  ...normal,  // 正碼
  ...fixed,   // 正碼特
  ...normalFirstToSix,  // 正碼1-6
  ...normalSpecialOneZodiac, // 平特一肖尾數
  ...chooseNotInWinningNumbers, // 自選不中
};

export const lhcBothSideRank = {
  title: '两面长龙',
  countNumero: '%@期',
  '1687_0': '正码六 - 尾大',
  '1687_1': '正码六 - 尾小',
  '1686_1': '正码六 - 紅波',
  '1686_2': '正码六 - 藍波',
  '1686_3': '正码六 - 綠波',
  '1685_0': '正码六 - 合大',
  '1685_1': '正码六 - 合小',
  '1685_2': '正码六 - 合单',
  '1685_3': '正码六 - 合双',
  '1684_0': '正码六 - 大码',
  '1684_1': '正码六 - 小码',
  '1684_2': '正码六 - 单码',
  '1684_3': '正码六 - 双码',

  '1683_0': '正码五 - 尾大',
  '1683_1': '正码五 - 尾小',
  '1682_1': '正码五 - 紅波',
  '1682_2': '正码五 - 藍波',
  '1682_3': '正码五 - 綠波',
  '1681_0': '正码五 - 合大',
  '1681_1': '正码五 - 合小',
  '1681_2': '正码五 - 合单',
  '1681_3': '正码五 - 合双',
  '1680_0': '正码五 - 大码',
  '1680_1': '正码五 - 小码',
  '1680_2': '正码五 - 单码',
  '1680_3': '正码五 - 双码',

  '1679_0': '正码四 - 尾大',
  '1679_1': '正码四 - 尾小',
  '1678_1': '正码四 - 紅波',
  '1678_2': '正码四 - 藍波',
  '1678_3': '正码四 - 綠波',
  '1677_0': '正码四 - 合大',
  '1677_1': '正码四 - 合小',
  '1677_2': '正码四 - 合单',
  '1677_3': '正码四 - 合双',
  '1676_0': '正码四 - 大码',
  '1676_1': '正码四 - 小码',
  '1676_2': '正码四 - 单码',
  '1676_3': '正码四 - 双码',

  '1675_0': '正码三 - 尾大',
  '1675_1': '正码三 - 尾小',
  '1674_1': '正码三 - 紅波',
  '1674_2': '正码三 - 藍波',
  '1674_3': '正码三 - 綠波',
  '1673_0': '正码三 - 合大',
  '1673_1': '正码三 - 合小',
  '1673_2': '正码三 - 合单',
  '1673_3': '正码三 - 合双',
  '1672_0': '正码三 - 大码',
  '1672_1': '正码三 - 小码',
  '1672_2': '正码三 - 单码',
  '1672_3': '正码三 - 双码',

  '1671_0': '正码二 - 尾大',
  '1671_1': '正码二 - 尾小',
  '1670_1': '正码二 - 紅波',
  '1670_2': '正码二 - 藍波',
  '1670_3': '正码二 - 綠波',
  '1669_0': '正码二 - 合大',
  '1669_1': '正码二 - 合小',
  '1669_2': '正码二 - 合单',
  '1669_3': '正码二 - 合双',
  '1668_0': '正码二 - 大码',
  '1668_1': '正码二 - 小码',
  '1668_2': '正码二 - 单码',
  '1668_3': '正码二 - 双码',

  '1667_0': '正码一 - 尾大',
  '1667_1': '正码一 - 尾小',
  '1666_1': '正码一 - 紅波',
  '1666_2': '正码一 - 藍波',
  '1666_3': '正码一 - 綠波',
  '1665_0': '正码一 - 合大',
  '1665_1': '正码一 - 合小',
  '1665_2': '正码一 - 合单',
  '1665_3': '正码一 - 合双',
  '1664_0': '正码一 - 大码',
  '1664_1': '正码一 - 小码',
  '1664_2': '正码一 - 单码',
  '1664_3': '正码一 - 双码',

  '1648_0': '两面 - 总大',
  '1648_1': '两面 - 总小',
  '1648_2': '两面 - 总单',
  '1648_3': '两面 - 总双',

  '1647_1': '两面 - 特天肖',
  '1647_2': '两面 - 特地肖',
  '1647_3': '两面 - 特家肖',
  '1647_4': '两面 - 特野肖',
  '1647_5': '两面 - 特前肖',
  '1647_6': '两面 - 特后肖',

  '1646_0': '两面 - 特合大',
  '1646_1': '两面 - 特合小',
  '1646_2': '两面 - 特合单',
  '1646_3': '两面 - 特合双',

  '1645_0': '两面 - 特尾大',
  '1645_1': '两面 - 特尾小',

  '1644_0': '两面 - 特大',
  '1644_1': '两面 - 特小',
  '1644_2': '两面 - 特单',
  '1644_3': '两面 - 特双',
};

export const lhcPlayKey = {
  LHCOne: '01',
  LHCTwo: '02',
  LHCThree: '03',
  LHCFour: '04',
  LHCFive: '05',
  LHCSix: '06',
  LHCSeven: '07',
  LHCEight: '08',
  LHCNine: '09',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  21: '21',
  22: '22',
  23: '23',
  24: '24',
  25: '25',
  26: '26',
  27: '27',
  28: '28',
  29: '29',
  30: '30',
  31: '31',
  32: '32',
  33: '33',
  34: '34',
  35: '35',
  36: '36',
  37: '37',
  38: '38',
  39: '39',
  40: '40',
  41: '41',
  42: '42',
  43: '43',
  44: '44',
  45: '45',
  46: '46',
  47: '47',
  48: '48',
  49: '49',
  specialBig: '特大',
  specialSkyAnimal: '特天肖',
  specialSmall: '特小',
  specialGroundAnimal: '特地肖',
  specialTailBig: '特尾大',
  specialFirst6Animal: '特前肖',
  specialTailSmall: '特尾小',
  specialLast6Animal: '特后肖',
  specialOdd: '特单',
  specialHomeAnimal: '特家肖',
  specialEven: '特双',
  specialWildAnimal: '特野肖',
  specialTOSumBig: '特合大',
  specialSumBig: '特总大',
  specialTOSumSmall: '特合小',
  specialSumSmall: '特总小',
  specialTOSumOdd: '特合单',
  specialSumOdd: '特总单',
  specialTOSumEven: '特合双',
  specialSumEven: '特总双',
  specialSmallOdd: '特小单',
  specialSmallEven: '特小双',
  specialBigOdd: '特大单',
  specialBigEven: '特大双',
  colorStraightRed: '红波',
  colorStraightBlue: '蓝波',
  colorStraightGreen: '绿波',
  redOdd: '红单',
  blueOdd: '蓝单',
  greenOdd: '绿单',
  redEven: '红双',
  blueEven: '蓝双',
  greenEven: '绿双',
  redBig: '红大',
  blueBig: '蓝大',
  greenBig: '绿大',
  redSmall: '红小',
  blueSmall: '蓝小',
  greenSmall: '绿小',
  redBigOdd: '红大单',
  blueBigOdd: '蓝大单',
  greenBigOdd: '绿大单',
  redBigEven: '红大双',
  blueBigEven: '蓝大双',
  greenBigEven: '绿大双',
  redSmallOdd: '红小单',
  blueSmallOdd: '蓝小单',
  greenSmallOdd: '绿小单',
  redSmallEven: '红小双',
  blueSmallEven: '蓝小双',
  greenSmallEven: '绿小双',
  totalBig: '总大',
  totalSmall: '总小',
  totalOdd: '总单',
  totalEven: '总双',
  firstSumOdd: '正一合单',
  firstSumEven: '正一合双',
  secondSumOdd: '正二合单',
  secondSumEven: '正二合双',
  thirdSumOdd: '正三合单',
  thirdSumEven: '正三合双',
  fourthSumOdd: '正四合单',
  fourthSumEven: '正四合双',
  fifthSumOdd: '正五合单',
  fifthSumEven: '正五合双',
  sixthSumOdd: '正六合单',
  sixthSumEven: '正六合双',
  firstBig: '正一大',
  firstSmall: '正一小',
  firstOdd: '正一单',
  firstEven: '正一双',
  secondBig: '正二大',
  secondSmall: '正二小',
  secondOdd: '正二单',
  secondEven: '正二双',
  thirdBig: '正三大',
  thirdSmall: '正三小',
  thirdOdd: '正三单',
  thirdEven: '正三双',
  fourthBig: '正四大',
  fourthSmall: '正四小',
  fourthOdd: '正四单',
  fourthEven: '正四双',
  fifthBig: '正五大',
  fifthSmall: '正五小',
  fifthOdd: '正五单',
  fifthEven: '正五双',
  sixthBig: '正六大',
  sixthSmall: '正六小',
  sixthOdd: '正六单',
  sixthEven: '正六双',
  firstRed: '正一红',
  firstBlue: '正一蓝',
  firstGreen: '正一绿',
  secondRed: '正二红',
  secondBlue: '正二蓝',
  secondGreen: '正二绿',
  thirdRed: '正三红',
  thirdBlue: '正三蓝',
  thirdGreen: '正三绿',
  fourthRed: '正四红',
  fourthBlue: '正四蓝',
  fourthGreen: '正四绿',
  fifthRed: '正五红',
  fifthBlue: '正五蓝',
  fifthGreen: '正五绿',
  sixthRed: '正六红',
  sixthBlue: '正六蓝',
  sixthGreen: '正六绿',
  tailNine: '9尾',
  tailEight: '8尾',
  tailSeven: '7尾',
  tailSix: '6尾',
  tailFive: '5尾',
  tailFour: '4尾',
  tailThree: '3尾',
  tailTwo: '2尾',
  tailOne: '1尾',
  tailZero: '0尾',
  headFour: '4头',
  headThree: '3头',
  headTwo: '2头',
  headOne: '1头',
  headZero: '0头',
  specialRat: '鼠',
  specialOx: '牛',
  specialTiger: '虎',
  specialRabbit: '兔',
  specialDragon: '龙',
  specialSnake: '蛇',
  specialHorse: '马',
  specialGoat: '羊',
  specialMonkey: '猴',
  specialRooster: '鸡',
  specialDog: '狗',
  specialPig: '猪',
  normalBig: '大码',
  normalSmall: '小码',
  normalOdd: '单码',
  normalEven: '双码',
  normalTOSumBig: '合大',
  normalTOSumSmall: '合小',
  normalTOSumOdd: '合单',
  normalTOSumEven: '合双',
  normalTailBig: '尾大',
  normalTailSmall: '尾小',
  allThreeSame: '三同号通选',
  allThreeEven: '三连号通选',
  any_Boazi: '任意豹子',
};
