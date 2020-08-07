import {
  BallBoardConfigRecord,
  fishPrawnCrabBallProps,
  fanTanFanBallProps,
  fanTanJiaoBallProps,
  fanTanNianBallProps,
  fanTanBSOEProps,
} from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseVNCProps = {
  ballRange: [0, 9],
  ballDigit: 1,
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

  // Any_Roll_Last_2_North_VNC_Multi 后二包胆（复式）
  2518: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }), 

  // Any_Roll_Last_3_North_VNC_Multi 后三包胆（复式）
  2522: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }), 

  // Any_Roll_Last_4_North_VNC_Multi 后四包胆（复式）
  2526: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_2_South_VNC_Multi 后二包胆（复式）
  2531: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }), 

  // Any_Roll_Last_3_South_VNC_Multi 后三包胆（复式）
  2535: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }), 

  // Any_Roll_Last_4_South_VNC_Multi 后四包胆（复式）
  2539: BallBoardConfigRecord({
    ...baseVNCProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Hoo_Hey_How_Play_VNC 鱼虾蟹
  2302: BallBoardConfigRecord({
    ...fishPrawnCrabBallProps,
  }),

  // fan tan thai group mapping
  2488: {
    menuMapping: {
      fan: 2490,
      jiao: 2492,
      nian: 2494,
      bsoe: 2496,
    },
  },

  // 番
  2490: BallBoardConfigRecord({
    ...fanTanFanBallProps,
  }),

  // 角
  2492: BallBoardConfigRecord({
    ...fanTanJiaoBallProps,
  }),

  // 念
  2494: BallBoardConfigRecord({
    ...fanTanNianBallProps,
  }),

  // fan tan BSOE
  2496: BallBoardConfigRecord({
    ...fanTanBSOEProps,
  }),
};
