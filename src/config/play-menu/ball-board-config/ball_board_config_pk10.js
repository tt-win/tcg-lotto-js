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
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      3: 'P_PK10_3_4_18_19',
      4: 'P_PK10_3_4_18_19',
      5: 'P_PK10_5_6_16_17',
      6: 'P_PK10_5_6_16_17',
      7: 'P_PK10_7_8_14_15',
      8: 'P_PK10_7_8_14_15',
      9: 'P_PK10_9_10_12_13',
      10: 'P_PK10_9_10_12_13',
      11: 'P_PK10_11',
      12: 'P_PK10_9_10_12_13',
      13: 'P_PK10_9_10_12_13',
      14: 'P_PK10_7_8_14_15',
      15: 'P_PK10_7_8_14_15',
      16: 'P_PK10_5_6_16_17',
      17: 'P_PK10_5_6_16_17',
      18: 'P_PK10_3_4_18_19',
      19: 'P_PK10_3_4_18_19',
    },
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
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      6: 'P_PK10_6_7_26_27',
      7: 'P_PK10_6_7_26_27',
      8: 'P_PK10_8_25',
      9: 'P_PK10_9_24',
      10: 'P_PK10_10_23',
      11: 'P_PK10_11_22',
      12: 'P_PK10_12_21',
      13: 'P_PK10_13_20',
      14: 'P_PK10_14_19',
      15: 'P_PK10_15_16_17_18',
      16: 'P_PK10_15_16_17_18',
      17: 'P_PK10_15_16_17_18',
      18: 'P_PK10_15_16_17_18',
      19: 'P_PK10_14_19',
      20: 'P_PK10_13_20',
      21: 'P_PK10_12_21',
      22: 'P_PK10_11_22',
      23: 'P_PK10_10_23',
      24: 'P_PK10_9_24',
      25: 'P_PK10_8_25',
      26: 'P_PK10_6_7_26_27',
      27: 'P_PK10_6_7_26_27',
    },
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
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      3: 'P_PK10_3_4_18_19',
      4: 'P_PK10_3_4_18_19',
      5: 'P_PK10_5_6_16_17',
      6: 'P_PK10_5_6_16_17',
      7: 'P_PK10_7_8_14_15',
      8: 'P_PK10_7_8_14_15',
      9: 'P_PK10_9_10_12_13',
      10: 'P_PK10_9_10_12_13',
      11: 'P_PK10_11',
      12: 'P_PK10_9_10_12_13',
      13: 'P_PK10_9_10_12_13',
      14: 'P_PK10_7_8_14_15',
      15: 'P_PK10_7_8_14_15',
      16: 'P_PK10_5_6_16_17',
      17: 'P_PK10_5_6_16_17',
      18: 'P_PK10_3_4_18_19',
      19: 'P_PK10_3_4_18_19',
    },
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
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
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
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      0: 'P_BIG',
      1: 'P_SMALL',
      2: 'P_ODD',
      3: 'P_EVEN',
    },
  }),
  //  First2SumBSOE_PK10
  1469: BallBoardConfigRecord({
    ...baseBSOEProps,
    canShowHotGap: false,
    formula: 'oneBallOneNum',
    betDigits: [betDigits.FIRST2_SUM],
    ballShowPosition: ballShowPosition.FIRST_TWO,
    displayBallBonus: true, // 顯示各球的最高獎金
    boardClassNames: 'game-mid-size-ball',
    prizeTypeMapping: {
      // 各球最高獎金的對應prize type
      0: 'P_BIG',
      1: 'P_SMALL',
      2: 'P_ODD',
      3: 'P_EVEN',
    },
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
