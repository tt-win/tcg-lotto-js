import { Record } from 'immutable';
import { betDigits } from './ball-board-config';

const ManualBetConfigRecord = Record({
  ballRange: [0, 9],
  // 單注多少顆球
  ballCount: 0,
  // 球位數 (01 or 1)
  ballDigit: 1,
  // 球號分隔符
  ballDelimiter: '_',
  // 任選總球數
  anyBallCount: 0,
  // 計算注數方式
  formula: 'manualCountBySlip',
  // 球號可否都相同
  canAllSame: true,
  // 可以部分重複
  canPartialDuplicate: true,
  // 位數選擇器
  canShowManualDigits: false,
  // 位數值 (成立訂單使用)
  manualDigits: [],
  // 選擇位數i18n
  manualDigitsI18n: [],
  // 預設選擇位數值
  defaultManualDigits: [],
  // 最少選擇位數
  minChooseManualDigits: 0,
  // 是否使用bit壓縮
  bitCompression: false,
  // bit壓縮的最小長度
  bitCompressionSize: null,
});

const baseSSCProps = {
  ballRange: [0, 9],
};

const base11X5Props = {
  ballRange: [1, 11],
  ballDigit: 2,
  canPartialDuplicate: false,
};

const basePK10Props = {
  ballRange: [1, 10],
  ballDigit: 2,
  canPartialDuplicate: false,
};

const manualDigitsProps = {
  ...baseSSCProps,
  canShowManualDigits: true,
  manualDigits: [1, 2, 3, 4, 5],
  manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
};

const manualDigitsProps4D = {
  ...baseSSCProps,
  canShowManualDigits: true,
  manualDigits: [1, 2, 3, 4],
  manualDigitsI18n: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
};

const baseSEAProps = {
  ballRange: [0, 9],
  ballCount: 2,
};


// 2星直選
const twoStraightSSCProps = ManualBetConfigRecord({
  ...baseSSCProps,
  ballCount: 2,
});

// 3星直選
const threeStraightSSCProps = ManualBetConfigRecord({
  ...baseSSCProps,
  ballCount: 3,
});

// 3星組選
const threeComSSCProps = ManualBetConfigRecord({
  ...baseSSCProps,
  ballCount: 3,
  canAllSame: false,
});

// 連選公式: manualCountByBalls
const ManualBetConfigSSC = {
  // All5Straight_Single
  80: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 5,
    bitCompression: true,
    bitCompressionSize: 50000,
  }),
  // All5All_Single
  81: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 5,
  }),
  // All5Join_Single
  82: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 5,
    formula: 'manualCountByBalls',
  }),
  // First4Straight_Single
  83: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // First4Join_Single
  84: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    formula: 'manualCountByBalls',
  }),
  // Last4Straight_Single
  85: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Last4Join_Single
  86: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    formula: 'manualCountByBalls',
  }),
  //  First3Straight_Single
  87: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  // First3Join_Single
  88: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    formula: 'manualCountByBalls',
  }),
  // First3Com
  44: threeComSSCProps,
  //  Middle3Straight_Single
  89: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Middle3Join_Single
  90: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    formula: 'manualCountByBalls',
  }),
  //  Middle3Com
  54: threeComSSCProps,
  //  Last3Straight_Single
  91: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Last3Join_Single
  92: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 3,
    formula: 'manualCountByBalls',
  }),
  //  Last3Com
  25: threeComSSCProps,
  //  First2Straight_Single
  93: twoStraightSSCProps,
  //  First2Join_Single
  94: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 2,
    formula: 'manualCountByBalls',
  }),
  //  Last2Straight_Single
  95: twoStraightSSCProps,
  //  Last2Join_Single
  96: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 2,
    formula: 'manualCountByBalls',
  }),
  //  Any2_Single
  97: ManualBetConfigRecord({
    ...manualDigitsProps,
    defaultManualDigits: [4, 5],
    minChooseManualDigits: 2,
    ballCount: 2,
    anyBallCount: 5,
  }),
  //  Any3_Single
  98: ManualBetConfigRecord({
    ...manualDigitsProps,
    defaultManualDigits: [3, 4, 5],
    minChooseManualDigits: 3,
    ballCount: 3,
    anyBallCount: 5,
  }),
  //  Any4_Single
  99: ManualBetConfigRecord({
    ...manualDigitsProps,
    defaultManualDigits: [2, 3, 4, 5],
    minChooseManualDigits: 4,
    ballCount: 4,
    anyBallCount: 5,
  }),
  // Any2Com_SSC_Single
  184: ManualBetConfigRecord({
    ...manualDigitsProps,
    defaultManualDigits: [4, 5],
    minChooseManualDigits: 2,
    ballCount: 2,
    ballDelimiter: '',
    canAllSame: false,
  }),
  // Any3Com_SSC
  181: ManualBetConfigRecord({
    ...manualDigitsProps,
    defaultManualDigits: [3, 4, 5],
    minChooseManualDigits: 3,
    ballCount: 3,
    canAllSame: false,
  }),
};

const ManualBetConfig11X5 = {
  // 100 Any2_11X5_Single
  100: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 2,
    ballDelimiter: '-',
  }),
  //  Any3_11X5_Single
  101: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 3,
    ballDelimiter: '-',
  }),
  //  Any4_11X5_Single
  102: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 4,
    ballDelimiter: '-',
  }),
  //  Any5_11X5_Single
  103: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 5,
    ballDelimiter: '-',
  }),
  //  Any6_11X5_Single
  104: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 6,
    ballDelimiter: '-',
  }),
  //  Any7_11X5_Single
  105: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 7,
    ballDelimiter: '-',
  }),
  //  Any8_11X5_Single
  106: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 8,
    ballDelimiter: '-',
  }),
  //  First3Straight_11X5_Single
  107: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 3,
    ballDelimiter: '_',
  }),
  //  First3Com_11X5_Single
  108: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 3,
    ballDelimiter: '-',
  }),
  //  First2Straight_11X5_Single
  109: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 2,
    ballDelimiter: '_',
  }),
  //  First2Com_11X5_Single
  110: ManualBetConfigRecord({
    ...base11X5Props,
    ballCount: 2,
    ballDelimiter: '-',
  }),
};

const ManualBetConfigLF = {
  //  Last3Straight_LF_Single
  111: threeStraightSSCProps,
  //  Last3Com_LF
  1412: threeComSSCProps,
  //  First2Straight_LF_Single
  112: twoStraightSSCProps,
  //  Last2Straight_LF_Single
  113: twoStraightSSCProps,
  //  P3Straight_LF_Single
  114: threeStraightSSCProps,
  //  P3Com_LF
  1434: threeComSSCProps,
  //  P5First2Straight_LF_Single
  115: twoStraightSSCProps,
  //  P3Last2Straight_LF_Single
  116: twoStraightSSCProps,
  //  P5Last2Straight_LF_Single
  166: twoStraightSSCProps,

  // Any2_Straight_Single_4D
  2250: ManualBetConfigRecord({
    ...manualDigitsProps4D,
    defaultManualDigits: [3, 4],
    minChooseManualDigits: 2,
    ballCount: 2,
    anyBallCount: 4,
  }),
  // Any2_Straight_Single_4D
  2254: ManualBetConfigRecord({
    ...manualDigitsProps4D,
    defaultManualDigits: [2, 3, 4],
    minChooseManualDigits: 3,
    ballCount: 3,
    anyBallCount: 4,
  }),
  // Any2_Straight_Single_4D
  2258: ManualBetConfigRecord({
    ...manualDigitsProps4D,
    defaultManualDigits: [1, 2, 3, 4],
    minChooseManualDigits: 4,
    ballCount: 4,
    anyBallCount: 4,
  }),
  // All5Straight_LF_Single
  2880: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 5,
    bitCompression: true,
    bitCompressionSize: 50000,
  }),
  // P5First4Straight_LF_Single
  2884: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // P5Last4Straight_LF_Single
  2888: ManualBetConfigRecord({
    ...baseSSCProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
};

const ManualBetConfigPK10 = {
  //  First2_PK10_Single
  1732: ManualBetConfigRecord({
    ...basePK10Props,
    ballCount: 2,
  }),
  //  First3_PK10_Single
  1733: ManualBetConfigRecord({
    ...basePK10Props,
    ballCount: 3,
  }),
  //  First4_PK10_Single
  1734: ManualBetConfigRecord({
    ...basePK10Props,
    ballCount: 4,
  }),
  //  First5_PK10_Single
  1735: ManualBetConfigRecord({
    ...basePK10Props,
    ballCount: 5,
  }),
};


const ManualBetConfigTHAI = {
  //  2_Straight_Add_THAI_Single
  2481: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  //  Last_2_Straight_THAI_Single
  2484: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  //  Last_3_Straight_THAI_Single
  2486: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
};

const ManualBetConfigVNC = {
  //  Last_4_Straight_1st_VNC_Single
  2287: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  //  Last_3_Straight_1st_VNC_Single
  2285: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Last_2_Straight_1st_VNC_Single
  2280: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  //  Last_2_Straight_2nd_VNC_Single
  2282: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  // Any_Roll_Last_2_North_VNC_Single
  2519: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  // Any_Roll_Last_2_South_VNC_Single
  2532: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  //  Any_Roll_Last_3_North_VNC_Single
  2523: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Any_Roll_Last_3_South_VNC_Single
  2536: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Any_Roll_Last_4_North_VNC_Single
  2527: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  //  Any_Roll_Last_4_South_VNC_Single
  2540: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 4_Not_Winning_Numbers_Single_North_VNC 北部 - 四不中(单式)
  2553: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 8_Not_Winning_Numbers_Single_North_VNC 北部 - 八不中(单式)
  2556: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 8,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 10_Not_Winning_Numbers_Single_North_VNC 北部 - 十不中(单式)
  2559: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 10,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 4_Not_Winning_Numbers_Single_South_VNC 南部 - 四不中(单式)
  2563: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 8_Not_Winning_Numbers_Single_South_VNC 南部 - 八不中(单式)
  2566: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 8,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // 10_Not_Winning_Numbers_Single_South_VNC 南部 - 十不中(单式)
  2569: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 10,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Last_2_1st_7th_North_VNC_Single 北部 - 二数头尾(单式)
  2586: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Last_2_7th_North_VNC_Single 北部 - 二数头(单式)
  2589: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Last_2_1st_8th_South_VNC_Single 中/南部 - 二数头尾(单式)
  2593: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Last_2_8th_South_VNC_Single 中/南部 - 二数头(单式)
  2596: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    ballDigit: 2,
    ballDelimiter: '-',
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Bunch_2_North_VNC_Single 北部 串2组（单式）
  2601: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  // Bunch_3_North_VNC_Single 北部 串3组（单式）
  2604: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Bunch_4_North_VNC_Single 北部 串4组（单式）
  2607: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Bunch_2_South_VNC_Single 中南部 串2组（单式）
  2611: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 2,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Bunch_3_South_VNC_Single 中南部 串3组（单式）
  2614: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  // Bunch_4_South_VNC_Single 中南部 串4组（单式）
  2617: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
};

const ManualBetConfigLAO = {
  //  Last_4_Straight_LAO_Single
  2296: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 4,
    bitCompression: true,
    bitCompressionSize: 5000,
  }),
  //  Last_3_Straight_LAO_Single
  2294: ManualBetConfigRecord({
    ...baseSEAProps,
    ballCount: 3,
    bitCompression: true,
    bitCompressionSize: 500,
  }),
  //  Last_2_Straight_LAO_Single
  2289: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
  //  First_2_Straight_LAO_Single
  2291: ManualBetConfigRecord({
    ...baseSEAProps,
  }),
};
const ManualBetConfig = {
  ...ManualBetConfigSSC,
  ...ManualBetConfig11X5,
  ...ManualBetConfigLF,
  ...ManualBetConfigPK10,
  ...ManualBetConfigTHAI,
  ...ManualBetConfigVNC,
  ...ManualBetConfigLAO,
};

export default ManualBetConfig;
