import _find from 'lodash/find';
import _sortBy from 'lodash/sortBy';
import _compact from 'lodash/compact';
import { PlayMenu } from '../configs/basic_play_menu';
import { i18n } from './i18n-key-finder';

const BALL_BSOE_KEY = ['big', 'small', 'odd', 'even'];
const SSC_DIGIT_KEY = ['tenThousands2', 'thousands2', 'hundreds2', 'tens2', 'ones2'];
const LHC_KEY = {
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
  // 牛牛大小單雙
  NNBSOE: ['NNBig', 'NNSmall', 'NNOdd', 'NNEven'],
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

const HK5_KEY = {
  '01': 'fiveOfAKind',
  '02': 'fourOfAKind',
  '03': 'fullHouse',
  '04': 'straight',
  '05': 'treeOfAKind',
  '06': 'twoPair',
  '07': 'onePair',
  '08': 'highCard',
};

const PCB_KEY = {
  BS_OE: {
    '02': 'bigOdd',
    '03': 'bigEven',
    12: 'smallOdd',
    13: 'smallEven',
  },

  Extremum_BS: {
    0: 'extremumBig',
    1: 'extremumSmall',
  },

  Color: {
    1: 'colorStraightRed',
    2: 'colorStraightBlue',
    3: 'colorStraightGreen',
  },
};

const _11X5_KEY = {
  Total_Sum_Group: ['twoSideSumGroupBig', 'twoSideSumGroupSmall', 'twoSideSumGroupOdd', 'twoSideSumGroupEven', 'twoSideSumGroupTailBig', 'twoSideSumGroupTailSmall'],
  Dragon_Tiger: ['specialTiger', 'specialDragon'],
};

// SSC 龍虎和
const getDragonTigerTie = (val) => {
  switch (val) {
    case '1':
      return i18n('ball.dragonTigerTie.dragon');
    case '12':
      return i18n('ball.dragonTigerTie.dragonOdd');
    case '13':
      return i18n('ball.dragonTigerTie.dragonEven');
    case '0':
      return i18n('ball.dragonTigerTie.tiger');
    case '02':
      return i18n('ball.dragonTigerTie.tigerOdd');
    case '03':
      return i18n('ball.dragonTigerTie.tigerEven');
    case '2':
      return i18n('ball.dragonTigerTie.tie');
    default:
      return '';
  }
};


const LHCTranslator = {
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

      // SSC 娛樂城
      PlayMenu.Combine_First_Straight_ENT,
      PlayMenu.Combine_Second_Straight_ENT,
      PlayMenu.Combine_Third_Straight_ENT,
      PlayMenu.Combine_Fourth_Straight_ENT,
      PlayMenu.Combine_Fifth_Straight_ENT,

      PlayMenu.First_Straight_ENT,
      PlayMenu.Second_Straight_ENT,
      PlayMenu.Third_Straight_ENT,
      PlayMenu.Fourth_Straight_ENT,
      PlayMenu.Fifth_Straight_ENT,

      PlayMenu.Five_Have_One_Straight_ENT,
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
    getText: (content) => i18n(`playKey.${LHC_KEY.BSOE[content]}`),
  },
  // 特(大小)(單雙)
  BS_OE_LHC: {
    items: [
      // 特碼A,B
      PlayMenu.SpecialA_BS_OE_LHC,
      PlayMenu.SpecialB_BS_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.BS_OE[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.BALL_TOSUM_BSOE_KEY[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.TAIL_BS_KEY[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.SPECIAL_ZODIAC[content]}`),
  },
  // 特總和大小單雙
  TOTAL_SUM_BSOE_LHC: {
    items: [
      // 兩面
      PlayMenu.Two_Sides_Total_Sum_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.TOTAL_SUM_BSOE[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.COLOR_BALL[content]}`),
  },
  // 色波大小單雙
  COLOR_BSOE_LHC: {
    items: [
      // 半波
      PlayMenu.Color_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.COLOR_BSOE[content]}`),
  },
  // 色波(大小)(單雙)
  COLOR_BS_OE_LHC: {
    items: [
      // 半半波
      PlayMenu.Color_BS_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.COLOR_BS_OE[content]}`),
  },
  // 特肖
  ZODIAC_LHC: {
    items: [
      // 特肖
      PlayMenu.Special_Zodiac_Straight_LHC,

      // 平特一肖
      PlayMenu.Normal_Special_One_Zodiac_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.ZODIAC[content]}`),
  },
  // 頭尾數
  HEAD_TAIL_LHC: {
    items: [
      // 頭尾數
      PlayMenu.Head_Tail_Special_LHC,

      // 平特尾數
      PlayMenu.Normal_Special_Tail_No_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.HEAD_TAIL[content]}`),
  },
  // 合肖
  COMBINE_ZODIAC_LHC: {
    items: [
      // 合肖
      PlayMenu.Special_Combine_Chinese_Zodiac_LHC,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${i18n(`playKey.${LHC_KEY.ZODIAC[parseInt(val)]}`)}`), ''),
  },
  // 總大小單雙
  SUM_BSOE_LHC: {
    items: [
      // 總大小單雙
      PlayMenu.Normal_Total_BSOE_LHC,

      // SSC ENT
      PlayMenu.Combine_Total_Sum_ENT,
      PlayMenu.Two_Side_Total_Sum_BSOE_ENT,
      PlayMenu.First_Total_Sum_ENT,
      PlayMenu.Second_Total_Sum_ENT,
      PlayMenu.Third_Total_Sum_ENT,
      PlayMenu.Fourth_Total_Sum_ENT,
      PlayMenu.Fifth_Total_Sum_ENT,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.SUM_BSOE[content]}`),
  },
  /* 正碼特 */
  // 正一大小單雙
  FIRST_FIXED_BSOE_LHC: {
    items: [
      // 正一大小單雙
      PlayMenu.Fixed_First_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.FIRST[content]}`),
  },
  // 正二大小單雙
  SECOND_FIXED_BSOE_LHC: {
    items: [
      // 正二大小單雙
      PlayMenu.Fixed_Second_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.SECOND[content]}`),
  },
  // 正三大小單雙
  THIRD_FIXED_BSOE_LHC: {
    items: [
      // 正三大小單雙
      PlayMenu.Fixed_Third_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.THIRD[content]}`),
  },
  // 正四大小單雙
  FOURTH_FIXED_BSOE_LHC: {
    items: [
      // 正四大小單雙
      PlayMenu.Fixed_Fourth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.FOURTH[content]}`),
  },
  // 正五大小單雙
  FIFTH_FIXED_BSOE_LHC: {
    items: [
      // 正五大小單雙
      PlayMenu.Fixed_Fifth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.FIFTH[content]}`),
  },
  // 正六大小單雙
  SIXTH_FIXED_BSOE_LHC: {
    items: [
      // 正六大小單雙
      PlayMenu.Fixed_Sixth_BSOE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.SIXTH[content]}`),
  },

  /* 正碼特合單雙 */
  // 正一合單雙
  FIRST_FIXED_TOSum_OE_LHC: {
    items: [
      // 正一合單雙
      PlayMenu.Fixed_First_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.FIRST[content]}`),
  },
  // 正二合單雙
  SECOND_FIXED_TOSum_OE_LHC: {
    items: [
      // 正二合單雙
      PlayMenu.Fixed_Second_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.SECOND[content]}`),
  },
  // 正三合單雙
  THIRD_FIXED_TOSum_OE_LHC: {
    items: [
      // 正三合單雙
      PlayMenu.Fixed_Third_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.THIRD[content]}`),
  },
  // 正四合單雙
  FOURTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正四合單雙
      PlayMenu.Fixed_Fourth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.FOURTH[content]}`),
  },
  // 正五合單雙
  FIFTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正五合單雙
      PlayMenu.Fixed_Fifth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.FIFTH[content]}`),
  },
  // 正六合單雙
  SIXTH_FIXED_TOSum_OE_LHC: {
    items: [
      // 正六合單雙
      PlayMenu.Fixed_Sixth_TOSum_OE_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_TOSum_OE.SIXTH[content]}`),
  },

  /* 正碼特紅藍綠 */
  // 正一紅藍綠
  FIRST_FIXED_COLOR_LHC: {
    items: [
      // 正一紅藍綠
      PlayMenu.Fixed_First_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.FIRST[content]}`),
  },
  // 正二紅藍綠
  SECOND_FIXED_COLOR_LHC: {
    items: [
      // 正二紅藍綠
      PlayMenu.Fixed_Second_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.SECOND[content]}`),
  },
  // 正三紅藍綠
  THIRD_FIXED_COLOR_LHC: {
    items: [
      // 正三紅藍綠
      PlayMenu.Fixed_Third_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.THIRD[content]}`),
  },
  // 正四紅藍綠
  FOURTH_FIXED_COLOR_LHC: {
    items: [
      // 正四紅藍綠
      PlayMenu.Fixed_Fourth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.FOURTH[content]}`),
  },
  // 正五紅藍綠
  FIFTH_FIXED_COLOR_LHC: {
    items: [
      // 正五紅藍綠
      PlayMenu.Fixed_Fifth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.FIFTH[content]}`),
  },
  // 正六紅藍綠
  SIXTH_FIXED_COLOR_LHC: {
    items: [
      // 正六紅藍綠
      PlayMenu.Fixed_Sixth_Color_LHC,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_Color.SIXTH[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.NORMAL_BSOE[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.TOSum_BSOE[content]}`),
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
    getText: (content) => i18n(`playKey.${LHC_KEY.Tail_BS[content]}`),
  },

};

const PK10Translator = {
  BALL_NUMBER_PK10: {
    items: [
      PlayMenu.First5Fixed_PK10,
      PlayMenu.Last5Fixed_PK10,
      PlayMenu.FirstPlace_PK10,
      PlayMenu.SecondPlace_PK10,
      PlayMenu.ThirdPlace_PK10,
      PlayMenu.FourthPlace_PK10,
      PlayMenu.FifthPlace_PK10,
      PlayMenu.SixthPlace_PK10,
      PlayMenu.SeventhPlace_PK10,
      PlayMenu.EighthPlace_PK10,
      PlayMenu.NinthPlace_PK10,
      PlayMenu.TenthPlace_PK10,

    ],
    getText: (content) => content.split('-').reduce((result, val) =>
    (`${result}${result ? ' ' : ''}${val}`), ''),
  },

  // ,,,01234,01234 => 01234 | 01234
  NUMBER_WITH_HYPHEN: {
    items: [
      PlayMenu.First1_PK10,
      PlayMenu.First2_PK10,
      PlayMenu.First3_PK10,
      PlayMenu.First4_PK10,
      PlayMenu.First5_PK10,
    ],
    getText: (content) => content.split(',').reduce((result, val) =>
      (`${result}${result && val ? ' | ' : ' '}${val}`), '').replace(/-/g, ' '),
  },

  // 和值
  Sum_PK10: {
    items: [
      PlayMenu.First2Sum_PK10,
      PlayMenu.First3Sum_PK10,
      PlayMenu.FirstLastSum_PK10,
    ],
    getText: (content) => content.split(',').reduce((result, val) =>
      (`${result}${result && val ? ' | ' : ''}${val}`), ''),
  },
};

const PCBTranslator = {
  // 特碼
  BALL_NUMBER_PCB: {
    items: [
      PlayMenu.SpecialSum_PCB,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${val}`), ''),
  },

  // 组合大小單雙
  BS_OE_PCB: {
    items: [
      PlayMenu.Special_BS_OE_PCB,
    ],
    getText: (content) => i18n(`playKey.${PCB_KEY.BS_OE[content]}`),
  },

    // 极值
  Extremum_BS_PCB: {
    items: [
      PlayMenu.Special_Extremum_BS_PCB,
    ],
    getText: (content) => i18n(`playKey.${PCB_KEY.Extremum_BS[content]}`),
  },

    // 色波
  Color_PCB: {
    items: [
      PlayMenu.Color_PCB,
    ],
    getText: (content) => i18n(`playKey.${PCB_KEY.Color[content]}`),
  },

    // 豹子
  Boazi_PCB: {
    items: [
      PlayMenu.Boazi_PCB,
    ],
    getText: () => i18n('playKey.baozi'),
  },

    // 特碼包三
  SpecialCom3_PCB: {
    items: [
      PlayMenu.SpecialCom3_PCB,
    ],
    getText: (content) => content.split(',').reduce((result, val) =>
      (`${result}${result ? ' ' : ''}${val}`), ''),
  },
};

const K3Translator = {
    // 和值
  BALL_NUMBER_K3: {
    items: [
      // 傳統
      PlayMenu.Sum_K3,
      // 娛樂城
      PlayMenu.Sum_K3_ENT,
      PlayMenu.Single_Same_K3_ENT,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${val}`), ''),
  },

  SINGLE_SAME_3_K3: {
    items: [
      PlayMenu.Single_Same_3_K3,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? '  ' : ''}${val}${val}${val}`), ''),
  },

  MULTI_BALL_NUMBER_K3: {
    items: [
      PlayMenu.Different_3_K3,
      PlayMenu.Different_2_K3,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? ' ' : ''}${val}`), ''),
  },

  SINGLE_SAME_2_K3: {
    items: [
      PlayMenu.Single_Same_2_K3,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? `${result} | ` : ''}${val}`), ''),
  },

  MULTI_SAME_2_K3: {
    items: [
      PlayMenu.Multi_Same_2_K3,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? '  ' : ''}${val}${val}`), ''),
  },

  ALL_SAME_3_K3: {
    items: [
      PlayMenu.All_Same_3_K3,
    ],
    getText: () => i18n('playKey.allThreeSame'),
  },

  ALL_EVEN_3_K3: {
    items: [
      PlayMenu.All_Even_3_K3,
    ],
    getText: () => i18n('playKey.allThreeEven'),
  },

  BOAZI: {
    items: [
      PlayMenu.Boazi_K3_ENT,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? ' ' : ''}${val} | ${val} | ${val}`), ''),
  },

  ANY_BOAZI: {
    items: [
      PlayMenu.Any_Boazi_K3_ENT,
    ],
    getText: () => i18n('playKey.any_Boazi'),
  },

  Different_2_K3_ENT: {
    items: [
      PlayMenu.Different_2_K3_ENT,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${val}`), ''),
  },

  Single_Same_2_K3_ENT: {
    items: [
      PlayMenu.Single_Same_2_K3_ENT,
    ],
    getText: (content) => content.split('').reduce((result, val) =>
      (`${result}${result ? ' ' : ''}${val} | ${val}`), ''),
  },
};

const _11X5Translator = {
  Two_Side_Total_Sum_Group: {
    items: [
      PlayMenu.Two_Side_Total_Sum_Group_11X5_ENT,
    ],
    getText: (content) => i18n(`playKey.${_11X5_KEY.Total_Sum_Group[content]}`),
  },

  Ball_Number_11X5: {
    items: [
      PlayMenu.First_11X5_ENT,
      PlayMenu.Second_11X5_ENT,
      PlayMenu.Third_11X5_ENT,
      PlayMenu.Fourth_11X5_ENT,
      PlayMenu.Fifth_11X5_ENT,
      PlayMenu.Any1_11X5_ENT,
      PlayMenu.Any2_11X5_ENT,
      PlayMenu.Any3_11X5_ENT,
      PlayMenu.Any4_11X5_ENT,
      PlayMenu.Any5_11X5_ENT,
      PlayMenu.Any6_11X5_ENT,
      PlayMenu.Any7_11X5_ENT,
      PlayMenu.Any8_11X5_ENT,
    ],
    getText: (content) => content.split('-').reduce((result, val) =>
            (`${result}${result ? ' | ' : ''}${val}`), ''),
  },

  Com_11X5: {
    items: [
      PlayMenu.First2_Com_11X5_ENT,
      PlayMenu.First3_Com_11X5_ENT,
    ],
    getText: (content) => content.split('_').reduce((result, val) =>
        (`${result}${result ? ' | ' : ''}${val}`), ''),
  },

  Straight_11X5: {
    items: [
      PlayMenu.First2_Straight_11X5_ENT,
      PlayMenu.First3_Straight_11X5_ENT,
    ],
    getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result && val ? ' | ' : ''}${val}`), ''),
  },

  Dragon_Tiger: {
    items: [
      PlayMenu.Dragon_Tiger_5_4_11X5_ENT,
      PlayMenu.Dragon_Tiger_5_3_11X5_ENT,
      PlayMenu.Dragon_Tiger_5_2_11X5_ENT,
      PlayMenu.Dragon_Tiger_5_1_11X5_ENT,
      PlayMenu.Dragon_Tiger_4_3_11X5_ENT,
      PlayMenu.Dragon_Tiger_4_2_11X5_ENT,
      PlayMenu.Dragon_Tiger_4_1_11X5_ENT,
      PlayMenu.Dragon_Tiger_3_2_11X5_ENT,
      PlayMenu.Dragon_Tiger_3_1_11X5_ENT,
      PlayMenu.Dragon_Tiger_2_1_11X5_ENT,
    ],
    getText: (content) => i18n(`playKey.${_11X5_KEY.Dragon_Tiger[content]}`),
  },
};

const SSCTranslator = {
  Ball_Number: {
    items: [
      PlayMenu.FixedPlace,
      PlayMenu.Last2Straight,
      PlayMenu.First2Straight,
      PlayMenu.Last3Straight,
      PlayMenu.Middle3Straight,
      PlayMenu.First3Straight,
      PlayMenu.Last3Join,
      PlayMenu.Middle3Join,
      PlayMenu.First3Join,
      PlayMenu.Last3StraightCom,
      PlayMenu.Middle3StraightCom,
      PlayMenu.First3StraightCom,
      PlayMenu.Last3Sum,
      PlayMenu.Middle3Sum,
      PlayMenu.First3Sum,
      PlayMenu.First3Com3,
      PlayMenu.Middle3Com3,
      PlayMenu.Last3Com3,
      PlayMenu.First3Com6,
      PlayMenu.Middle3Com6,
      PlayMenu.Last3Com6,
      PlayMenu.Last3Com,
      PlayMenu.Middle3Com,
      PlayMenu.First3Com,
      PlayMenu.Last4Straight,
      PlayMenu.First4Straight,
      PlayMenu.Last4Join,
      PlayMenu.First4Join,
      PlayMenu.L4Com24,
      PlayMenu.L4Com12,
      PlayMenu.L4Com6,
      PlayMenu.L4Com4,
      PlayMenu.F4Com24,
      PlayMenu.F4Com12,
      PlayMenu.F4Com6,
      PlayMenu.F4Com4,
      PlayMenu.AllCom120,
      PlayMenu.AllCom60,
      PlayMenu.AllCom30,
      PlayMenu.AllCom20,
      PlayMenu.AllCom10,
      PlayMenu.AllCom5,
      PlayMenu.Last2Join,
      PlayMenu.First2Join,
      PlayMenu.Last2Com,
      PlayMenu.First2Com,
      PlayMenu.Last2Sum,
      PlayMenu.First2Sum,
      PlayMenu.AllStraightAnyCode1_SSC,
      PlayMenu.AllStraightAnyCode2_SSC,
      PlayMenu.AllStraightAnyCode3_SSC,
      PlayMenu.Last4StraightAnyCode1_SSC,
      PlayMenu.Last4StraightAnyCode2_SSC,
      PlayMenu.First3StraightAnyCode1,
      PlayMenu.First3StraightAnyCode2,
      PlayMenu.Middle3StraightAnyCode1,
      PlayMenu.Middle3StraightAnyCode2,
      PlayMenu.Last3StraightAnyCode1,
      PlayMenu.Last3StraightAnyCode2,
      PlayMenu.First2StraightAnyCode,
      PlayMenu.Last2StraightAnyCode,
      PlayMenu.First3ComAnyCode1,
      PlayMenu.First3ComAnyCode2,
      PlayMenu.Middle3ComAnyCode1,
      PlayMenu.Middle3ComAnyCode2,
      PlayMenu.Last3ComAnyCode1,
      PlayMenu.Last3ComAnyCode2,
      PlayMenu.First2ComAnyCode,
      PlayMenu.Last2ComAnyCode,
      PlayMenu.AnyShow1_SSC,
      PlayMenu.AnyShow2_SSC,
      PlayMenu.AnyShow3_SSC,
      PlayMenu.AnyShow4_SSC,
      PlayMenu.Last1Straight,
      PlayMenu.FixedPlace_Last_4,
      PlayMenu.FixedPlace_Last_3,
      PlayMenu.FixedPlace_Last_2,
      PlayMenu.FixedPlace_Last_1,
      PlayMenu.anyComChoose2,
      PlayMenu.anyComChoose3,
    ],
    getText: (content) => content.split(',').reduce((result, val) =>
      (`${result}${result && val ? ' | ' : ''}${val}`), ''),
  },

  Ball_Number_With_Space: {
    items: [
      PlayMenu.Last2Straight_Single,
      PlayMenu.First2Straight_Single,
      PlayMenu.Last3Straight_Single,
      PlayMenu.Middle3Straight_Single,
      PlayMenu.First3Straight_Single,
      PlayMenu.Last3Join_Single,
      PlayMenu.Middle3Join_Single,
      PlayMenu.First3Join_Single,
      PlayMenu.Last4Straight_Single,
      PlayMenu.First4Straight_Single,
      PlayMenu.Last4Join_Single,
      PlayMenu.First4Join_Single,
      PlayMenu.Last2Join_Single,
      PlayMenu.First2Join_Single,
    ],
    getText: (content) => content.split('|').reduce((result, val) =>
      (`${result}${result && val ? ' | ' : ''}${val}`), ''),
  },
};

const SSCNNTranslator = {
  NN_NUMBER: {
    items: [
      PlayMenu.NN_SSC_ENT,
    ],
    getText: (content) => i18n(`playKey.nn${parseInt(content)}`),
  },
  NN_HAS: {
    items: [
      PlayMenu.NN_HAS_SSC_ENT,
    ],
    getText: (content) => i18n(`playKey.nnHas${content}`),
  },
  NN_BSOE: {
    items: [
      PlayMenu.NN_SSC_BSOE_ENT,
    ],
    getText: (content) => i18n(`playKey.${LHC_KEY.NNBSOE[content]}`),
  },
};
const SSCHK5Translator = {
  // 组合大小單雙
  HK5: {
    items: [
      PlayMenu.HK5_SSC_ENT,
    ],
    getText: (content) => i18n(`playKey.${HK5_KEY[content]}`),
  },
};

// 訂單詳情 / 投注內容 欄位需特殊處理的項目及處理方法
const OrderInfoTranslatorList = {
  BSOE: {
    items: [
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
      PlayMenu.Second_BSOE_ENT,
      PlayMenu.Third_BSOE_ENT,
      PlayMenu.Fourth_BSOE_ENT,
      PlayMenu.Fifth_BSOE_ENT,
      PlayMenu.Two_Side_First_BSOE_ENT,
      PlayMenu.Two_Side_Second_BSOE_ENT,
      PlayMenu.Two_Side_Third_BSOE_ENT,
      PlayMenu.Two_Side_Fourth_BSOE_ENT,
      PlayMenu.Two_Side_Fifth_BSOE_ENT,
      PlayMenu.Combine_First_BSOE_ENT,
      PlayMenu.Combine_Second_BSOE_ENT,
      PlayMenu.Combine_Third_BSOE_ENT,
      PlayMenu.Combine_Fourth_BSOE_ENT,
      PlayMenu.Combine_Fifth_BSOE_ENT,
      // PK10
      PlayMenu.Two_Side_First2SumBSOE_PK10,
      PlayMenu.Two_Side_FirstPlace_PK10,
      PlayMenu.Two_Side_SecondPlace_PK10,
      PlayMenu.Two_Side_ThirdPlace_PK10,
      PlayMenu.Two_Side_FourthPlace_PK10,
      PlayMenu.Two_Side_FifthPlace_PK10,
      PlayMenu.Two_Side_SixthPlace_PK10,
      PlayMenu.Two_Side_SeventhPlace_PK10,
      PlayMenu.Two_Side_EighthPlace_PK10,
      PlayMenu.Two_Side_NinthPlace_PK10,
      PlayMenu.Two_Side_TenthPlace_PK10,

      // PK10
      PlayMenu.First5BSOE_PK10,
      PlayMenu.Last5BSOE_PK10,
      PlayMenu.First2SumBSOE_PK10,
      // PCB28
      PlayMenu.SpecialBSOE_PCB,
      // K3
      PlayMenu.Sum_BS_OE_K3,
      PlayMenu.Sum_BS_OE_K3_ENT,
      // 11X5
      PlayMenu.Two_Side_First_BSOE_11X5_ENT,
      PlayMenu.Two_Side_Second_BSOE_11X5_ENT,
      PlayMenu.Two_Side_Third_BSOE_11X5_ENT,
      PlayMenu.Two_Side_Fourth_BSOE_11X5_ENT,
      PlayMenu.Two_Side_Fifth_BSOE_11X5_ENT,
      PlayMenu.First_BSOE_11X5_ENT,
      PlayMenu.Second_BSOE_11X5_ENT,
      PlayMenu.Third_BSOE_11X5_ENT,
      PlayMenu.Fourth_BSOE_11X5_ENT,
      PlayMenu.Fifth_BSOE_11X5_ENT,
    ],
    getText: (content) =>
      content.split('_').reduce((result, val) => (`${result}${result ? ' | ' : ''}${i18n(`ball.BSOE.${BALL_BSOE_KEY[parseInt(val)]}`)}`), ''),
  },

  // ,,,0123,13 => 大小單雙 | 小雙
  COM_BSOE: {
    items: [
      PlayMenu.First2BSOE,
      PlayMenu.Last2BSOE,
    ],
    getText: (content) => content.split(',').reduce((result, val) => {
      const orderInfo = (vals) => {
        if (vals === '') {
          return '';
        }
        return vals.split('').sort().map((num) => (i18n(`ball.BSOE.${BALL_BSOE_KEY[num]}`))).join(' ');
      };
      return (`${result}${result && val ? ' | ' : ''}${orderInfo(val)}`);
    }, ''),

  },

  DRAGON_TIGER: {
    items: [
      PlayMenu.Dragon_Tiger_1_VS_10,
      PlayMenu.Dragon_Tiger_2_VS_9,
      PlayMenu.Dragon_Tiger_3_VS_8,
      PlayMenu.Dragon_Tiger_4_VS_7,
      PlayMenu.Dragon_Tiger_5_VS_6,
      PlayMenu.Dragon_Tiger_1_VS_10,
      PlayMenu.Dragon_Tiger_2_VS_9,
      PlayMenu.Dragon_Tiger_3_VS_8,
      PlayMenu.Dragon_Tiger_4_VS_7,
      PlayMenu.Dragon_Tiger_5_VS_6,
      // 娛樂城PK10 龍虎鬥
      PlayMenu.Dragon_Tiger_1_VS_10_PK10,
      PlayMenu.Dragon_Tiger_2_VS_9_PK10,
      PlayMenu.Dragon_Tiger_3_VS_8_PK10,
      PlayMenu.Dragon_Tiger_4_VS_7_PK10,
      PlayMenu.Dragon_Tiger_5_VS_6_PK10,
      PlayMenu.Two_Side_FirstPlace_Dragon_PK10,
      PlayMenu.Two_Side_SecondPlace_Dragon_PK10,
      PlayMenu.Two_Side_ThirdPlace_Dragon_PK10,
      PlayMenu.Two_Side_FourthPlace_Dragon_PK10,
      PlayMenu.Two_Side_FifthPlace_Dragon_PK10,
    ],
    getText: (content) => i18n(`ball.dragonTiger.${content === '1' ? 'dragon' : 'tiger'}`),
  },
  DRAGON_TIGER_TIE_ENT: {
    items: [
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
    getText: (content) => getDragonTigerTie(content),
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
    ],
    getText: (content) =>
      content.split('|').reduce((result, val) => (`${result}${result && val ? ' | ' : ''}${getDragonTigerTie(val)}`), ''),
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
    getText: (content, originalContent) => {
      const contentArr = originalContent.split('@');

      const digitPosArr = _sortBy(contentArr[0].split(''));
      const digitPosText = digitPosArr.reduce((finalText, digitPos) => {
        const index = parseInt(digitPos) - 1;
        return `${finalText}${i18n(`startDigit.${SSC_DIGIT_KEY[index]}`)}`;
      }, '');

      const ballTextArray = _compact(contentArr[1].split(','));
      return `(${digitPosText}) ${ballTextArray.join(' | ')}`;
    },
  },
  ...PK10Translator,
  ...LHCTranslator,
  ...PCBTranslator,
  ...K3Translator,
  ..._11X5Translator,
  ...SSCTranslator,
  ...SSCNNTranslator,
  ...SSCHK5Translator,
};

const commaConfig = {
  items: [
    PlayMenu.SpecialCom3_PCB,
    PlayMenu.First2_Straight_11X5_ENT,
    PlayMenu.First3_Straight_11X5_ENT,
    PlayMenu.Last2Straight,
    PlayMenu.First2Straight,
    PlayMenu.Last3Straight,
    PlayMenu.Middle3Straight,
    PlayMenu.First3Straight,
    PlayMenu.Last3Join,
    PlayMenu.Middle3Join,
    PlayMenu.First3Join,
    PlayMenu.Last4Straight,
    PlayMenu.First4Straight,
    PlayMenu.Last4Join,
    PlayMenu.First4Join,
    PlayMenu.L4Com12,
    PlayMenu.L4Com4,
    PlayMenu.F4Com12,
    PlayMenu.F4Com4,
    PlayMenu.AllCom60,
    PlayMenu.AllCom30,
    PlayMenu.AllCom20,
    PlayMenu.AllCom10,
    PlayMenu.AllCom5,
    PlayMenu.Last2Join,
    PlayMenu.First2Join,
    PlayMenu.AllStraightAnyCode2_SSC,
    PlayMenu.AllStraightAnyCode3_SSC,
    PlayMenu.Last4StraightAnyCode2_SSC,
    PlayMenu.First3StraightAnyCode2,
    PlayMenu.Middle3StraightAnyCode2,
    PlayMenu.Last3StraightAnyCode2,
    PlayMenu.First3ComAnyCode2,
    PlayMenu.Middle3ComAnyCode2,
    PlayMenu.Last3ComAnyCode2,
    PlayMenu.First1_PK10,
    PlayMenu.First2_PK10,
    PlayMenu.First3_PK10,
    PlayMenu.First4_PK10,
    PlayMenu.First5_PK10,
    PlayMenu.First2BSOE,
    PlayMenu.Last2BSOE,
  ],
};

const OrderInfoTranslator = {

  getText: (playId, bettingContent) => {
    const translator = _find(OrderInfoTranslatorList, (type) => (type.items.indexOf(playId) > -1));
    const noFilter = _find(commaConfig, (type) => (type.indexOf(playId) > -1));
    if (translator) {
      if (noFilter) {
        return translator.getText(bettingContent);
      }
      return translator.getText(bettingContent.replace(/,/g, ''), bettingContent);
    }
    return bettingContent;
  },
};

export default OrderInfoTranslator;
