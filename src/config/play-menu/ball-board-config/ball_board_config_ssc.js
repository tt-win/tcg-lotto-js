import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { dragonTigerProps as dragonTigerPropsPK10 } from './ball_board_config_pk10';   // for SSC Dragon Tiger

const baseSSCProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

const dragonTigerPropsSSC = {
  ...dragonTigerPropsPK10,
  fixedBalls: ['1', '2', '0', '1_2', '1_3', '0_2', '0_3'],
  ballI18n: {
    '1_2': 'ball.dragonTigerTie.dragonOdd',
    '1_3': 'ball.dragonTigerTie.dragonEven',
    '0_2': 'ball.dragonTigerTie.tigerOdd',
    '0_3': 'ball.dragonTigerTie.tigerEven',
    1: 'ball.dragonTigerTie.dragon',
    2: 'ball.dragonTigerTie.tie',
    0: 'ball.dragonTigerTie.tiger',
  },
  betDigits: [betDigits.DRAGON_TIGER_TIE],
  boardClassNames: 'dragon-tiger-tie',
  multi: true,    // 可否複選
  formula: 'oneBallOneNum',   // 1球1注

  displayBallBonus: true,  // 顯示各球的最高獎金
  prizeTypeMapping: {      // 各球最高獎金的對應prize type
    '1_2': 'P_ODD_EVEN',
    '1_3': 'P_ODD_EVEN',
    '0_2': 'P_ODD_EVEN',
    '0_3': 'P_ODD_EVEN',
    1: 'P_GENERAL',
    2: 'P_GENERAL_TIE',
    0: 'P_GENERAL',
  },
};

const baseSSCPropsENT = {
  // used to put some extra config
  ...baseSSCProps,
};

export default {
  // All5Straight
  31: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),
  // Last3Straight
  21: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),
  // All5All
  32: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    hasToolbar: false,
    formula: 'oneNum',
    multi: false,
  }),
  // All5Join
  33: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
  }),
  // AllCom120
  1601: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.COM],
    formula: 'combine120',
  }),
  // AllCom60
  1602: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine60',
  }),
  // AllCom30
  1603: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine30',
  }),
  //  AllCom20
  1604: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combine20',
  }),
  //  AllCom10
  1605: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT3, betDigits.REPEAT2],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
  }),
  //  AllCom5
  1606: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT4, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
  }),
  // First4Straight
  48: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'straight',
  }),
  // First4Join
  49: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'continuousChoose',
  }),
  // F4Com24
  1607: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine24',
    canShowHotGap: false,
  }),
  //  F4Com12
  1608: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine12',
    canShowHotGap: false,
  }),
  //  F4Com6
  1609: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2],
    formula: 'combine6',
    canShowHotGap: false,
  }),
  //  F4Com4
  1610: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    canShowHotGap: false,
  }),
  //  Last4Straight
  29: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),
  // Last4Join
  30: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
  }),
  // L4Com24
  1611: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine24',
    canShowHotGap: false,
  }),
  // L4Com12
  1612: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine12',
    canShowHotGap: false,
  }),
  // L4Com6
  1613: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2],
    formula: 'combine6',
    canShowHotGap: false,
  }),
  // L4Com4
  1614: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    canShowHotGap: false,
  }),
  // First3Straight
  40: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
  }),
  // First3Join
  45: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'continuousChoose',
  }),
  // First3StraightCom
  46: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
  }),
  // First3Sum
  47: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    hasToolbar: false,
    canShowStakes: true,
  }),
  // First3Com3
  42: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
  }),
  // First3Com6
  43: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
  }),
  //  Middle3Straight
  50: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'straight',
  }),
  //  Middle3Join
  55: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'continuousChoose',
  }),
  //  Middle3StraightCom
  56: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
  }),
  // Middle3Sum
  57: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    hasToolbar: false,
    canShowStakes: true,
  }),
  // Middle3Com3
  52: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
  }),
  // Middle3Com6
  53: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
  }),
  //  Last3Join
  26: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
  }),
  //  Last3StraightCom
  27: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
  }),
  //  Last3Sum
  28: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    hasToolbar: false,
    canShowStakes: true,
  }),
  //  Last3Com3
  23: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
  }),
  //  Last3Com6
  24: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
  }),
  //  First2Straight
  34: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'straight',
  }),
  //  First2Join
  38: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'continuousChoose',
  }),
  //  First2Sum
  39: BallBoardConfigRecord({
    ballRange: [0, 18],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfTwo',
    canShowHotGap: false,
    hasToolbar: false,
    canShowStakes: true,
  }),
  //  First2Com
  35: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
    canShowHotGap: false,
    maxBallCount: 7,
    canHideToolBarAll: true,
  }),
  //  Last2Straight
  15: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),
  //  Last2Join
  19: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
  }),
  //  Last2Sum
  20: BallBoardConfigRecord({
    ballRange: [0, 18],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfTwo',
    canShowHotGap: false,
    hasToolbar: false,
    canShowStakes: true,
  }),
  //  Last2Com
  16: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
    canShowHotGap: false,
    maxBallCount: 7,
    canHideToolBarAll: true,
  }),
  // Last1Straight
  13: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  // FixedPlace
  14: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  // First3StraightAnyCode1
  68: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  First3StraightAnyCode2
  69: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  Middle3StraightAnyCode1
  78: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  Middle3StraightAnyCode2
  79: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  Last3StraightAnyCode1
  74: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  Last3StraightAnyCode2
  75: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  //  First2StraightAnyCode
  65: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  //  Last2StraightAnyCode
  71: BallBoardConfigRecord({
    ...baseSSCProps,
    multi: true,
    hasToolbar: true,
    betDigits: [betDigits.DAN],
    canShowHotGap: false,
    formula: 'straight',
  }),
  //  First3ComAnyCode1
  66: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'fiftyFiveNum',
  }),
  //  First3ComAnyCode2
  67: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'tenNum',
  }),
  //  Middle3ComAnyCode1
  76: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'fiftyFiveNum',
  }),
  //  Middle3ComAnyCode2
  77: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'tenNum',
  }),
  //  Last3ComAnyCode1
  72: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'fiftyFiveNum',
  }),
  //  Last3ComAnyCode2
  73: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'tenNum',
  }),
  //  First2ComAnyCode
  64: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'tenNum',
  }),
  //  Last2ComAnyCode
  70: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'tenNum',
  }),

  // 20170607 不定位新玩法
  1748: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  1749: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  1750: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  1751: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),
  1752: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2, betDigits.DAN3],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'straight',
  }),


  // First2BSOE
  62: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
  }),
  //  Last2BSOE
  63: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
  }),
  //  AnyShow1_SSC
  169: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  //  AnyShow2_SSC
  170: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  //  AnyShow3_SSC
  171: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  //  AnyShow4_SSC
  172: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  //  Any1
  58: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  //  Any2
  59: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any2OfSSC',
  }),
  //  Any3
  60: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any3OfSSC',
  }),
  //  Any4
  61: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any4OfSSC',
  }),
  //  Any2Com_SSC
  183: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
    canShowHotGap: false,
    maxBallCount: 7,
    canHideToolBarAll: true,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [4, 5],
    minChooseManualDigits: 2,
  }),
  // 182 Any2Sum_SSC
  182: BallBoardConfigRecord({
    ballRange: [1, 17],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOf2Com',
    canShowStakes: true,
    canShowHotGap: false,
    hasToolbar: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [4, 5],
    minChooseManualDigits: 2,
  }),
  // Any3Sum_SSC
  178: BallBoardConfigRecord({
    ballRange: [1, 26],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOf3Com',
    canShowStakes: true,
    canShowHotGap: false,
    hasToolbar: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [3, 4, 5],
    minChooseManualDigits: 3,
  }),
  // Any3Com3_SSC
  179: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [3, 4, 5],
    minChooseManualDigits: 3,
  }),
  //  Any3Com6_SSC
  180: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [3, 4, 5],
    minChooseManualDigits: 3,
  }),
  // Any4Com24_SSC
  174: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine24',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [2, 3, 4, 5],
    minChooseManualDigits: 4,
  }),
  //  Any4Com12_SSC
  175: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine12',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [2, 3, 4, 5],
    minChooseManualDigits: 4,
  }),
  //   Any4Com6_SSC
  176: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2],
    formula: 'combine6',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [2, 3, 4, 5],
    minChooseManualDigits: 4,
  }),
  //   Any4Com4_SSC
  177: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    canShowHotGap: false,
    canShowManualDigits: true,
    manualDigits: [1, 2, 3, 4, 5],
    manualDigitsI18n: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    defaultManualDigits: [2, 3, 4, 5],
    minChooseManualDigits: 4,
  }),

  //  Dragon_Tiger_10T_T_SSC
  1738: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_10T_H_SSC
  1739: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_10T_10_SSC
  1740: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_10T_1_SSC
  1741: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_T_H_SSC
  1742: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_T_10_SSC
  1743: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_T_1_SSC
  1744: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_H_10_SSC
  1745: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_H_1_SSC
  1746: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),
  //  Dragon_Tiger_10_1_SSC
  1747: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
  }),

  // ENT 娛樂城
  // First_Straight_ENT
  1756: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // First_BSOE_ENT
  1758: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // First_Total_Sum_ENT
  1759: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // First_First3_ENT
  1761: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // First_Middle3_ENT
  1762: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // First_Last3_ENT
  1763: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_Straight_ENT
  1766: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_BSOE_ENT
  1768: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_Total_Sum_ENT
  1769: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_First3_ENT
  1771: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_Middle3_ENT
  1772: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Second_Last3_ENT
  1773: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_Straight_ENT
  1776: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_BSOE_ENT
  1778: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_Total_Sum_ENT
  1779: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_First3_ENT
  1781: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_Middle3_ENT
  1782: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Third_Last3_ENT
  1783: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_Straight_ENT
  1786: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_BSOE_ENT
  1788: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_Total_Sum_ENT
  1789: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_First3_ENT
  1791: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_Middle3_ENT
  1792: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fourth_Last3_ENT
  1793: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_Straight_ENT
  1796: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_BSOE_ENT
  1798: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_Total_Sum_ENT
  1799: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_First3_ENT
  1801: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_Middle3_ENT
  1802: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Fifth_Last3_ENT
  1803: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_5_4_ENT
  1843: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_5_3_ENT
  1844: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_5_2_ENT
  1845: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_5_1_ENT
  1846: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_4_3_ENT
  1847: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_4_2_ENT
  1848: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_4_1_ENT
  1849: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_3_2_ENT
  1850: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_3_1_ENT
  1851: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Dragon_Tiger_Tie_2_1_ENT
  1852: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Five_Have_One_Straight_ENT
  1855: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_First_BSOE_ENT
  1830: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_Second_BSOE_ENT
  1832: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_Third_BSOE_ENT
  1834: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_Fourth_BSOE_ENT
  1836: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_Fifth_BSOE_ENT
  1838: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),

  // 整合
  // Combine_First_Straight_ENT
  1805: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_First_BSOE_ENT
  1806: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Second_Straight_ENT
  1808: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Second_BSOE_ENT
  1809: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Third_Straight_ENT
  1811: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Third_BSOE_ENT
  1812: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Fourth_Straight_ENT
  1814: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Fourth_BSOE_ENT
  1815: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Fifth_Straight_ENT
  1817: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Fifth_BSOE_ENT
  1818: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_First3_ENT
  1820: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Middle3_ENT
  1822: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Last3_ENT
  1824: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Total_Sum_ENT
  1826: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Combine_Dragon_Tiger_Tie_ENT
  1827: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),
  // Two_Side_Total_Sum_BSOE_ENT
  1840: BallBoardConfigRecord({
    ...baseSSCPropsENT,
  }),

};
