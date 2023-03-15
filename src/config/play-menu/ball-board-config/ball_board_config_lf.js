import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { ballShowPosition, ballConfigurationCategory } from './ball_configuration_config';

const baseLFProps = {
  ballRange: [0, 9],
  ballDigit: 1,
  ballShowPosition: ballShowPosition.ALL,
  ballConfigurationCategory: ballConfigurationCategory.EMPTY,
};

const sum3Props = {
  ballRange: [0, 27],
  ballDigit: 1,
  betDigits: [betDigits.SUM],
  formula: 'sumOfThree',
  canShowHotGap: false,
  canShowStakes: true,
};

const com3Props = {
  ...baseLFProps,
  betDigits: [betDigits.COM3],
  formula: 'combineThree',
  canShowHotGap: false,
};

const com6Props = {
  ...baseLFProps,
  betDigits: [betDigits.COM6],
  formula: 'combineSix',
  canShowHotGap: false,
};

const threeComSumProps = {
  ballRange: [1, 26],
  ballDigit: 1,
  betDigits: [betDigits.SUM],
  formula: 'sumOf3Com',
  canShowHotGap: false,
  canShowStakes: true,
};

const threeAnyCode1Props = {
  ...baseLFProps,
  betDigits: [betDigits.DAN],
  multi: false,
  canShowHotGap: false,
  hasToolbar: false,
  formula: 'oneNum',
};

const threeAnyCode2Props = {
  ...baseLFProps,
  betDigits: [betDigits.DAN1, betDigits.DAN2],
  multi: false,
  canShowHotGap: false,
  hasToolbar: false,
  formula: 'oneNum',
};

const twoComProps = {
  ...baseLFProps,
  betDigits: [betDigits.COM],
  formula: 'combine6',
  canShowHotGap: false,
  maxBallCount: 7,
  canHideToolBarAll: true,
};

export default {
  //  Last3Straight_LF
  1408: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3Sum_LF
  1409: BallBoardConfigRecord({
    ...sum3Props,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  Last3Com3_LF
  1410: BallBoardConfigRecord({
    ...com3Props,
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last3Com6_LF
  1411: BallBoardConfigRecord({
    ...com6Props,
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last3ComSum_LF
  1413: BallBoardConfigRecord({
    ...threeComSumProps,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.LAST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  // First2Straight_LF
  1416: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_TWO_THREE,
  }),
  //  First2Com_LF
  1417: BallBoardConfigRecord({
    ...twoComProps,
    ballShowPosition: ballShowPosition.LAST_TWO_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last2Straight_LF
  1418: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  Last2Com_LF
  1419: BallBoardConfigRecord({
    ...twoComProps,
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  Last3StraightAnyCode1_LF
  1414: BallBoardConfigRecord({
    ...threeAnyCode1Props,
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  Last3StraightAnyCode2_LF
  1415: BallBoardConfigRecord({
    ...threeAnyCode2Props,
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  // 1420 First2BSOE_LF
  1420: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS],
    ballShowPosition: ballShowPosition.LAST_TWO_THREE,
  }),
  //  Last2BSOE_LF
  1421: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  //  FixedPlace_LF
  1422: BallBoardConfigRecord({
    ...baseLFProps,
    canShowHotGap: true,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  P3Straight_LF
  1430: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  P3Sum_LF
  1431: BallBoardConfigRecord({
    ...sum3Props,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  P3Com3_LF
  1432: BallBoardConfigRecord({
    ...com3Props,
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  P3Com6_LF
  1433: BallBoardConfigRecord({
    ...com6Props,
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  P3ComSum_LF
  1435: BallBoardConfigRecord({
    ...threeComSumProps,
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
    ballConfigurationCategory: ballConfigurationCategory.BALL_SUM,
  }),
  //  P3StraightAnyCode1_LF
  1436: BallBoardConfigRecord({
    ...threeAnyCode1Props,
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  P3StraightAnyCode2_LF
  1437: BallBoardConfigRecord({
    ...threeAnyCode2Props,
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  P5First2Straight_LF
  1438: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //   P5First2Com_LF
  1439: BallBoardConfigRecord({
    ...twoComProps,
    ballShowPosition: ballShowPosition.FIRST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  P3Last2Straight_LF
  1440: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_TWO_THREE,
  }),
  //  P5Last2Straight_LF
  1442: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  // P3Last2Com_LF
  1441: BallBoardConfigRecord({
    ...twoComProps,
    ballShowPosition: ballShowPosition.FIRST_TWO_THREE,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  // Last2Com_LF
  1443: BallBoardConfigRecord({
    ...twoComProps,
    ballShowPosition: ballShowPosition.LAST_TWO,
    ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
  }),
  //  P5First2BSOE_LF
  1444: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  P3Last2BSOE_LF
  1445: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS],
    ballShowPosition: ballShowPosition.FIRST_TWO_THREE,
  }),
  //  Last2BSOE_LF
  1446: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    ballShowPosition: ballShowPosition.LAST_TWO,
  }),
  // FixedPlace_LF
  1447: BallBoardConfigRecord({
    ...baseLFProps,
    canShowHotGap: true,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  // Choose1_Fixed_Place_4D
  2246: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),
  // Any2_Straight_4D
  2249: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any2OfSSC',
  }),
  // Any3_Straight_4D
  2253: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any3OfSSC',
  }),
  // Any4_Straight_4D
  2257: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'any4OfSSC',
  }),
  // Choose2_Any_Code_4D
  2261: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.Two_Num_Any_Code_4D],
    formula: 'combine6',
    multi: true,
    canShowHotGap: false,
  }),
  // Choose3_Any_Code_4D
  2264: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.Three_Num_Any_Code_4D],
    formula: 'combineSix',
    multi: true,
    canShowHotGap: false,
  }),
  // All5Straight_LF 五星直选
  2879: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  // P5First4Straight_LF P5前四直选
  2883: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'straight',
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
  // P5Last4Straight_LF P5后四直选 
  2887:  BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
    ballShowPosition: ballShowPosition.LAST_FOUR,
  }),
};
