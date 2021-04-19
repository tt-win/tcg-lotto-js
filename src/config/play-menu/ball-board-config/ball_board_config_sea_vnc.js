import {
  BallBoardConfigRecord,
  fishPrawnCrabBallProps,
  fanTanFanBallProps,
  fanTanJiaoBallProps,
  fanTanNianBallProps,
  fanTanBSOEProps,
  seaMultiBetProps,
  vnPk10FirstTenthBSOEProps,
} from './ball_board_config_record';
import { betDigits } from './bet_digits';

export default {
  // Last_2_Straight_1st_VNC_Multi 上正二位数（复式）
  2279: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_Straight_2nd_VNC_Multi 下正二位数（复式）
  2281: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_3_Combine_1st_VNC_Multi 上反三位数（复式）
  2283: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.COM],
    formula: 'combineSix',
  }),

  // Last_3_Straight_1st_VNC_Multi 上正三位数（复式）
  2284: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_4_Straight_1st_VNC_Multi 上正四位数（复式）
  2286: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_2_North_VNC_Multi 后二包胆（复式）
  2518: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_3_North_VNC_Multi 后三包胆（复式）
  2522: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_4_North_VNC_Multi 后四包胆（复式）
  2526: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_2_South_VNC_Multi 后二包胆（复式）
  2531: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_3_South_VNC_Multi 后三包胆（复式）
  2535: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Any_Roll_Last_4_South_VNC_Multi 后四包胆（复式）
  2539: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_1st_7th_North_VNC_Multi 北部 二数头尾（复式)
  2587: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_7th_North_VNC_Multi 北部 二数头（复式)
  2590: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_1st_8th_South_VNC_Multi 中南部 二数头尾（复式)
  2594: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Last_2_8th_South_VNC_Multi 中南部 二数头（复式)
  2597: BallBoardConfigRecord({
    ...seaMultiBetProps,
    betDigits: [betDigits.TENS, betDigits.ONES],
    formula: 'straight',
  }),

  // Hoo_Hey_How_Play_VNC 鱼虾蟹
  2302: BallBoardConfigRecord({
    ...seaMultiBetProps,
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

  // VN PK10 First_To_Tenth_BSOE
  2626: BallBoardConfigRecord({
    ...vnPk10FirstTenthBSOEProps,
  }),
};
