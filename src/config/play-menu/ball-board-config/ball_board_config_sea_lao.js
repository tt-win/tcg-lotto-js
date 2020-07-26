import {
  BallBoardConfigRecord,
  fishPrawnCrabBallProps,
  fanTanFanBallProps,
  fanTanJiaoBallProps,
  fanTanNianBallProps,
  fanTanBSOEProps,
} from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseLAOProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

export default {
  // Last_2_Straight_LAO_Multi 上正二位数（复式）
  2288: BallBoardConfigRecord({
    ...baseLAOProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // First_2_Straight_LAO_Multi 下正二位数（复式）
  2290: BallBoardConfigRecord({
    ...baseLAOProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Combine_LAO_Multi 上反三位数（复式）
  2292: BallBoardConfigRecord({
    ...baseLAOProps,
    betDigits: [betDigits.COM],
    formula: 'combineSix',
  }),

  // Last_3_Straight_LAO_Multi 上正三位数（复式）
  2293: BallBoardConfigRecord({
    ...baseLAOProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_4_Straight_LAO_Multi 上正四位数（复式）
  2295: BallBoardConfigRecord({
    ...baseLAOProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Hoo_Hey_How_Play_LAO 鱼虾蟹
  2305: BallBoardConfigRecord({
    ...fishPrawnCrabBallProps,
  }),

  // fan tan thai group mapping
  2506: {
    menuMapping: {
      fan: 2508,
      jiao: 2510,
      nian: 2512,
      bsoe: 2514,
    },
  },

  // 番
  2508: BallBoardConfigRecord({
    ...fanTanFanBallProps,
  }),

  // 角
  2510: BallBoardConfigRecord({
    ...fanTanJiaoBallProps,
  }),

  // 念
  2512: BallBoardConfigRecord({
    ...fanTanNianBallProps,
  }),

  // fan tan BSOE
  2514: BallBoardConfigRecord({
    ...fanTanBSOEProps,
  }),
};
