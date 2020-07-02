import { BallBoardConfigRecord } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseTHAIProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

const fishPrawnCrabTHAIProps = {
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
  // 2_Straight_Add_THAI_Multi 下正二位数（复式）
  2480: BallBoardConfigRecord({
    ...baseTHAIProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_Combine_THAI_Multi 上反二位数（复式）
  2482: BallBoardConfigRecord({
    ...baseTHAIProps,
    betDigits: [betDigits.COM],
    formula: 'combine6',
  }),

  // Last_2_Straight_THAI_Multi 上正二位数（复式）
  2483: BallBoardConfigRecord({
    ...baseTHAIProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Straight_THAI_Multi 上正三位数（复式）
  2485: BallBoardConfigRecord({
    ...baseTHAIProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Combine_THAI_Multi 上反三位数（复式）
  2487: BallBoardConfigRecord({
    ...baseTHAIProps,
    betDigits: [betDigits.COM],
    formula: 'combineSix',
  }),

  // Hoo_Hey_How_THAI 鱼虾蟹
  2299: BallBoardConfigRecord({
    ...fishPrawnCrabTHAIProps,
  }),
};
