import _ from 'lodash';
import { PlayMenu } from '../i18n/configs/basic_play_menu';

const baseProps = {
  grade: _.times(9), // 全獎級顯示
  numberOfColorWords: 0, // 後幾位變色
};

export const getGradeNumberOfColorWords = (playId) => {
  switch (playId) {
      // 北部 後二包膽
    case PlayMenu.Any_Roll_Last_2_North_VNC:
    case PlayMenu.Any_Roll_Last_2_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_2_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_2_South_VNC:
    case PlayMenu.Any_Roll_Last_2_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_2_South_VNC_Single:
      return { ...baseProps, numberOfColorWords: 2 };
      // 北部 後三包膽
    case PlayMenu.Any_Roll_Last_3_North_VNC:
    case PlayMenu.Any_Roll_Last_3_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_3_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_3_South_VNC:
    case PlayMenu.Any_Roll_Last_3_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_3_South_VNC_Single:
      return { ...baseProps, numberOfColorWords: 3 };
      // 北部 後四包膽
    case PlayMenu.Any_Roll_Last_4_North_VNC:
    case PlayMenu.Any_Roll_Last_4_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_4_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_4_South_VNC:
    case PlayMenu.Any_Roll_Last_4_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_4_South_VNC_Single:
      return { ...baseProps, numberOfColorWords: 4 };
      // 上正四位数 test
    case PlayMenu.LAST_4_STRAIGHT_1ST_VNC:
    case PlayMenu.LAST_4_COMBINE_1ST_VNC:
    case PlayMenu.Last_4_Straight_1st_VNC_Multi:
    case PlayMenu.Last_4_Straight_1st_VNC_Single:
      return { grade: [0], numberOfColorWords: 4 }; // 特等獎 後四位
    case PlayMenu.LAST_3_STRAIGHT_1ST_VNC:
    case PlayMenu.LAST_3_COMBINE_1ST_VNC:
    case PlayMenu.Last_3_Straight_1st_VNC_Multi:
    case PlayMenu.Last_3_Combine_1st_VNC_Multi:
    case PlayMenu.Last_3_Straight_1st_VNC_Single:
    case PlayMenu.Fan_Tan_Fan_VNC:
      return { grade: [0], numberOfColorWords: 3 }; // 特等獎 後三位
    case PlayMenu.LAST_2_STRAIGHT_1ST_VNC:
    case PlayMenu.Last_2_Straight_1st_VNC_Multi:
    case PlayMenu.Last_2_Straight_1st_VNC_Single:
    case PlayMenu.LAST_2_ANY_1ST_VNC:
      return { grade: [0], numberOfColorWords: 2 }; // 特等獎 後二位
    case PlayMenu.Hoo_Hey_How_Play_VNC:
      return { grade: [0], numberOfColorWords: 1 }; // 特等獎 後一位
    case PlayMenu.LAST_2_STRAIGHT_2ND_VNC:
    case PlayMenu.Last_2_Straight_2nd_VNC_Multi:
    case PlayMenu.Last_2_Straight_2nd_VNC_Single:
    case PlayMenu.LAST_2_ANY_2ND_VNC:
      return { grade: [1], numberOfColorWords: 2 }; // 一等獎 後二位
    default:
      return baseProps;
  }
};

export default getGradeNumberOfColorWords;
