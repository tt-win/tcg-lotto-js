import _isNumber from 'lodash/isNumber';
import _findIndex from 'lodash/findIndex';
import _reverse from 'lodash/reverse';
import _find from 'lodash/find';
import _padStart from 'lodash/padStart';
import { i18n,i18n3,lang } from './lang/i18n-key-finder';
import { orderDigitsI18n } from './configs/basic_play_menu';
import { PlayMenu } from './configs/play_menu';

// 大小單雙 i18n key
const BALL_BSOE_KEY = ['big', 'small', 'odd', 'even'];

// LHC
const lhcKey = {
  // 總大小單雙
  SUM_BSOE: ['totalBig', 'totalSmall', 'totalOdd', 'totalEven'],
  // 特總大小單雙
  TOTAL_SUM_BSOE: ['specialSumBig', 'specialSumSmall', 'specialSumOdd', 'specialSumEven'],
  // 特大小單雙
  BSOE: ['specialBig', 'specialSmall', 'specialOdd', 'specialEven'],
  // 特(大小)(單雙)
  BS_OE: {
    '02': 'specialBigOdd',
    '03': 'specialBigEven',
    12: 'specialSmallOdd',
    13: 'specialSmallEven',
  },
  // 特合大小單雙
  BALL_TOSUM_BSOE_KEY: ['specialTOSumBig', 'specialTOSumSmall', 'specialTOSumOdd', 'specialTOSumEven'],
  // 特尾大小
  TAIL_BS_KEY: ['specialTailBig', 'specialTailSmall'],
  // 特肖
  SPECIAL_ZODIAC: {
    1: 'specialSkyAnimal',
    2: 'specialGroundAnimal',
    3: 'specialHomeAnimal',
    4: 'specialWildAnimal',
    5: 'specialFirst6Animal',
    6: 'specialLast6Animal',
  },
  // 色波
  COLOR_BALL: {
    1: 'colorStraightRed',
    2: 'colorStraightBlue',
    3: 'colorStraightGreen',
  },
  // 色波大小單雙
  COLOR_BSOE: {
    12: 'redOdd',
    13: 'redEven',
    10: 'redBig',
    11: 'redSmall',
    22: 'blueOdd',
    23: 'blueEven',
    20: 'blueBig',
    21: 'blueSmall',
    32: 'greenOdd',
    33: 'greenEven',
    30: 'greenBig',
    31: 'greenSmall',
  },
  // 色波(大小)(單雙)
  COLOR_BS_OE: {
    102: 'redBigOdd',
    103: 'redBigEven',
    112: 'redSmallOdd',
    113: 'redSmallEven',
    202: 'blueBigOdd',
    203: 'blueBigEven',
    212: 'blueSmallOdd',
    213: 'blueSmallEven',
    302: 'greenBigOdd',
    303: 'greenBigEven',
    312: 'greenSmallOdd',
    313: 'greenSmallEven',
  },
  ZODIAC: {
    1: 'specialRat',
    2: 'specialOx',
    3: 'specialTiger',
    4: 'specialRabbit',
    5: 'specialDragon',
    6: 'specialSnake',
    7: 'specialHorse',
    8: 'specialGoat',
    9: 'specialMonkey',
    10: 'specialRooster',
    11: 'specialDog',
    12: 'specialPig',
  },
  HEAD_TAIL: {
    10: 'headZero',
    11: 'headOne',
    12: 'headTwo',
    13: 'headThree',
    14: 'headFour',
    21: 'tailOne',
    22: 'tailTwo',
    23: 'tailThree',
    24: 'tailFour',
    25: 'tailFive',
    26: 'tailSix',
    27: 'tailSeven',
    28: 'tailEight',
    29: 'tailNine',
    20: 'tailZero',
  },
  // 正一二三四五六大小單雙
  FIXED_BSOE: {
    FIRST: ['firstBig', 'firstSmall', 'firstOdd', 'firstEven'],
    SECOND: ['secondBig', 'secondSmall', 'secondOdd', 'secondEven'],
    THIRD: ['thirdBig', 'thirdSmall', 'thirdOdd', 'thirdEven'],
    FOURTH: ['fourthBig', 'fourthSmall', 'fourthOdd', 'fourthEven'],
    FIFTH: ['fifthBig', 'fifthSmall', 'fifthOdd', 'fifthEven'],
    SIXTH: ['sixthBig', 'sixthSmall', 'sixthOdd', 'sixthEven'],
  },

  // 正一二三四五六合單雙
  FIXED_TOSum_OE: {
    FIRST: { 2: 'firstSumOdd', 3: 'firstSumEven' },
    SECOND: { 2: 'secondSumOdd', 3: 'secondSumEven' },
    THIRD: { 2: 'thirdSumOdd', 3: 'thirdSumEven' },
    FOURTH: { 2: 'fourthSumOdd', 3: 'fourthSumEven' },
    FIFTH: { 2: 'fifthSumOdd', 3: 'fifthSumEven' },
    SIXTH: { 2: 'sixthSumOdd', 3: 'sixthSumEven' },
  },

  // 正一二三四五六紅藍綠
  FIXED_Color: {
    FIRST: { 1: 'firstRed', 2: 'firstBlue', 3: 'firstGreen' },
    SECOND: { 1: 'secondRed', 2: 'secondBlue', 3: 'secondGreen' },
    THIRD: { 1: 'thirdRed', 2: 'thirdBlue', 3: 'thirdGreen' },
    FOURTH: { 1: 'fourthRed', 2: 'fourthBlue', 3: 'fourthGreen' },
    FIFTH: { 1: 'fifthRed', 2: 'fifthBlue', 3: 'fifthGreen' },
    SIXTH: { 1: 'sixthRed', 2: 'sixthBlue', 3: 'sixthGreen' },
  },

  // 合大小單雙
  TOSum_BSOE: ['normalTOSumBig', 'normalTOSumSmall', 'normalTOSumOdd', 'normalTOSumEven'],
  // 尾大小
  Tail_BS: ['normalTailBig', 'normalTailSmall'],

  /* 正碼一二三四五六 */
  // 大小單雙碼
  NORMAL_BSOE: ['normalBig', 'normalSmall', 'normalOdd', 'normalEven'],
};


// 時時彩位數 i18n key
const SSC_DIGIT_KEY = ['tenThousands2', 'thousands2', 'hundreds2', 'tens2', 'ones2'];

const lhc = {
  // 球號
  BALL_NUMBER_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_Straight_LHC,
      PlayMenu.SpecialB_Straight_LHC,

      // 正碼
      PlayMenu.Normal_Straight_LHC,

      // 正碼特
      PlayMenu.First_Fixed_LHC,
      PlayMenu.Second_Fixed_LHC,
      PlayMenu.Third_Fixed_LHC,
      PlayMenu.Fourth_Fixed_LHC,
      PlayMenu.Fifth_Fixed_LHC,
      PlayMenu.Sixth_Fixed_LHC,

      // 自選不中
      PlayMenu.Choose_Not_in_Winning_Numbers_LHC,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${val}`), ''),
  },
  // 特大小單雙
  BSOE_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_BSOE_LHC,
      PlayMenu.SpecialB_BSOE_LHC,
      // 兩面
      PlayMenu.Two_Sides_Special_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.BSOE[content]}`),
  },
  // 特(大小)(單雙)
  BS_OE_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_BS_OE_LHC,
      PlayMenu.SpecialB_BS_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.BS_OE[content]}`),
  },
  // 特合大小單雙
  SPECIAL_TOSum_BSOE_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_TOSum_BSOE_LHC,
      PlayMenu.SpecialB_TOSum_BSOE_LHC,
      // 兩面
      PlayMenu.Two_Sides_Special_TOSum_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.BALL_TOSUM_BSOE_KEY[content]}`),
  },
  // 特尾大小
  SPECIAL_Tail_BS_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_Tail_BS_LHC,
      PlayMenu.SpecialB_Tail_BS_LHC,
      // 兩面
      PlayMenu.Two_Sides_Special_BS_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.TAIL_BS_KEY[content]}`),
  },
  // 特肖
  SPECIAL_ZODIAC_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_Animal_LHC,
      PlayMenu.SpecialB_Animal_LHC,
      // 兩面
      PlayMenu.Two_Sides_Special_Animal_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.SPECIAL_ZODIAC[content]}`),
  },
  // 特總和大小單雙
  TOTAL_SUM_BSOE_LHC: {
    items: [
      // 兩面
      PlayMenu.Two_Sides_Total_Sum_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.TOTAL_SUM_BSOE[content]}`),
  },
  // 色波
  COLOR_BALL_LHC: {
    items: [
      // 色波
      PlayMenu.Color_Straight_LHC,

      // 正碼1-6
      PlayMenu.Normal_First_Color_LHC,
      PlayMenu.Normal_Second_Color_LHC,
      PlayMenu.Normal_Third_Color_LHC,
      PlayMenu.Normal_Fourth_Color_LHC,
      PlayMenu.Normal_Fifth_Color_LHC,
      PlayMenu.Normal_Sixth_Color_LHC,

    ],
    getText: (content) => i18n(`playKey.${lhcKey.COLOR_BALL[content]}`),
  },
  // 色波大小單雙
  COLOR_BSOE_LHC: {
    items: [
      // 半波
      PlayMenu.Color_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.COLOR_BSOE[content]}`),
  },
  // 色波(大小)(單雙)
  COLOR_BS_OE_LHC: {
    items: [
      // 半半波
      PlayMenu.Color_BS_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.COLOR_BS_OE[content]}`),
  },
  // 特肖
  ZODIAC_LHC: {
    items: [
      // 特肖
      PlayMenu.Special_Zodiac_Straight_LHC,

      // 平特一肖
      PlayMenu.Normal_Special_One_Zodiac_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.ZODIAC[content]}`),
  },
  // 頭尾數
  HEAD_TAIL_LHC: {
    items: [
      // 頭尾數
      PlayMenu.Head_Tail_Special_LHC,

      // 平特尾數
      PlayMenu.Normal_Special_Tail_No_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.HEAD_TAIL[content]}`),
  },
  // 合肖
  COMBINE_ZODIAC_LHC: {
    items: [
      // 合肖
      PlayMenu.Special_Combine_Chinese_Zodiac_LHC,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${i18n(`playKey.${lhcKey.ZODIAC[parseInt(val)]}`)}`), ''),
  },
  // 總大小單雙
  SUM_BSOE_LHC: {
    items: [
      // 總大小單雙
      PlayMenu.Normal_Total_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.SUM_BSOE[content]}`),
  },
  /* 正碼特 */
  // 正一大小單雙
  FIRST_FIXED_BSOE_LHC: {
    items: [
      // 正一大小單雙
      PlayMenu.Fixed_First_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.FIRST[content]}`),
  },
  // 正二大小單雙
  SECOND_FIXED_BSOE_LHC: {
    items: [
      // 正二大小單雙
      PlayMenu.Fixed_Second_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.SECOND[content]}`),
  },
  // 正三大小單雙
  THIRD_FIXED_BSOE_LHC: {
    items: [
      // 正三大小單雙
      PlayMenu.Fixed_Third_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.THIRD[content]}`),
  },
  // 正四大小單雙
  FOURTH_FIXED_BSOE_LHC: {
    items: [
      // 正四大小單雙
      PlayMenu.Fixed_Fourth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.FOURTH[content]}`),
  },
  // 正五大小單雙
  FIFTH_FIXED_BSOE_LHC: {
    items: [
      // 正五大小單雙
      PlayMenu.Fixed_Fifth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.FIFTH[content]}`),
  },
  // 正六大小單雙
  SIXTH_FIXED_BSOE_LHC: {
    items: [
      // 正六大小單雙
      PlayMenu.Fixed_Sixth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_BSOE.SIXTH[content]}`),
  },

  /* 正碼特合單雙 */
  // 正一合單雙
  FIRST_FIXED_TOSum_OE_LHC: {
    items: [
      // 正一合單雙
      PlayMenu.Fixed_First_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.FIRST[content]}`),
  },
  // 正二合單雙
  SECOND_FIXED_TOSum_OE_LHC: {
    items: [
      // 正二合單雙
      PlayMenu.Fixed_Second_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.SECOND[content]}`),
  },
  // 正三合單雙
  THIRD_FIXED_TOSum_OE_LHC: {
    items: [
      // 正三合單雙
      PlayMenu.Fixed_Third_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.THIRD[content]}`),
  },
  // 正四合單雙
  FOURTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正四合單雙
      PlayMenu.Fixed_Fourth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.FOURTH[content]}`),
  },
  // 正五合單雙
  FIFTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正五合單雙
      PlayMenu.Fixed_Fifth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.FIFTH[content]}`),
  },
  // 正六合單雙
  SIXTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正六合單雙
      PlayMenu.Fixed_Sixth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_TOSum_OE.SIXTH[content]}`),
  },

  /* 正碼特紅藍綠 */
  // 正一紅藍綠
  FIRST_FIXED_COLOR_LHC: {
    items: [
      // 正一紅藍綠
      PlayMenu.Fixed_First_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.FIRST[content]}`),
  },
  // 正二紅藍綠
  SECOND_FIXED_COLOR_LHC: {
    items: [
      // 正二紅藍綠
      PlayMenu.Fixed_Second_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.SECOND[content]}`),
  },
  // 正三紅藍綠
  THIRD_FIXED_COLOR_LHC: {
    items: [
      // 正三紅藍綠
      PlayMenu.Fixed_Third_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.THIRD[content]}`),
  },
  // 正四紅藍綠
  FOURTH_FIXED_COLOR_LHC: {
    items: [
      // 正四紅藍綠
      PlayMenu.Fixed_Fourth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.FOURTH[content]}`),
  },
  // 正五紅藍綠
  FIFTH_FIXED_COLOR_LHC: {
    items: [
      // 正五紅藍綠
      PlayMenu.Fixed_Fifth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.FIFTH[content]}`),
  },
  // 正六紅藍綠
  SIXTH_FIXED_COLOR_LHC: {
    items: [
      // 正六紅藍綠
      PlayMenu.Fixed_Sixth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.FIXED_Color.SIXTH[content]}`),
  },

  // 正碼1-6 大小單雙碼
  NORMAL_BSOE_LHC: {
    items: [
      // 正碼1-6大小單雙
      PlayMenu.Normal_First_BSOE_LHC,
      PlayMenu.Normal_Second_BSOE_LHC,
      PlayMenu.Normal_Third_BSOE_LHC,
      PlayMenu.Normal_Fourth_BSOE_LHC,
      PlayMenu.Normal_Fifth_BSOE_LHC,
      PlayMenu.Normal_Sixth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.NORMAL_BSOE[content]}`),
  },

  // 合大小單雙
  TOSum_BSOE_LHC: {
    items: [
      // 正碼1-6合大小單雙
      PlayMenu.Normal_First_TOSum_BSOE_LHC,
      PlayMenu.Normal_Second_TOSum_BSOE_LHC,
      PlayMenu.Normal_Third_TOSum_BSOE_LHC,
      PlayMenu.Normal_Fourth_TOSum_BSOE_LHC,
      PlayMenu.Normal_Fifth_TOSum_BSOE_LHC,
      PlayMenu.Normal_Sixth_TOSum_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.TOSum_BSOE[content]}`),
  },

  // 尾大小
  TAIL_BS_LHC: {
    items: [
      // 正碼1-6尾大小
      PlayMenu.Normal_First_Tail_BS_LHC,
      PlayMenu.Normal_Second_Tail_BS_LHC,
      PlayMenu.Normal_Third_Tail_BS_LHC,
      PlayMenu.Normal_Fourth_Tail_BS_LHC,
      PlayMenu.Normal_Fifth_Tail_BS_LHC,
      PlayMenu.Normal_Sixth_Tail_BS_LHC,
    ],
    getText: (content) => i18n(`playKey.${lhcKey.Tail_BS[content]}`),
  },

};

// 訂單詳情 / 投注內容 欄位需特殊處理的項目及處理方法
const ballContentSpecialDisplayType = {
  BSOE: {
    items: [
      PlayMenu.First2BSOE,
      PlayMenu.Last2BSOE,
      PlayMenu.First2BSOE_LF,
      PlayMenu.Last2BSOE_LF_FC3D,
      PlayMenu.P5First2BSOE_LF,
      PlayMenu.P3Last2BSOE_LF,
      PlayMenu.Last2BSOE_LF_P3P5,
      PlayMenu.First5BSOE_PK10,
      PlayMenu.Last5BSOE_PK10,
      PlayMenu.First2SumBSOE_PK10,

      // ENT娛樂城
      PlayMenu.First_BSOE_ENT,
      PlayMenu.First_Total_Sum_ENT,
      PlayMenu.Second_BSOE_ENT,
      PlayMenu.Second_Total_Sum_ENT,
      PlayMenu.Third_BSOE_ENT,
      PlayMenu.Third_Total_Sum_ENT,
      PlayMenu.Fourth_BSOE_ENT,
      PlayMenu.Fourth_Total_Sum_ENT,
      PlayMenu.Fifth_BSOE_ENT,
      PlayMenu.Fifth_Total_Sum_ENT,
      PlayMenu.Two_Side_First_BSOE_ENT,
      PlayMenu.Two_Side_Second_BSOE_ENT,
      PlayMenu.Two_Side_Third_BSOE_ENT,
      PlayMenu.Two_Side_Fourth_BSOE_ENT,
      PlayMenu.Two_Side_Fifth_BSOE_ENT,
      PlayMenu.Two_Side_Total_Sum_BSOE_ENT,
      PlayMenu.Combine_First_BSOE_ENT,
      PlayMenu.Combine_Second_BSOE_ENT,
      PlayMenu.Combine_Third_BSOE_ENT,
      PlayMenu.Combine_Fourth_BSOE_ENT,
      PlayMenu.Combine_Fifth_BSOE_ENT,
      PlayMenu.Combine_Total_Sum_ENT,

    ],
    getText: (content) =>
      content.split('_').reduce((result, val) => (`${result}${result ? ' | ' : ''}${i18n(`ball.BSOE.${BALL_BSOE_KEY[parseInt(val)]}`)}`), ''),
  },
  DRAGON_TIGER: {
    items: [
      PlayMenu.Dragon_Tiger_1_VS_10,
      PlayMenu.Dragon_Tiger_2_VS_9,
      PlayMenu.Dragon_Tiger_3_VS_8,
      PlayMenu.Dragon_Tiger_4_VS_7,
      PlayMenu.Dragon_Tiger_5_VS_6,
    ],
    getText: (content) => i18n(`ball.dragonTiger.${content === '1' ? 'dragon' : 'tiger'}`),
  },
  DRAGON_TIGER_TIE: {
    items: [
      PlayMenu.Dragon_Tiger_10T_T_SSC,
      PlayMenu.Dragon_Tiger_10T_H_SSC,
      PlayMenu.Dragon_Tiger_10T_10_SSC,
      PlayMenu.Dragon_Tiger_10T_1_SSC,
      PlayMenu.Dragon_Tiger_T_H_SSC,
      PlayMenu.Dragon_Tiger_T_10_SSC,
      PlayMenu.Dragon_Tiger_T_1_SSC,
      PlayMenu.Dragon_Tiger_H_10_SSC,
      PlayMenu.Dragon_Tiger_H_1_SSC,
      PlayMenu.Dragon_Tiger_10_1_SSC,

      // 娛樂城龍虎和
      PlayMenu.Dragon_Tiger_Tie_5_4_ENT,
      PlayMenu.Dragon_Tiger_Tie_5_3_ENT,
      PlayMenu.Dragon_Tiger_Tie_5_2_ENT,
      PlayMenu.Dragon_Tiger_Tie_5_1_ENT,
      PlayMenu.Dragon_Tiger_Tie_4_3_ENT,
      PlayMenu.Dragon_Tiger_Tie_4_2_ENT,
      PlayMenu.Dragon_Tiger_Tie_4_1_ENT,
      PlayMenu.Dragon_Tiger_Tie_3_2_ENT,
      PlayMenu.Dragon_Tiger_Tie_3_1_ENT,
      PlayMenu.Dragon_Tiger_Tie_2_1_ENT,
      // 娛樂城整合龍虎和
      PlayMenu.Combine_Dragon_Tiger_Tie_ENT,
    ],
    getText: (content) => {
      let contentKey;
      switch (content) {
        case '1':
          contentKey = 'dragon';
          break;
        case '12':
          contentKey = 'dragonOdd';
          break;
        case '13':
          contentKey = 'dragonEven';
          break;
        case '0':
          contentKey = 'tiger';
          break;
        case '02':
          contentKey = 'tigerOdd';
          break;
        case '03':
          contentKey = 'tigerEven';
          break;
        case '2':
          contentKey = 'tie';
          break;
        default:
          break;
      }
      return i18n(`ball.dragonTigerTie.${contentKey}`);
    },
  },
  OE_COUNTS: {
    items: [PlayMenu.OECounts_11X5],
    getText: (content) => i18n(`ball.OECounts.${content}`),
  },
  // ENT 前三 中三 後三
  GROUP_ENT: {
    items: [
      PlayMenu.First_First3_ENT,
      PlayMenu.First_Middle3_ENT,
      PlayMenu.First_Last3_ENT,
      PlayMenu.Second_First3_ENT,
      PlayMenu.Second_Middle3_ENT,
      PlayMenu.Second_Last3_ENT,
      PlayMenu.Third_First3_ENT,
      PlayMenu.Third_Middle3_ENT,
      PlayMenu.Third_Last3_ENT,
      PlayMenu.Fourth_First3_ENT,
      PlayMenu.Fourth_Middle3_ENT,
      PlayMenu.Fourth_Last3_ENT,
      PlayMenu.Fifth_First3_ENT,
      PlayMenu.Fifth_Middle3_ENT,
      PlayMenu.Fifth_Last3_ENT,
      PlayMenu.Combine_First3_ENT,
      PlayMenu.Combine_Middle3_ENT,
      PlayMenu.Combine_Last3_ENT,
    ],
    getText: (content) => i18n(`ball.GroupENT.${content}`),
  },

  ANY_COM_SSC: {
    items: [
      PlayMenu.Any4Com24_SSC,
      PlayMenu.Any4Com12_SSC,
      PlayMenu.Any4Com6_SSC,
      PlayMenu.Any4Com4_SSC,
      PlayMenu.Any3Sum_SSC,
      PlayMenu.Any3Com3_SSC,
      PlayMenu.Any3Com6_SSC,
      PlayMenu.Any3Com_SSC,
      PlayMenu.Any2Sum_SSC,
      PlayMenu.Any2Com_SSC,
      PlayMenu.Any2Com_SSC_Single,
    ],
    getText: (content) => {
      const contentArr = content.split('@');
      const digitText = contentArr[0].split('').reduce((finalText, digitPos) => {
        const index = parseInt(digitPos) - 1;
        return `${finalText}${i18n(`startDigit.${SSC_DIGIT_KEY[index]}`)}`;
      }, '');
      return `(${digitText})${contentArr[1]}`;
    },
  },
  ...lhc,
};

/**
 * Get play menu name with digits, using in shopping cart and order logs query.
 * @param playMenu
 * @param startDigit
 * @return {string}
 */
export const getPlayMenuNameWithDigit = ({ playMenu, startDigit }) => {
  const { playCode, playId } = playMenu;
  const { digitsI18n } = orderDigitsI18n[playCode] || {};

  // startDigit 存在才有可能需要顯示
  const startDigitI18n = _isNumber(startDigit) && digitsI18n ? i18n(digitsI18n[startDigit]) : '';
  // 娛樂城龍虎鬥要多加個抬頭
  // 1843: '第一球vs第二球',
  // 1844: '第一球vs第三球',
  // 1845: '第一球vs第四球',
  // 1846: '第一球vs第五球',
  // 1847: '第二球vs第三球',
  // 1848: '第二球vs第四球',
  // 1849: '第二球vs第五球',
  // 1850: '第三球vs第四球',
  // 1851: '第三球vs第五球',
  // 1852: '第四球vs第五球',
  if (playId >= 1843 && playId <= 1852) {
    return `${i18n('playId.1841')}:${i18n(`playId.${playId}`)}${startDigitI18n}`;
  }
  return `${i18n(`playId.${playId}`)}${startDigitI18n}`;
};

/**
 * Trunc ball text for showing, shopping cart and order logs query.
 * @param ballText
 * @return {string}
 */
export const truncBallText = (ballText) => {
  const digitsStrLength = 4;
  const totalLength = 8;
  const truncText = ballText
    .substr(0, totalLength); // .replace(/ \| /g, '|')

  const replacePattern = (str) => str.replace(/\|/g, ' | ');

  // for manual digit trunc
  if (ballText.indexOf('(') >= 0 && ballText.indexOf(')') >= 0) {
    const digitsStr = ballText.substr(0, ballText.indexOf(')') + 1);
    if (digitsStr.length > digitsStrLength) {
      // 長度4, (萬千百...
      return `${digitsStr.substr(0, digitsStrLength)}...`;
    } else if (truncText.length === (digitsStrLength + 1)) {
      // 長度5, (百十)1
      return `${truncText.substr(0, digitsStrLength + 1)}`;
    }

    // 長度5, (百十)1...
    return `${truncText.substr(0, digitsStrLength + 1)}...`;
  }

  if (truncText.length > (totalLength - 1)) {
    return `${replacePattern(truncText.substr(0, totalLength - 1))}...`;
  }
  return replacePattern(truncText);
};

export const getPlayName = ({ playId, playCode, bettingContent }) => {
  const parameter = {
    playMenu: { playCode, playId },
    startDigit: '',
  };
  const contents = bettingContent.split('');

  switch (playId) {
    case PlayMenu.FixedPlace:
    case PlayMenu.FixedPlace_LF_FC3D:
    case PlayMenu.FixedPlace_LF_P3P5:
    case PlayMenu.FixedPlace_11X5:
      parameter.startDigit = _findIndex(_reverse(contents), (v) => !isNaN(v));
      break;

    case PlayMenu.First5Fixed_PK10:
    case PlayMenu.First5BSOE_PK10:
      parameter.startDigit = _findIndex(contents, (v) => !isNaN(v));
      break;

    case PlayMenu.Last5Fixed_PK10:
    case PlayMenu.Last5BSOE_PK10:
      parameter.startDigit = _findIndex(contents, (v) => !isNaN(v)) + 5;
      break;

    default:
      // do nothing
      break;
  }

  return getPlayMenuNameWithDigit(parameter);
};

/**
 * 產生 投注記錄 / 訂單編號 欄位的顯示內容
 *
 * @param orderNumber 原始訂單編號
 * @param chasing 是否有追號
 * @param chasingOrder 追的第幾期
 *
 * @returns {string} 投注記錄 / 訂單編號 欄位的顯示內容
 */
export const genOrderNumberText = ({ orderNumber = '', chasing = false, chasingOrder = 0 }) => {
  const orderNoText = orderNumber.slice(-6);
  if (chasing) {
    const chaseOrdText = _padStart(chasingOrder, 3, '0');
    return `${orderNoText}-${chaseOrdText}`;
  }
  return orderNoText;
};

/**
 * 產生 投注記錄 / 追號 欄位的顯示內容
 *
 * @param chasing 是否有追號
 * @param chasingOrder 追的第幾期
 * @param chasingPhase 追幾期
 *
 * @returns {string} 投注記錄 / 追號 欄位的顯示內容
 */
export const genChasingOrderText = ({ chasing, chasingOrder, chasingPhase }) => {
  if (chasing) {
    if (chasingOrder === 1) { // 第一期
      return i18n('chasingPhaseAmount', chasingPhase);
    }
    return i18n('chasingChildOrder');
  }
  return '-';
};

/**
 * 產生 訂單詳情 / 投注內容 欄位的顯示內容
 *
 * @param playId 玩法ID
 * @param bettingContent 投注原始內容
 *
 * @returns {string} 訂單詳情 / 投注內容 欄位的顯示內容
 */
export const genBallContentText = ({ playId, bettingContent }) => {
  const displayType = _find(ballContentSpecialDisplayType, (type) => (type.items.indexOf(playId) > -1));
  if (displayType) {
    return displayType.getText(bettingContent.replace(/,/g, ''));
  }
  return bettingContent;
};


export default {
  getPlayMenuNameWithDigit,
  getPlayName,
  genBallContentText,
  i18n:i18n3,
  lang
};
