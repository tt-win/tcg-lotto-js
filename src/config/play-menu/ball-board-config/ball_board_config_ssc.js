import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { dragonTigerProps as dragonTigerPropsPK10 } from './ball_board_config_pk10';   // for SSC Dragon Tiger
import { ballShowPosition, ballConfigurationCategory } from './ball_configuration_config';

const baseSSCProps = {
  ballRange: [0, 9],
  ballDigit: 1,
  ballShowPosition: ballShowPosition.ALL,
  ballConfigurationCategory: ballConfigurationCategory.EMPTY,
};

const baccaratSSC = {
  fixedBalls: ['0', '1', '2', '3', '4'],
  ballI18n: {
    0: 'ball.baccarat.banker',
    1: 'ball.baccarat.player',
    2: 'ball.baccarat.tie',
    3: 'ball.baccarat.bankerPair',
    4: 'ball.baccarat.playerPair',
  },
  betDigits: [betDigits.BACCARAT],
  boardClassNames: 'baccarat',
  multi: true,
  formula: 'oneBallOneNum',   // 1球1注
  displayBallBonus: true,  // 顯示各球的最高獎金
  canShowHotGap: false,  // 冷熱遺漏
  hasToolbar: false,
  prizeTypeMapping: {      // 各球最高獎金的對應prize type
    0: 'P_BANKER',
    1: 'P_PLAYER',
    2: 'P_TIE',
    3: 'P_BANKER_PAIR',
    4: 'P_PLAYER_PAIR',
  },
  /*
  delimiter: ',',
  forceUseDelimiter: true,
  */
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
  delimiter: ',',
  forceUseDelimiter: true,
};

const baseSSCPropsENT = {
  // used to put some extra config
  ...baseSSCProps,
};

const ballOECountsI18n = {
  ballI18n: {
    0: 'ball.sumBSOE.0',
    1: 'ball.sumBSOE.1',
    2: 'ball.sumBSOE.2',
    3: 'ball.sumBSOE.3',
    '0_2': 'ball.sumBSOE.0_2',
    '0_3': 'ball.sumBSOE.0_3',
    '1_2': 'ball.sumBSOE.1_2',
    '1_3': 'ball.sumBSOE.1_3',
  },
};

export default {
  // All5Straight
  31: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // Last3Straight
  21: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  // All5All
  32: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    hasToolbar: true,
    formula: 'straight',
    multi: true,
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // All5Join
  33: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // AllCom120
  1601: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.COM],
    formula: 'combine120',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // AllCom60
  1602: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine60',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // AllCom30
  1603: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine30',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  AllCom20
  1604: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combine20',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  AllCom10
  1605: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT3, betDigits.REPEAT2],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  AllCom5
  1606: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: false,
    betDigits: [betDigits.REPEAT4, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // First4Straight
  48: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
  // First4Join
  49: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
  // F4Com24
  1607: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine24',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  F4Com12
  1608: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine12',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  F4Com6
  1609: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2],
    formula: 'combine6',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  F4Com4
  1610: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last4Straight
  29: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
  // Last4Join
  30: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
  // L4Com24
  1611: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine24',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // L4Com12
  1612: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2, betDigits.SINGLE],
    formula: 'combine12',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // L4Com6
  1613: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT2],
    formula: 'combine6',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // L4Com4
  1614: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.REPEAT3, betDigits.SINGLE],
    formula: 'combineChooseOneAndOneAndNotDuplicated',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // First3Straight
  40: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  // First3Join
  45: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  // First3StraightCom
  46: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  // First3Sum
  47: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    canShowStakes: true,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  // First3Com3
  42: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // First3Com6
  43: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Middle3Straight
  50: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Middle3Join
  55: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Middle3StraightCom
  56: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  // Middle3Sum
  57: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    canShowStakes: true,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  // Middle3Com3
  52: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Middle3Com6
  53: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last3Join
  26: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3StraightCom
  27: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.STRAIGHT_COM],
    formula: 'directChooseCombine',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3Sum
  28: BallBoardConfigRecord({
    ballRange: [0, 27],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfThree',
    canShowHotGap: false,
    canShowStakes: true,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  Last3Com3
  23: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM3],
    formula: 'combineThree',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last3Com6
  24: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM6],
    formula: 'combineSix',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  First2Straight
  34: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  First2Join
  38: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  First2Sum
  39: BallBoardConfigRecord({
    ballRange: [0, 18],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfTwo',
    canShowHotGap: false,
    canShowStakes: true,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  First2Com
  35: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last2Straight
  15: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  Last2Join
  19: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'continuousChoose',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  Last2Sum
  20: BallBoardConfigRecord({
    ballRange: [0, 18],
    ballDigit: 1,
    betDigits: [betDigits.SUM],
    formula: 'sumOfTwo',
    canShowHotGap: false,
    canShowStakes: true,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  Last2Com
  16: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last1Straight
  13: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_ONE,
  }),
  // FixedPlace
  14: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // 一星定位膽獨立開關
  // 一星定位胆（千百十个）
  2015: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
  // 一星定位胆（百十个）
  2016: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  // 一星定位胆（十个）
  2017: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  // 一星定位胆（个）
  2018: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_ONE,
  }),
  // First3StraightAnyCode1
  68: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  First3StraightAnyCode2
  69: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  Middle3StraightAnyCode1
  78: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Middle3StraightAnyCode2
  79: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Last3StraightAnyCode1
  74: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3StraightAnyCode2
  75: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  First2StraightAnyCode
  65: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    canShowHotGap: false,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  Last2StraightAnyCode
  71: BallBoardConfigRecord({
    ...baseSSCProps,
    multi: true,
    betDigits: [betDigits.DAN],
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  First3ComAnyCode1
  66: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateComboRest2',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  First3ComAnyCode2
  67: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateCombo',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  Middle3ComAnyCode1
  76: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateComboRest2',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Middle3ComAnyCode2
  77: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateCombo',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  //  Last3ComAnyCode1
  72: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateComboRest2',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3ComAnyCode2
  73: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateCombo',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  First2ComAnyCode
  64: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'noDuplicateCombo',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  Last2ComAnyCode
  70: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'noDuplicateCombo',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),

  // 20170607 不定位新玩法
  1748: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
  1749: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
  1750: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  1751: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  1752: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN1, betDigits.DAN2, betDigits.DAN3],
    multi: true,
    canShowHotGap: false,
    hasToolbar: true,
    formula: 'noDuplicateStraightWithBaozi',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),


  // First2BSOE
  62: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    multi: true,
    hasToolbar: true,
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  Last2BSOE
  63: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    multi: true,
    hasToolbar: true,
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  AnyShow1_SSC
  169: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  //  AnyShow2_SSC
  170: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  //  AnyShow3_SSC
  171: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  //  AnyShow4_SSC
  172: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPEC],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
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
    delimiter: ',',
    forceUseDelimiter: true,
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
    delimiter: ',',
    forceUseDelimiter: true,
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
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_10T_H_SSC
  1739: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_ONE_THREE,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_10T_10_SSC
  1740: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_ONE_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_10T_1_SSC
  1741: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_ONE_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_T_H_SSC
  1742: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_TWO_THREE,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_T_10_SSC
  1743: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_TWO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_T_1_SSC
  1744: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_TWO_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_H_10_SSC
  1745: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_THREE_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_H_1_SSC
  1746: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.FIRST_THREE_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  //  Dragon_Tiger_10_1_SSC
  1747: BallBoardConfigRecord({
    ...dragonTigerPropsSSC,
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.DRAGON_TIGER_TIE,
  }),
  // FixedPlace_ZY
  2014: BallBoardConfigRecord({
    ...baseSSCProps,
    canShowHotGap: true,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  // anyComChoose2
  2029: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // anyComChoose3
  2030: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    hasToolbar: true,
    canShowHotGap: false,
    formula: 'combineSix',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),

  // ENT 娛樂城
  1754: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.FIRST_ONE,
  }),
  1764: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.TWO,
  }),
  1774: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.THREE,
  }),
  1784: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.FOUR,
  }),
  1794: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.LAST_ONE,
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

  // Sum_BSOE_SSC 和值大小單雙
  2071: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2', '3'],
    boardClassNames: 'game-large sum-bsoe',
    betDigits: [betDigits.EMPTY],
    hasToolbar: true,
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
    canShowHotGap: false,
    multi: true,    // 可否複選
    formula: 'oneBallOneNum',   // 1球1注
    delimiter: ',',
    forceUseDelimiter: true,
    ...ballOECountsI18n,
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.SSC_BSOE,
  }),
  // Sum_BS_OE_SSC 和值組合大小單雙
  2072: BallBoardConfigRecord({
    fixedBalls: ['0_2', '0_3', '1_2', '1_3'],
    boardClassNames: 'game-large sum-bsoe',
    betDigits: [betDigits.EMPTY],
    hasToolbar: true,
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
    canShowHotGap: false,
    multi: true,    // 可否複選
    formula: 'oneBallOneNum',   // 1球1注
    delimiter: ',',
    forceUseDelimiter: true,
    ...ballOECountsI18n,
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    ballConfigurationCategory: ballConfigurationCategory.SSC_BSOE,
  }),

  // First2_Baodan_SSC 前二包膽
  2073: BallBoardConfigRecord({
    ...baseSSCProps,
    hasToolbar: false,
    canShowHotGap: false,
    multi: false,    // 可否複選
    formula: 'baodanTwoDigits',   // 兩位包膽
    betDigits: [betDigits.BAO_DAN],
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last2_Baodan_SSC 後二包膽
  2074: BallBoardConfigRecord({
    ...baseSSCProps,
    hasToolbar: false,
    canShowHotGap: false,
    multi: false,    // 可否複選
    formula: 'baodanTwoDigits',   // 兩位包膽
    betDigits: [betDigits.BAO_DAN],
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // First3C_Baodan_SSC 前三包膽
  2075: BallBoardConfigRecord({
    ...baseSSCProps,
    hasToolbar: false,
    canShowHotGap: false,
    multi: false,    // 可否複選
    formula: 'baodanThreeDigits',   // 三位包膽
    betDigits: [betDigits.BAO_DAN],
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Middle3_Baodan_SSC 中三包膽
  2076: BallBoardConfigRecord({
    ...baseSSCProps,
    hasToolbar: false,
    canShowHotGap: false,
    multi: false,    // 可否複選
    formula: 'baodanThreeDigits',   // 三位包膽
    betDigits: [betDigits.BAO_DAN],
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last3_Baodan_SSC 後三包膽
  2077: BallBoardConfigRecord({
    ...baseSSCProps,
    hasToolbar: false,
    canShowHotGap: false,
    multi: false,    // 可否複選
    formula: 'baodanThreeDigits',   // 三位包膽
    betDigits: [betDigits.BAO_DAN],
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),

  // First2_Span_SSC 前二跨度
  2078: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPAN],
    formula: 'spanTwoDigits', // 二位跨度
    canShowHotGap: true,
    delimiter: ',',
    forceUseDelimiter: true, // 強制使用delimiter
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SPAN,
  }),
  // Last2_Span_SSC 后二跨度
  2079: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPAN],
    formula: 'spanTwoDigits', // 二位跨度
    canShowHotGap: true,
    delimiter: ',',
    forceUseDelimiter: true, // 強制使用delimiter
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SPAN,
  }),
  // First3C_Span_SSC 前三跨度
  2080: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPAN],
    formula: 'spanThreeDigits', // 三位跨度
    canShowHotGap: true,
    delimiter: ',',
    forceUseDelimiter: true, // 強制使用delimiter
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SPAN,
  }),
  // Middle3_Span_SSC 中三跨度
  2081: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPAN],
    formula: 'spanThreeDigits', // 三位跨度
    canShowHotGap: true,
    delimiter: ',',
    forceUseDelimiter: true, // 強制使用delimiter
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SPAN,
  }),
  // Last3_Span_SSC 后三跨度
  2082: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.SPAN],
    formula: 'spanThreeDigits', // 三位跨度
    canShowHotGap: true,
    delimiter: ',',
    forceUseDelimiter: true, // 強制使用delimiter
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SPAN,
  }),

  // First4Choose1Any_SSC 前四一码不定位
  2083: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
    // First4Choose2Any_SSC 前四二码不定位
  2084: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    formula: 'combine6',
    canShowHotGap: false,
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
    // Last4Choose1Any_SSC 后四一码不定位
  2085: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
    // Last4Choose2Any_SSC 后四二码不定位
  2086: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
    // First3Choose2Any_SSC 前三二码不定位
  2087: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
    // Mid3Choose2Any_SSC 中三二码不定位
  2088: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
    // Last3Choose2Any_SSC 后三二码不定位
  2089: BallBoardConfigRecord({
    ...baseSSCProps,
    betDigits: [betDigits.DAN],
    multi: true,
    canShowHotGap: false,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  // First3_Special_SSC 前三特殊号(全)
  2113: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2', '3', '4'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
      3: 'ball.GroupENT.3',
      4: 'ball.GroupENT.4',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),
  // First3_Special_3_SSC 前三特殊号(三)
  2114: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),
  // Middle3_Special_SSC 中三特殊号(全)
  2115: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2', '3', '4'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
      3: 'ball.GroupENT.3',
      4: 'ball.GroupENT.4',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),
  // Middle3_Special_3_SSC 中三特殊号(三)
  2116: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),
  // Last3_Special_SSC 后三特殊号(全)
  2117: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2', '3', '4'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
      3: 'ball.GroupENT.3',
      4: 'ball.GroupENT.4',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),
  // Last3_Special_3_SSC 后三特殊号(三)
  2118: BallBoardConfigRecord({
    fixedBalls: ['0', '1', '2'],
    ballI18n: {
      0: 'ball.GroupENT.0',
      1: 'ball.GroupENT.1',
      2: 'ball.GroupENT.2',
    },
    betDigits: [betDigits.EMPTY],
    multi: true,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    hasToolbar: false,
    boardClassNames: 'game-large',
    forceUseDelimiter: true,
    delimiter: ',',
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.SPECIAL_NUMBER,
  }),

  2121: BallBoardConfigRecord({
    ...baccaratSSC,
  }),
};
