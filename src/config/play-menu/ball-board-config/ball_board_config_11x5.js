import { BallBoardConfigRecord } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { ballShowPosition, ballConfigurationCategory } from './ball_configuration_config';

const base11X5Props = {
  ballRange: [1, 11],
  ballDigit: 2,
  ballShowPosition: ballShowPosition.ALL,
  ballConfigurationCategory: ballConfigurationCategory.EMPTY,
};

const ballOECountsI18n = {
  ballI18n: {
    '05': 'ball.OECounts.05',
    14: 'ball.OECounts.14',
    23: 'ball.OECounts.23',
    32: 'ball.OECounts.32',
    41: 'ball.OECounts.41',
    50: 'ball.OECounts.50',
  },
};

// 膽拖 base ball config
const dantuoBallProps = {
  ...base11X5Props,
  rowMulti: false,
  canShowHotGap: false,
  betDigits: [betDigits.DAN, betDigits.TUO],
  ballShowPosition: ballShowPosition.ALL,
};

export default {
  // First3Straight_11X5
  918: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.FIRST, betDigits.SECOND, betDigits.THIRD],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  Any1_11X5
  908: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY1],
    formula: 'any1Of11X5',
  }),
  //  Any2_11X5
  909: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY2],
    formula: 'any2Of11X5',
  }),
  //  Any3_11X5
  910: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY3],
    formula: 'any3Of11X5',
  }),
  //  Any4_11X5
  911: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY4],
    formula: 'any4Of11X5',
  }),
  //  Any5_11X5
  912: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY5],
    formula: 'any5Of11X5',
  }),
  //  Any6_11X5
  913: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY6],
    formula: 'any6Of11X5',
  }),
  //  Any7_11X5
  914: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY7],
    formula: 'any7Of11X5',
  }),
  //  Any8_11X5
  915: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.ANY8],
    formula: 'any8Of11X5',
  }),
  // OECounts_11X5
  916: BallBoardConfigRecord({
    fixedBalls: ['05', '14', '23', '32', '41', '50'],
    boardClassNames: 'game-large',
    betDigits: [betDigits.EMPTY],
    formula: 'oneBallOneNum',
    hasToolbar: false,
    canShowHotGap: false,
    ...ballOECountsI18n,
    ballConfigurationCategory: ballConfigurationCategory.OE_COUNT,
  }),
  // 917 3rdDigit_11X5
  917: BallBoardConfigRecord({
    ballRange: [3, 9],
    ballDigit: 2,
    betDigits: [betDigits.MIDDLE],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
  }),
  // First3Com_11X5
  919: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.COM],
    canShowHotGap: true,
    formula: 'combineSix',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  First2Straight_11X5
  920: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.FIRST, betDigits.SECOND],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  // First2Com_11X5
  921: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.COM],
    canShowHotGap: true,
    formula: 'combine6',
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // First3AnyPlace_11X5
  922: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.DAN],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  FixedPlace_11X5
  923: BallBoardConfigRecord({
    ...base11X5Props,
    betDigits: [betDigits.FIRST, betDigits.SECOND, betDigits.THIRD, betDigits.FOURTH, betDigits.FIFTH],
    formula: 'oneBallOneNum',
  }),
  1959: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.FIRST_ONE,
  }),
  1964: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.TWO,
  }),
  1969: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.THREE,
  }),
  1974: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.FOUR,
  }),
  1979: BallBoardConfigRecord({
    ballShowPosition: ballShowPosition.LAST_ONE,
  }),

  // 膽拖
  // Any2_Dantuo_11X5
  2572: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any2DanTuo11X5',
  }),
  // Any3_Dantuo_11X5
  2573: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any3DanTuo11X5',
  }),
  // Any4_Dantuo_11X5
  2574: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any4DanTuo11X5',
  }),
  // Any5_Dantuo_11X5
  2575: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any5DanTuo11X5',
  }),
  // Any6_Dantuo_11X5
  2576: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any6DanTuo11X5',
  }),
  // Any7_Dantuo_11X5
  2577: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any7DanTuo11X5',
  }),
  // Any8_Dantuo_11X5
  2578: BallBoardConfigRecord({
    ...dantuoBallProps,
    formula: 'any8DanTuo11X5',
  }),
};
