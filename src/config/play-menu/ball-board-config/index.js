import ballBoardConfigSSC from './ball_board_config_ssc';
import ballBoardConfig11X5 from './ball_board_config_11x5';
import ballBoardConfigLF from './ball_board_config_lf';
import ballBoardConfigPK10 from './ball_board_config_pk10';
import ballBoardConfigSingle from './ball_board_config_single';

// merge all games ball board config
export const ballBoardConfig = {
  ...ballBoardConfigSSC,
  ...ballBoardConfig11X5,
  ...ballBoardConfigLF,
  ...ballBoardConfigPK10,
  ...ballBoardConfigSingle,
};
export { betDigits } from './bet_digits';
