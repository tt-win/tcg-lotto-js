import _ from 'lodash';
import { PlayMenu } from '../i18n/configs/basic_play_menu';

const baseProps = {
  grade: _.times(9), // 全獎級顯示
  unitColorWords: '', // 變色單位 111=>後三位, 10=>十位
};
// 泰彩的特獎在最後
export const getGradeNumberOfColorWords = (playId) => {
  switch (playId) {
    // 北部 後二包膽
    case PlayMenu.Any_Roll_Last_2_North_VNC:
    case PlayMenu.Any_Roll_Last_2_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_2_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_2_South_VNC:
    case PlayMenu.Any_Roll_Last_2_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_2_South_VNC_Single:
    // 逆向
    case PlayMenu['4_Not_Winning_Numbers_North_VNC']:
    case PlayMenu['4_Not_Winning_Numbers_Single_North_VNC']:
    case PlayMenu['8_Not_Winning_Numbers_North_VNC']:
    case PlayMenu['8_Not_Winning_Numbers_Single_North_VNC']:
    case PlayMenu['10_Not_Winning_Numbers_North_VNC']:
    case PlayMenu['10_Not_Winning_Numbers_Single_North_VNC']:
    case PlayMenu['4_Not_Winning_Numbers_South_VNC']:
    case PlayMenu['4_Not_Winning_Numbers_Single_South_VNC']:
    case PlayMenu['8_Not_Winning_Numbers_South_VNC']:
    case PlayMenu['8_Not_Winning_Numbers_Single_South_VNC']:
    case PlayMenu['10_Not_Winning_Numbers_South_VNC']:
    case PlayMenu['10_Not_Winning_Numbers_Single_South_VNC']:
    // 串組
    case PlayMenu.Bunch_2_North_VNC:
    case PlayMenu.Bunch_2_North_VNC_Single:
    case PlayMenu.Bunch_3_North_VNC:
    case PlayMenu.Bunch_3_North_VNC_Single:
    case PlayMenu.Bunch_4_North_VNC:
    case PlayMenu.Bunch_4_North_VNC_Single:
    case PlayMenu.Bunch_2_South_VNC:
    case PlayMenu.Bunch_2_South_VNC_Single:
    case PlayMenu.Bunch_3_South_VNC:
    case PlayMenu.Bunch_3_South_VNC_Single:
    case PlayMenu.Bunch_4_South_VNC:
    case PlayMenu.Bunch_4_South_VNC_Single:
      return { ...baseProps, unitColorWords: '11' };
      // 北部 後三包膽
    case PlayMenu.Any_Roll_Last_3_North_VNC:
    case PlayMenu.Any_Roll_Last_3_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_3_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_3_South_VNC:
    case PlayMenu.Any_Roll_Last_3_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_3_South_VNC_Single:
      return { ...baseProps, unitColorWords: '111' };
      // 北部 後四包膽
    case PlayMenu.Any_Roll_Last_4_North_VNC:
    case PlayMenu.Any_Roll_Last_4_North_VNC_Multi:
    case PlayMenu.Any_Roll_Last_4_North_VNC_Single:
    case PlayMenu.Any_Roll_Last_4_South_VNC:
    case PlayMenu.Any_Roll_Last_4_South_VNC_Multi:
    case PlayMenu.Any_Roll_Last_4_South_VNC_Single:
      return { ...baseProps, unitColorWords: '1111' };
      // 上正四位数 test
    case PlayMenu.LAST_4_STRAIGHT_1ST_VNC:
    case PlayMenu.LAST_4_COMBINE_1ST_VNC:
    case PlayMenu.Last_4_Straight_1st_VNC_Multi:
    case PlayMenu.Last_4_Straight_1st_VNC_Single:
      return { grade: [0], unitColorWords: '1111' }; // 特等獎 後四位
    case PlayMenu.LAST_3_STRAIGHT_1ST_VNC:
    case PlayMenu.LAST_3_COMBINE_1ST_VNC:
    case PlayMenu.Last_3_Straight_1st_VNC_Multi:
    case PlayMenu.Last_3_Combine_1st_VNC_Multi:
    case PlayMenu.Last_3_Straight_1st_VNC_Single:
    case PlayMenu.Fan_Tan_Fan_VNC:
    case PlayMenu.LAST_3_STRAIGHT_THAI:
    case PlayMenu.Last_3_Straight_THAI_Multi:
    case PlayMenu.Last_3_Straight_THAI_Single:
    case PlayMenu.Last_3_Combine_THAI_Multi:
    case PlayMenu.LAST_3_COMBINE_THAI:
    case PlayMenu['1_AT_ANY_LAST_3_THAI']:
    case PlayMenu.Fan_Tan_Fan_THAI:
      return { grade: [0], unitColorWords: '111' }; // 特等獎 後三位 (TAHI 一等獎 後三位)
    case PlayMenu.LAST_2_STRAIGHT_1ST_VNC:
    case PlayMenu.Last_2_Straight_1st_VNC_Multi:
    case PlayMenu.Last_2_Straight_1st_VNC_Single:
    case PlayMenu.LAST_2_ANY_1ST_VNC:
    case PlayMenu.Last_2_Straight_THAI_Multi:
    case PlayMenu.Last_2_Straight_THAI_Single:
    case PlayMenu.LAST_2_STRAIGHT_THAI:
    case PlayMenu.Last_2_Combine_THAI_Multi:
    case PlayMenu.LAST_2_COMBINE_THAI:
      return { grade: [0], unitColorWords: '11' }; // 特等獎 後二位 (TAHI 一等獎 後二位)
    case PlayMenu.Hoo_Hey_How_Play_VNC:
    case PlayMenu.Hoo_Hey_How_Play_THAI:
      return { grade: [0], unitColorWords: '1' }; // 特等獎 後一位 (TAHI 一等獎 後一位)
    case PlayMenu.Ten_Digit_1st_VNC:
      return { grade: [0], unitColorWords: '10' }; // 特等獎 十位數
    case PlayMenu.Unit_Digit_1st_VNC:
      return { grade: [0], unitColorWords: '1' }; // 特等獎 個位數
    case PlayMenu.Ten_Digit_2nd_VNC:
      return { grade: [1], unitColorWords: '10' }; // 一等獎 十位數
    case PlayMenu.Unit_Digit_2nd_VNC:
      return { grade: [1], unitColorWords: '1' }; // 一等獎 個位數
    case PlayMenu.LAST_2_STRAIGHT_2ND_VNC:
    case PlayMenu.Last_2_Straight_2nd_VNC_Multi:
    case PlayMenu.Last_2_Straight_2nd_VNC_Single:
    case PlayMenu.LAST_2_ANY_2ND_VNC:
      return { grade: [1], unitColorWords: '11' }; // 一等獎 後二位
    case PlayMenu.Last_2_1st_7th_North_VNC:
    case PlayMenu.Last_2_1st_7th_North_VNC_Single:
    case PlayMenu.Last_2_1st_7th_North_VNC_Multi:
      return { grade: [0, 7], unitColorWords: '11' }; // 特等獎 七等獎 後二
    case PlayMenu['2_Straight_Add_THAI_Multi']:
    case PlayMenu['2_Straight_Add_THAI_Single']:
    case PlayMenu['2_STRAIGHT_ADD_THAI']:
      return { grade: [3], unitColorWords: '11' }; // 四等獎 後二 (TAHI 特獎 後二)
    case PlayMenu.Last_2_7th_North_VNC:
    case PlayMenu.Last_2_7th_North_VNC_Single:
    case PlayMenu.Last_2_7th_North_VNC_Multi:
      return { grade: [7], unitColorWords: '11' }; // 七等獎 後二
    case PlayMenu.Last_2_1st_8th_South_VNC:
    case PlayMenu.Last_2_1st_8th_South_VNC_Single:
    case PlayMenu.Last_2_1st_8th_South_VNC_Multi:
      return { grade: [0, 8], unitColorWords: '11' }; // 特等獎 八等獎 後二
    case PlayMenu.Last_2_8th_South_VNC:
    case PlayMenu.Last_2_8th_South_VNC_Single:
    case PlayMenu.Last_2_8th_South_VNC_Multi:
      return { grade: [8], unitColorWords: '11' }; // 八等獎 後二
    default:
      return baseProps;
  }
};

const gradeColorWordsHelper = {
  getGradeNumberOfColorWords,
};

export default gradeColorWordsHelper;
