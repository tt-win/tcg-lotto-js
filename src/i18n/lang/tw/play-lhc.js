/*
 * LHC play menu
 * @copyright TCG-gaming
 * 2017.08.18 added by G
 */

// 特碼
const special = {
  // Menu
  1615: '特碼',
  1618: '特碼', // SpecialB_Straight_LHC 球號1-49
  1633: '特碼', // SpecialB_BS_OE_LHC 特(大小)(單雙)
  // TP-335移除特碼A
  // Sub menu & ball bet common
  // 1617: '特碼A',  // SpecialA_Straight_LHC 球號1-49
  // play type
  // 1630: '特碼A',  // SpecialA_BSOE_LHC 特大小單雙
  // 1632: '特碼A',  // SpecialA_BS_OE_LHC 特(大小)(單雙)
  // 1638: '特碼A',  // SpecialA_Tail_BS_LHC 特尾大小
  // 1640: '特碼A',  // SpecialA_TOSum_BSOE_LHC 特合大小單雙
  // 1713: '特碼A',  // SpecialA_Animal_LHC 特天地前後家野肖
};

// 兩面
const bothSide = {
  // Menu
  1642: '兩面',

  // play type
  1631: '兩面', // Special_BSOE_LHC 特大小單雙
  1639: '特尾大小', // Special_Tail_BS_LHC 特尾大小
  1641: '特合大小單雙', // Two_Sides_Special_TOSum_BSOE_LHC 特合大小單雙
  1714: '特天地前後家野肖', // Special_Animal_LHC 特天地前後家野肖
  1648: '總和大小單雙', // Two_Sides_Total_Sum_BSOE_LHC 總大小單雙
};

// 色波
const color = {
  // menu
  1634: '色波',

  // play type
  1635: '色波', // Color_Straight_LHC 藍綠紅波
  1636: '半波', // Color_BSOE_LHC 藍綠紅波大小單雙
  1637: '半半波', // Color_BS_OE_LHC 藍綠紅波(大小)(單雙)
};

const specialZodiac = {
  // menu
  1691: '特肖', // Special_Zodiac_Straight_LHC 鼠牛虎兔龍蛇馬羊猴雞狗豬

  // title
  1693: '特肖',
};

// 頭尾數
const headTail = {
  // menu
  1649: '頭尾數',

  // play type
  1651: '頭尾數', // Head_Tail_Special_LHC 01234頭 1234567890尾
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
  1619: '正碼',
  1621: '正碼', // Normal_Straight_LHC 球號1-49
};

// 正碼特
const fixed = {
  // Menu
  1622: '正碼特',

  // Sub menu
  1623: '正一特', // First_Fixed_LHC 球號1-49
  1624: '正二特', // Second_Fixed_LHC 球號1-49
  1625: '正三特', // Third_Fixed_LHC 球號1-49
  1626: '正四特', // Fourth_Fixed_LHC 球號1-49
  1627: '正五特', // Fifth_Fixed_LHC 球號1-49
  1628: '正六特', // Sixth_Fixed_LHC 球號1-49

  1696: '正一特', // Fixed_First_TOSum_OE_LHC 合單雙
  1699: '正二特', // Fixed_Second_TOSum_OE_LHC 合單雙
  1702: '正三特', // Fixed_Third_TOSum_OE_LHC 合單雙
  1705: '正四特', // Fixed_Fourth_TOSum_OE_LHC 合單雙
  1708: '正五特', // Fixed_Fifth_TOSum_OE_LHC 合單雙
  1711: '正六特', // Fixed_Sixth_TOSum_OE_LHC 合單雙

  1722: '正一特', // 二級選單
  1723: '正二特', // 二級選單
  1724: '正三特', // 二級選單
  1725: '正四特', // 二級選單
  1726: '正五特', // 二級選單
  1727: '正六特', // 二級選單
};

// 正碼1-6
const normalFirstToSix = {
  // menu
  1657: '正碼1-6',

  // sub menu
  1658: '正碼一',
  1659: '正碼二',
  1660: '正碼三',
  1661: '正碼四',
  1662: '正碼五',
  1663: '正碼六',

  // play type
  1695: '正碼一', // Fixed_First_BSOE_LHC 大小單雙
  1697: '正碼一', // Fixed_First_Color_LHC 紅藍綠波
  1667: '正碼一', // Normal_First_Tail_BS_LHC 尾大小

  1698: '正碼二', // Fixed_Second_BSOE_LHC 大小單雙
  1700: '正碼二', // Fixed_Second_Color_LHC 紅藍綠波
  1671: '正碼二', // Normal_Second_Tail_BS_LHC 尾大小

  1701: '正碼三', // Fixed_Third_BSOE_LHC 大小單雙
  1703: '正碼三', // Fixed_Third_Color_LHC 紅藍綠波
  1675: '正碼三', // Normal_Third_Tail_BS_LHC 尾大小

  1704: '正碼四', // Fixed_Fourth_BSOE_LHC 大小單雙
  1706: '正碼四', // Fixed_Fourth_Color_LHC 紅藍綠波
  1679: '正碼四', // Normal_Fourth_Tail_BS_LHC 尾大小

  1707: '正碼五', // Fixed_Fifth_BSOE_LHC 大小單雙
  1709: '正碼五', // Fixed_Fifth_Color_LHC 紅藍綠波
  1683: '正碼五', // Normal_Fifth_Tail_BS_LHC 尾大小
  1710: '正碼六', // Fixed_Sixth_BSOE_LHC 大小單雙
  1712: '正碼六', // Fixed_Sixth_Color_LHC 紅藍綠波
  1687: '正碼六', // Normal_Sixth_Tail_BS_LHC 尾大小

  1665: '正碼一', // Normal_First_TOSum_BSOE_LHC 合大小單雙
  1669: '正碼二', // Normal_Second_TOSum_BSOE_LHC 合大小單雙
  1673: '正碼三', // Normal_Third_TOSum_BSOE_LHC 合大小單雙
  1677: '正碼四', // Normal_Fourth_TOSum_BSOE_LHC 合大小單雙
  1681: '正碼五', // Normal_Fifth_TOSum_BSOE_LHC 合大小單雙
  1685: '正碼六', // Normal_Sixth_TOSum_BSOE_LHC 合大小單雙
};

// 平特一肖尾數
const normalSpecialOneZodiac = {
  // menu
  1654: '平特肖尾',

  // sub menu
  1731: '平特一肖',
  1655: '平特尾數',

  // play type
  1694: '平特一肖', // Normal_Special_One_Zodiac_LHC 鼠牛虎兔龍蛇馬羊猴雞狗豬
  1656: '平特尾數', // Normal_Special_Tail_No_LHC 0123456789尾
};

// 自選不中
const chooseNotInWinningNumbers = {
  // menu
  1688: '自選不中',

  // sub menu
  1689: '自選不中',
  2147: '五不中',
  2149: '六不中',
  2151: '七不中',
  2153: '八不中',
  2155: '九不中',
  2157: '十不中',
  2159: '十一不中',
  2161: '十二不中',

  // play type
  1690: '自選不中', // Choose_Not_in_Winning_Numbers_LHC 球號1-49(特)
  2148: '五不中', // 5_Not_in_Winning_Numbers_LHC 球號1-49
  2150: '六不中', // 6_Not_in_Winning_Numbers_LHC 球號1-49
  2152: '七不中', // 7_Not_in_Winning_Numbers_LHC 球號1-49
  2154: '八不中', // 8_Not_in_Winning_Numbers_LHC 球號1-49
  2156: '九不中', // 9_Not_in_Winning_Numbers_LHC 球號1-49
  2158: '十不中', // 10_Not_in_Winning_Numbers_LHC 球號1-49
  2160: '十一不中', // 11_Not_in_Winning_Numbers_LHC 球號1-49
  2162: '十二不中', // 12_Not_in_Winning_Numbers_LHC 球號1-49
};

const joinZodiac = {
  2031: '連肖',

  2032: '二連肖',
  2033: '二連肖',
  2034: '三連肖',
  2035: '三連肖',
  2036: '四連肖',
  2037: '四連肖',
  2038: '五連肖',
  2039: '五連肖',
};

const JoinMain = {
  2040: '連碼',

  2041: '二全中',
  2042: '二全中',
  2043: '三全中',
  2044: '三全中',
  2045: '四全中',
  2046: '四全中',
  2047: '三中二',
  2048: '三中二',
  2049: '二中特',
  2050: '二中特',
  2051: '特串',2052: '特串',
};

export const lhcPlayId = {
  ...special, // 特碼
  ...bothSide, // 兩面
  ...color, // 色波
  ...specialZodiac, // 特肖
  ...headTail, // 頭尾數
  ...combineZodiac, // 合肖
  ...normal, // 正碼
  ...fixed, // 正碼特
  ...normalFirstToSix, // 正碼1-6
  ...normalSpecialOneZodiac, // 平特一肖尾數
  ...chooseNotInWinningNumbers, // 自選不中
  ...joinZodiac, // 連肖
  ...JoinMain, // 連碼
};

export const lhcBothSideRank = {
  title: '兩面長龍',
  countNumero: '%@期',
  '1687_0': '正碼六 - 尾大',
  '1687_1': '正碼六 - 尾小',
  '1712_1': '正碼六 - 紅波',
  '1712_2': '正碼六 - 藍波',
  '1712_3': '正碼六 - 綠波',
  '1685_0': '正碼六 - 合大',
  '1685_1': '正碼六 - 合小',
  '1685_2': '正碼六 - 合單',
  '1685_3': '正碼六 - 合雙',
  '1710_0': '正碼六 - 大碼',
  '1710_1': '正碼六 - 小碼',
  '1710_2': '正碼六 - 單碼',
  '1710_3': '正碼六 - 雙碼',

  '1683_0': '正碼五 - 尾大',
  '1683_1': '正碼五 - 尾小',
  '1709_1': '正碼五 - 紅波',
  '1709_2': '正碼五 - 藍波',
  '1709_3': '正碼五 - 綠波',
  '1681_0': '正碼五 - 合大',
  '1681_1': '正碼五 - 合小',
  '1681_2': '正碼五 - 合單',
  '1681_3': '正碼五 - 合雙',
  '1707_0': '正碼五 - 大碼',
  '1707_1': '正碼五 - 小碼',
  '1707_2': '正碼五 - 單碼',
  '1707_3': '正碼五 - 雙碼',

  '1679_0': '正碼四 - 尾大',
  '1679_1': '正碼四 - 尾小',
  '1706_1': '正碼四 - 紅波',
  '1706_2': '正碼四 - 藍波',
  '1706_3': '正碼四 - 綠波',
  '1677_0': '正碼四 - 合大',
  '1677_1': '正碼四 - 合小',
  '1677_2': '正碼四 - 合單',
  '1677_3': '正碼四 - 合雙',
  '1704_0': '正碼四 - 大碼',
  '1704_1': '正碼四 - 小碼',
  '1704_2': '正碼四 - 單碼',
  '1704_3': '正碼四 - 雙碼',

  '1675_0': '正碼三 - 尾大',
  '1675_1': '正碼三 - 尾小',
  '1703_1': '正碼三 - 紅波',
  '1703_2': '正碼三 - 藍波',
  '1703_3': '正碼三 - 綠波',
  '1673_0': '正碼三 - 合大',
  '1673_1': '正碼三 - 合小',
  '1673_2': '正碼三 - 合單',
  '1673_3': '正碼三 - 合雙',
  '1701_0': '正碼三 - 大碼',
  '1701_1': '正碼三 - 小碼',
  '1701_2': '正碼三 - 單碼',
  '1701_3': '正碼三 - 雙碼',

  '1671_0': '正碼二 - 尾大',
  '1671_1': '正碼二 - 尾小',
  '1700_1': '正碼二 - 紅波',
  '1700_2': '正碼二 - 藍波',
  '1700_3': '正碼二 - 綠波',
  '1669_0': '正碼二 - 合大',
  '1669_1': '正碼二 - 合小',
  '1669_2': '正碼二 - 合單',
  '1669_3': '正碼二 - 合雙',
  '1698_0': '正碼二 - 大碼',
  '1698_1': '正碼二 - 小碼',
  '1698_2': '正碼二 - 單碼',
  '1698_3': '正碼二 - 雙碼',

  '1667_0': '正碼一 - 尾大',
  '1667_1': '正碼一 - 尾小',
  '1697_1': '正碼一 - 紅波',
  '1697_2': '正碼一 - 藍波',
  '1697_3': '正碼一 - 綠波',
  '1665_0': '正碼一 - 合大',
  '1665_1': '正碼一 - 合小',
  '1665_2': '正碼一 - 合單',
  '1665_3': '正碼一 - 合雙',
  '1695_0': '正碼一 - 大碼',
  '1695_1': '正碼一 - 小碼',
  '1695_2': '正碼一 - 單碼',
  '1695_3': '正碼一 - 雙碼',

  '1648_0': '兩面 - 總大',
  '1648_1': '兩面 - 總小',
  '1648_2': '兩面 - 總單',
  '1648_3': '兩面 - 總雙',

  '1714_1': '兩面 - 特天肖',
  '1714_2': '兩面 - 特地肖',
  '1714_3': '兩面 - 特家肖',
  '1714_4': '兩面 - 特野肖',
  '1714_5': '兩面 - 特前肖',
  '1714_6': '兩面 - 特後肖',

  '1641_0': '兩面 - 特合大',
  '1641_1': '兩面 - 特合小',
  '1641_2': '兩面 - 特合單',
  '1641_3': '兩面 - 特合雙',

  '1639_0': '兩面 - 特尾大',
  '1639_1': '兩面 - 特尾小',

  '1631_0': '兩面 - 特大',
  '1631_1': '兩面 - 特小',
  '1631_2': '兩面 - 特單',
  '1631_3': '兩面 - 特雙',
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
  specialLast6Animal: '特後肖',
  specialOdd: '特單',
  specialHomeAnimal: '特家肖',
  specialEven: '特雙',
  specialWildAnimal: '特野肖',
  specialTOSumBig: '特合大',
  specialSumBig: '總和大',
  specialTOSumSmall: '特合小',
  specialSumSmall: '總和小',
  specialTOSumOdd: '特合單',
  specialSumOdd: '總和單',
  specialTOSumEven: '特合雙',
  specialSumEven: '總和雙',
  specialSmallOdd: '特小單',
  specialSmallEven: '特小雙',
  specialBigOdd: '特大單',
  specialBigEven: '特大雙',
  colorStraightRed: '紅波',
  colorStraightBlue: '藍波',
  colorStraightGreen: '綠波',
  redOdd: '紅單',
  blueOdd: '藍單',
  greenOdd: '綠單',
  redEven: '紅雙',
  blueEven: '藍雙',
  greenEven: '綠雙',
  redBig: '紅大',
  blueBig: '藍大',
  greenBig: '綠大',
  redSmall: '紅小',
  blueSmall: '藍小',
  greenSmall: '綠小',
  redBigOdd: '紅大單',
  blueBigOdd: '藍大單',
  greenBigOdd: '綠大單',
  redBigEven: '紅大雙',
  blueBigEven: '藍大雙',
  greenBigEven: '綠大雙',
  redSmallOdd: '紅小單',
  blueSmallOdd: '藍小單',
  greenSmallOdd: '綠小單',
  redSmallEven: '紅小雙',
  blueSmallEven: '藍小雙',
  greenSmallEven: '綠小雙',
  totalBig: '總和大',
  totalSmall: '總和小',
  totalOdd: '總和單',
  totalEven: '總和雙',
  firstSumOdd: '正一合單',
  firstSumEven: '正一合雙',
  secondSumOdd: '正二合單',
  secondSumEven: '正二合雙',
  thirdSumOdd: '正三合單',
  thirdSumEven: '正三合雙',
  fourthSumOdd: '正四合單',
  fourthSumEven: '正四合雙',
  fifthSumOdd: '正五合單',
  fifthSumEven: '正五合雙',
  sixthSumOdd: '正六合單',
  sixthSumEven: '正六合雙',
  firstBig: '正一大',
  firstSmall: '正一小',
  firstOdd: '正一單',
  firstEven: '正一雙',
  secondBig: '正二大',
  secondSmall: '正二小',
  secondOdd: '正二單',
  secondEven: '正二雙',
  thirdBig: '正三大',
  thirdSmall: '正三小',
  thirdOdd: '正三單',
  thirdEven: '正三雙',
  fourthBig: '正四大',
  fourthSmall: '正四小',
  fourthOdd: '正四單',
  fourthEven: '正四雙',
  fifthBig: '正五大',
  fifthSmall: '正五小',
  fifthOdd: '正五單',
  fifthEven: '正五雙',
  sixthBig: '正六大',
  sixthSmall: '正六小',
  sixthOdd: '正六單',
  sixthEven: '正六雙',
  firstRed: '正一紅',
  firstBlue: '正一藍',
  firstGreen: '正一綠',
  secondRed: '正二紅',
  secondBlue: '正二藍',
  secondGreen: '正二綠',
  thirdRed: '正三紅',
  thirdBlue: '正三藍',
  thirdGreen: '正三綠',
  fourthRed: '正四紅',
  fourthBlue: '正四藍',
  fourthGreen: '正四綠',
  fifthRed: '正五紅',
  fifthBlue: '正五藍',
  fifthGreen: '正五綠',
  sixthRed: '正六紅',
  sixthBlue: '正六藍',
  sixthGreen: '正六綠',
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
  headFour: '4頭',
  headThree: '3頭',
  headTwo: '2頭',
  headOne: '1頭',
  headZero: '0頭',
  specialRat: '鼠',
  specialOx: '牛',
  specialTiger: '虎',
  specialRabbit: '兔',
  specialDragon: '龍',
  specialSnake: '蛇',
  specialHorse: '馬',
  specialGoat: '羊',
  specialMonkey: '猴',
  specialRooster: '雞',
  specialDog: '狗',
  specialPig: '豬',
  normalBig: '大碼',
  normalSmall: '小碼',
  normalOdd: '單碼',
  normalEven: '雙碼',
  normalTOSumBig: '合大',
  normalTOSumSmall: '合小',
  normalTOSumOdd: '合單',
  normalTOSumEven: '合雙',
  normalTailBig: '尾大',
  normalTailSmall: '尾小',
  allThreeSame: '三同號通選',
  allThreeEven: '三連號通選',
  any_Boazi: '任意豹子',
};