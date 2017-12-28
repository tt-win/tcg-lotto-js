import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseLFProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

const sum3Props = {
  ballRange: [0, 27],
  ballDigit: 1,
  betDigits: [betDigits.SUM],
  formula: 'sumOfThree',
  canShowHotGap: false,
  hasToolbar: false,
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
  hasToolbar: false,
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
  }),
  //  Last3Sum_LF
  1409: BallBoardConfigRecord({
    ...sum3Props,
  }),
  //  Last3Com3_LF
  1410: BallBoardConfigRecord({
    ...com3Props,
  }),
  // Last3Com6_LF
  1411: BallBoardConfigRecord({
    ...com6Props,
  }),
  // Last3ComSum_LF
  1413: BallBoardConfigRecord({
    ...threeComSumProps,
  }),
  // First2Straight_LF
  1416: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS],
    formula: 'straight',
  }),
  //  First2Com_LF
  1417: BallBoardConfigRecord({
    ...twoComProps,
  }),
  //  Last2Straight_LF
  1418: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    formula: 'straight',
  }),
  //  Last2Com_LF
  1419: BallBoardConfigRecord({
    ...twoComProps,
  }),
  //  Last3StraightAnyCode1_LF
  1414: BallBoardConfigRecord({
    ...threeAnyCode1Props,
  }),
  //  Last3StraightAnyCode2_LF
  1415: BallBoardConfigRecord({
    ...threeAnyCode2Props,
  }),
  // 1420 First2BSOE_LF
  1420: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS],
  }),
  //  Last2BSOE_LF
  1421: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.FC3D_TENS, betDigits.FC3D_ONES],
  }),
  //  FixedPlace_LF
  1422: BallBoardConfigRecord({
    ...baseLFProps,
    canShowHotGap: true,
    betDigits: [betDigits.FC3D_HUNDREDS, betDigits.FC3D_TENS, betDigits.FC3D_ONES],
    formula: 'oneBallOneNum',
  }),
  //  P3Straight_LF
  1430: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
  }),
  //  P3Sum_LF
  1431: BallBoardConfigRecord({
    ...sum3Props,
  }),
  //  P3Com3_LF
  1432: BallBoardConfigRecord({
    ...com3Props,
  }),
  //  P3Com6_LF
  1433: BallBoardConfigRecord({
    ...com6Props,
  }),
  //  P3ComSum_LF
  1435: BallBoardConfigRecord({
    ...threeComSumProps,
  }),
  //  P3StraightAnyCode1_LF
  1436: BallBoardConfigRecord({
    ...threeAnyCode1Props,
  }),
  //  P3StraightAnyCode2_LF
  1437: BallBoardConfigRecord({
    ...threeAnyCode2Props,
  }),
  //  P5First2Straight_LF
  1438: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
    formula: 'straight',
  }),
  //   P5First2Com_LF
  1439: BallBoardConfigRecord({
    ...twoComProps,
  }),
  //  P3Last2Straight_LF
  1440: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'straight',
  }),
  //  P5Last2Straight_LF
  1442: BallBoardConfigRecord({
    ...baseLFProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),
  // P3Last2Com_LF
  1441: BallBoardConfigRecord({
    ...twoComProps,
  }),
  // Last2Com_LF
  1443: BallBoardConfigRecord({
    ...twoComProps,
  }),
  //  P5First2BSOE_LF
  1444: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS],
  }),
  //  P3Last2BSOE_LF
  1445: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS],
  }),
  //  Last2BSOE_LF
  1446: BallBoardConfigRecord({
    ...baseBSOEProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
  }),
  // FixedPlace_LF
  1447: BallBoardConfigRecord({
    ...baseLFProps,
    canShowHotGap: true,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneBallOneNum',
  }),

};
