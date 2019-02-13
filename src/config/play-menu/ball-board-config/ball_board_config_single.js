import { BallBoardConfigRecord } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { ballShowPosition } from './ball_show_position_config';

import ballBoardConfigSSC from './ball_board_config_ssc';
import ballBoardConfig11X5 from './ball_board_config_11x5';
import ballBoardConfigLF from './ball_board_config_lf';
import ballBoardConfigPK10 from './ball_board_config_pk10';

const groupSSCConfig = {
  //  All5Straight_Single
  80: ballBoardConfigSSC[31],
  //  All5All_Single
  81: ballBoardConfigSSC[32],
  //  All5Join_Single
  82: ballBoardConfigSSC[33],
  //  First4Straight_Single
  83: ballBoardConfigSSC[48],
  //  First4Join_Single
  84: ballBoardConfigSSC[49],
  // Last4Straight_Single
  85: ballBoardConfigSSC[29],
  // Last4Join_Single
  86: ballBoardConfigSSC[30],
  // First3Straight_Single
  87: ballBoardConfigSSC[40],
  // First3Join_Single
  88: ballBoardConfigSSC[45],
  // Middle3Straight_Single
  89: ballBoardConfigSSC[50],
  // Middle3Join_Single
  90: ballBoardConfigSSC[55],
  // Last3Straight_Single
  91: ballBoardConfigSSC[21],
  // Last3Join_Single
  92: ballBoardConfigSSC[26],
  // First2Straight_Single
  93: ballBoardConfigSSC[34],
  // First2Join_Single
  94: ballBoardConfigSSC[38],
  // Last2Straight_Single
  95: ballBoardConfigSSC[15],
  // Last2Join_Single
  96: ballBoardConfigSSC[19],
  // Any2_Single
  97: ballBoardConfigSSC[59],
  // Any3_Single
  98: ballBoardConfigSSC[60],
  // Any4_Single
  99: ballBoardConfigSSC[61],
  // Any2Com_SSC_Single
  184: ballBoardConfigSSC[183],

  // 混合組選
  // Last3Com
  25: BallBoardConfigRecord({
    ballRange: [0, 9],
    ballDigit: 1,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneNum',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  //  First3Com
  44: BallBoardConfigRecord({
    ballRange: [0, 9],
    ballDigit: 1,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'oneNum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
  //  Middle3Com
  54: BallBoardConfigRecord({
    ballRange: [0, 9],
    ballDigit: 1,
    betDigits: [betDigits.THOUSANDS, betDigits.HUNDREDS, betDigits.TENS],
    formula: 'oneNum',
    ballShowPosition: ballShowPosition.FIRST_TWO_TO_FOUR,
  }),
  // 181 Any3Com_SSC
  181: BallBoardConfigRecord({
    ...ballBoardConfigSSC[179].toJS(),
    betDigits: [betDigits.EMPTY, betDigits.EMPTY, betDigits.EMPTY],
    formula: 'oneNum',
  }),
};

const group11X5Config = {
  // Any2_11X5_Single
  100: ballBoardConfig11X5[909],
  // Any3_11X5_Single
  101: ballBoardConfig11X5[910],
  // Any4_11X5_Single
  102: ballBoardConfig11X5[911],
  // Any5_11X5_Single
  103: ballBoardConfig11X5[912],
  // Any6_11X5_Single
  104: ballBoardConfig11X5[913],
  // Any7_11X5_Single
  105: ballBoardConfig11X5[914],
  // Any8_11X5_Single
  106: ballBoardConfig11X5[915],
  // First3Straight_11X5_Single
  107: ballBoardConfig11X5[918],
  // First3Com_11X5_Single
  108: ballBoardConfig11X5[919],
  // 109 First2Straight_11X5_Single
  109: ballBoardConfig11X5[920],
  //  First2Com_11X5_Single
  110: ballBoardConfig11X5[921],
};

const groupLFConfig = {
  //  Last3Straight_LF_Single
  111: ballBoardConfigLF[1408],
  //  First2Straight_LF_Single
  112: ballBoardConfigLF[1416],
  //  Last2Straight_LF_Single
  113: ballBoardConfigLF[1418],
  //  P3Straight_LF_Single
  114: ballBoardConfigLF[1430],
  //  P5First2Straight_LF_Single
  115: ballBoardConfigLF[1438],
  // P3Last2Straight_LF_Single
  116: ballBoardConfigLF[1440],
  // P5Last2Straight_LF_Single
  166: ballBoardConfigLF[1442],

  // 混合組選
  // Last3Com_LF
  1412: BallBoardConfigRecord({
    ballRange: [0, 9],
    ballDigit: 1,
    betDigits: [betDigits.HUNDREDS, betDigits.TENS, betDigits.ONES],
    formula: 'oneNum',
    ballShowPosition: ballShowPosition.LAST_THREE,
  }),
  // P3Com_LF
  1434: BallBoardConfigRecord({
    ballRange: [0, 9],
    ballDigit: 1,
    betDigits: [betDigits.TEN_THOUSANDS, betDigits.THOUSANDS, betDigits.HUNDREDS],
    formula: 'oneNum',
    ballShowPosition: ballShowPosition.FIRST_THREE,
  }),
};

const groupPK10Config = {
  //  First2_PK10_Single
  1732: ballBoardConfigPK10[1458],
  //  First3_PK10_Single
  1733: ballBoardConfigPK10[1459],
  //  First4_PK10_Single
  1734: ballBoardConfigPK10[1460],
  //  First5_PK10_Single
  1735: ballBoardConfigPK10[1461],

};

export default {
  ...groupSSCConfig,
  ...group11X5Config,
  ...groupLFConfig,
  ...groupPK10Config,
};
