import { BallBoardConfigRecord } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseVNCProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

const fishPrawnCrabVNCProps = {
  fixedBalls: ['0', '1', '2'], // 特殊: 固定球號, 球號無規律, ex: 定單雙
  ballI18n: {
    0: 'ball.fishPrawnCrab.fish',
    1: 'ball.fishPrawnCrab.prawn',
    2: 'ball.fishPrawnCrab.crab',
  },
  boardClassNames: 'fish-prawn-crab',
  ballClassName: {
    0: 'fish',
    1: 'prawn',
    2: 'crab',
  },
  betDigits: [betDigits.FISH_PRAWN_CRAB],
  multi: true, // 可否複選
  formula: 'oneBallOneNum', // 1球1注
};

export default {
  // Last_2_Straight_1st_VNC_Multi 上正二位数（复式）
  2279: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_Straight_2nd_VNC_Multi 下正二位数（复式）
  2281: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Combine_1st_VNC_Multi 上反三位数（复式）
  2283: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.COM],
    formula: 'combineSix',
  }),

  // Last_3_Straight_1st_VNC_Multi 上正三位数（复式）
  2284: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_4_Straight_1st_VNC_Multi 上正四位数（复式）
  2286: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Hoo_Hey_How_THAI 鱼虾蟹
  2302: BallBoardConfigRecord({
    ...fishPrawnCrabVNCProps,
  }),
};
