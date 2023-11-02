import ballBoardConfigSSC from './ball_board_config_ssc';
import ballBoardConfig11X5 from './ball_board_config_11x5';
import ballBoardConfigLF from './ball_board_config_lf';
import ballBoardConfigPK10 from './ball_board_config_pk10';
import ballBoardConfigSingle from './ball_board_config_single';
import ballBoardConfigK3 from './ball_board_config_k3';

// 東南亞彩 ball config
import ballBoardConfigSeaTHAI from './ball_board_config_sea_thai';
import ballBoardConfigSeaVNC from './ball_board_config_sea_vnc';
import ballBoardConfigSeaLAO from './ball_board_config_sea_lao';

import { BallBoardConfigRecord } from './ball_board_config_record';
import { ballShowPosition, ballConfigurationCategory } from './ball_configuration_config';

// merge all games ball board config
export const ballBoardConfig = {
  ...ballBoardConfigSSC,
  ...ballBoardConfig11X5,
  ...ballBoardConfigLF,
  ...ballBoardConfigPK10,
  ...ballBoardConfigSingle,
  ...ballBoardConfigK3,
  ...ballBoardConfigSeaTHAI,
  ...ballBoardConfigSeaVNC,
  ...ballBoardConfigSeaLAO,
};
export { betDigits } from './bet_digits';

// 中國彩 開獎頁組態
export const BZHConfig = {
  'K3': BallBoardConfigRecord({
      ballConfigurationCategory: ballConfigurationCategory.K3_BALL_SUM_BSOE,
    }),
  '11X5': BallBoardConfigRecord({
      ballShowPosition: ballShowPosition.ALL,
      ballConfigurationCategory: ballConfigurationCategory.OE_COUNT,
    }),
  'SSC': BallBoardConfigRecord({
      ballShowPosition: ballShowPosition.LAST_THREE,
      ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
    }),
  'LF': BallBoardConfigRecord({
      ballShowPosition: ballShowPosition.LAST_THREE,
      ballConfigurationCategory: ballConfigurationCategory.CONFIGURATION_NUMBER,
    }),
};
