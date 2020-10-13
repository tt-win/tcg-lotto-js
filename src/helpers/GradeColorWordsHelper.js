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
      return { grade: [0], numberOfColorWords: 4 }; // 特等獎 後四位
    default:
      return baseProps;
  }
};

export default getGradeNumberOfColorWords;
