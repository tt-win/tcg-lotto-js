import { BallBoardConfigRecord, fishPrawnCrabBallProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseTHAIProps = {
  ballRange: [0, 9],
  ballDigit: 1,
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

  // Hoo_Hey_How_Play_THAI 鱼虾蟹
  2299: BallBoardConfigRecord({
    ...fishPrawnCrabBallProps,
  }),
};
