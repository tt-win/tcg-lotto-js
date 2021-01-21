import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { ballShowPosition } from './ball_configuration_config';

const basePK10Props = {
  ballRange: [1, 10],
  ballDigit: 2,
  ballShowPosition: ballShowPosition.ALL,
};

export const dragonTigerProps = {
  fixedBalls: ['1', '0'],
  ballI18n: {
    1: 'ball.dragonTiger.dragon',
    0: 'ball.dragonTiger.tiger',
  },
  boardClassNames: 'dragon-tiger-pk10',
  betDigits: [betDigits.DRAGON_TIGER],
  multi: false, // 可否複選
  canShowHotGap: false, // 冷熱遺漏
  hasToolbar: false, // right toolbar
  canShowBallAtSub: true, // 龍虎 字位置
  formula: 'oneNum',
};

export default {
  //  First1_PK10
  1457: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [betDigits.PK10_FIRST],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_ONE,
  }),
  //  First2_PK10
  1458: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [betDigits.PK10_FIRST, betDigits.PK10_SECOND],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  First3_PK10
  1459: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [betDigits.PK10_FIRST, betDigits.PK10_SECOND, betDigits.PK10_THIRD],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  First4_PK10
  1460: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [betDigits.PK10_FIRST, betDigits.PK10_SECOND, betDigits.PK10_THIRD, betDigits.PK10_FOURTH],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_FOUR,
  }),
  //  First5_PK10
  1461: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [
      betDigits.PK10_FIRST,
      betDigits.PK10_SECOND,
      betDigits.PK10_THIRD,
      betDigits.PK10_FOURTH,
      betDigits.PK10_FIFTH,
    ],
    formula: 'notDuplicateStraight',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  //  First5Fixed_PK10
  1462: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [
      betDigits.PK10_FIRST,
      betDigits.PK10_SECOND,
      betDigits.PK10_THIRD,
      betDigits.PK10_FOURTH,
      betDigits.PK10_FIFTH,
    ],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.FIRST_FIVE,
  }),
  //  Last5Fixed_PK10
  1463: BallBoardConfigRecord({
    ...basePK10Props,
    betDigits: [
      betDigits.PK10_SIXTH,
      betDigits.PK10_SEVENTH,
      betDigits.PK10_EIGHTH,
      betDigits.PK10_NINTH,
      betDigits.PK10_TENTH,
    ],
    formula: 'oneBallOneNum',
    ballShowPosition: ballShowPosition.LAST_FIVE,
  }),
  //  First2Sum_PK10
  1464: BallBoardConfigRecord({
    ballRange: [3, 19],
    ballDigit: 1,
    betDigits: [betDigits.FIRST2_SUM],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    delimiter: ',',
    forceUseDelimiter: true,
    forceSmallUpper: 11, // 快捷投注大小區分
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  //  First3Sum_PK10
  1465: BallBoardConfigRecord({
    ballRange: [6, 27],
    ballDigit: 1,
    betDigits: [betDigits.FIRST3_SUM],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    delimiter: ',',
    forceUseDelimiter: true,
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  FirstLastSum_PK10
  1466: BallBoardConfigRecord({
    ballRange: [3, 19],
    ballDigit: 1,
    betDigits: [betDigits.FIRST_LAST_SUM],
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    delimiter: ',',
    forceUseDelimiter: true,
    forceSmallUpper: 11, // 快捷投注大小區分
    boardClassNames: 'sum',
    ballShowPosition: ballShowPosition.FIRST_ONE_TEN,
  }),
  // First5BSOE_PK10
  1467: BallBoardConfigRecord({
    ...baseBSOEProps,
    formula: 'oneBallOneNum',
    betDigits: [
      betDigits.PK10_FIRST,
      betDigits.PK10_SECOND,
      betDigits.PK10_THIRD,
      betDigits.PK10_FOURTH,
      betDigits.PK10_FIFTH,
    ],
    ballShowPosition: ballShowPosition.FIRST_FIVE,
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      0: 'P_BIG',
      1: 'P_SMALL',
      2: 'P_ODD',
      3: 'P_EVEN',
    },
  }),
  //  Last5BSOE_PK10
  1468: BallBoardConfigRecord({
    ...baseBSOEProps,
    formula: 'oneBallOneNum',
    betDigits: [
      betDigits.PK10_SIXTH,
      betDigits.PK10_SEVENTH,
      betDigits.PK10_EIGHTH,
      betDigits.PK10_NINTH,
      betDigits.PK10_TENTH,
    ],
    ballShowPosition: ballShowPosition.LAST_FIVE,
  }),
  //  First2SumBSOE_PK10
  1469: BallBoardConfigRecord({
    ...baseBSOEProps,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    betDigits: [betDigits.FIRST2_SUM],
    ballShowPosition: ballShowPosition.FIRST_TWO,
  }),
  // Dragon_Tiger_1_VS_10
  1470: BallBoardConfigRecord({
    ...dragonTigerProps,
    ballShowPosition: ballShowPosition.FIRST_ONE_TEN,
  }),
  //  Dragon_Tiger_2_VS_9
  1471: BallBoardConfigRecord({
    ...dragonTigerProps,
    ballShowPosition: ballShowPosition.FIRST_TWO_NINE,
  }),
  //  Dragon_Tiger_3_VS_8
  1472: BallBoardConfigRecord({
    ...dragonTigerProps,
    ballShowPosition: ballShowPosition.FIRST_THREE_EIGHT,
  }),
  //  Dragon_Tiger_4_VS_7
  1473: BallBoardConfigRecord({
    ...dragonTigerProps,
    ballShowPosition: ballShowPosition.FIRST_FOUR_SEVEN,
  }),
  //  Dragon_Tiger_5_VS_6
  1474: BallBoardConfigRecord({
    ...dragonTigerProps,
    ballShowPosition: ballShowPosition.FIRST_FIVE_SIX,
  }),
};
