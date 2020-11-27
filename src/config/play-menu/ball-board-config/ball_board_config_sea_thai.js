import {
  BallBoardConfigRecord,
  fishPrawnCrabBallProps,
  fanTanFanBallProps,
  fanTanJiaoBallProps,
  fanTanNianBallProps,
  fanTanBSOEProps,
  seaMultiBetProps,
} from './ball_board_config_record';
import { betDigits } from './bet_digits';

export default {
  // 2_Straight_Add_THAI_Multi 下正二位数（复式）
  2480: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_Combine_THAI_Multi 上反二位数（复式）
  2482: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
  }),

  // Last_2_Straight_THAI_Multi 上正二位数（复式）
  2483: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Straight_THAI_Multi 上正三位数（复式）
  2485: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Combine_THAI_Multi 上反三位数（复式）
  2487: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.COM],
    formula: 'combineSix',
  }),

  // Hoo_Hey_How_Play_THAI 鱼虾蟹
  2299: BallBoardConfigRecord({
    ...fishPrawnCrabBallProps,
  }),

  // fan tan thai group mapping
  2497: {
    menuMapping: {
      fan: 2499,
      jiao: 2501,
      nian: 2503,
      bsoe: 2505,
    },
  },

  // 番
  2499: BallBoardConfigRecord({
    ...fanTanFanBallProps,
  }),

  // 角
  2501: BallBoardConfigRecord({
    ...fanTanJiaoBallProps,
  }),

  // 念
  2503: BallBoardConfigRecord({
    ...fanTanNianBallProps,
  }),

  // fan tan BSOE
  2505: BallBoardConfigRecord({
    ...fanTanBSOEProps,
  }),
};
