import _find from 'lodash/find';
import _sortBy from 'lodash/sortBy';
import _compact from 'lodash/compact';
import { PlayMenu } from '../configs/basic_play_menu';
import { i18nWithLang } from './i18n-key-finder';

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
    PlayMenu.Any2_Straight_4D,
    PlayMenu.Any3_Straight_4D,
    PlayMenu.Any4_Straight_4D,
    PlayMenu.Any2_Dantuo_11X5,
    PlayMenu.Any3_Dantuo_11X5,
    PlayMenu.Any4_Dantuo_11X5,
    PlayMenu.Any5_Dantuo_11X5,
    PlayMenu.Any6_Dantuo_11X5,
    PlayMenu.Any7_Dantuo_11X5,
    PlayMenu.Any8_Dantuo_11X5,

    PlayMenu.Dragon_Tiger_Main_PK10,
    PlayMenu.First_To_Tenth_Guess_Rank_VPK10,
    PlayMenu.First_To_Tenth_BSOE_VPK10,

    // PCSO
    PlayMenu.LOTTO_SYSTEM_5,
    PlayMenu.MEGA_SYSTEM_5,
    PlayMenu.SUPER_SYSTEM_5,
    PlayMenu.GRAND_SYSTEM_5,
    PlayMenu.ULTRA_SYSTEM_5,

    // Marble SEA PK10 
    PlayMenu.SEA_PK10_RANK,
    PlayMenu.SEA_PK10_BS,
    PlayMenu.SEA_PK10_OE,
  ],
};

function getOrderInfoTranslatorList(lang) {
  const i18n = (...args) => i18nWithLang(lang, ...args);
  const BALL_BSOE_KEY = ['big', 'small', 'odd', 'even'];
  const BALL_PC_KEY = ['prime', 'composite'];
  const SSC_DIGIT_KEY = ['tenThousands2', 'thousands2', 'hundreds2', 'tens2', 'ones2'];
  const KENO_KEY = {
    FUN:{
      0: 'big',
      1: 'small',
      2: 'sumOdd',
      3: 'sumEven',
      4: 'sum',
      5: 'bigSumOdd',
      6: 'bigSumEven',
      7: 'smallSumOdd',
      8: 'smallSumEven',
      9: 'up',
      10: 'down',
      11: 'middle',
      12: 'ballOdd',
      13: 'ballEven',
      14: 'equal',
      15: 'gold',
      16: 'wood',
      17: 'water',
      18: 'fire',
      19: 'earth',
    }
  }
  const WINGO_KEY = {
    COLOR: {
      0: 'red',
      1: 'green',
      2: 'purple',
      3: 'binaryColor',
    },
    BS: {
      0: 'big',
      1: 'small',
    }
  }

  const LOTTO_5D_KEY = {
    BSOE: {
      0: 'big',
      1: 'small',
      2: 'odd',
      3: 'even',
    }
  }

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

  const BACCARAT_KEY = ['banker', 'player', 'tie', 'bankerPair', 'playerPair'];

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

  const SSC_SPECIAL_KEY = {
    0: 'baozi',
    1: 'straight',
    2: 'pair',
    3: 'zu6',
    4: 'halfStraight',
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
    Total_Sum_Group: [
      'twoSideSumGroupBig', 'twoSideSumGroupSmall', 'twoSideSumGroupOdd',
      'twoSideSumGroupEven', 'twoSideSumGroupTailBig', 'twoSideSumGroupTailSmall',
    ],
    Dragon_Tiger: ['specialTiger', 'specialDragon'],
  };

  const K3_KEY = {
    COMBALL_BSOE: {
      '02': 'bigOdd',
      '03': 'bigEven',
      12: 'smallOdd',
      13: 'smallEven',
    },
  };


  const FISH_PRAWN_CRAB_KEY = {
    0: 'fish',
    1: 'prawn',
    2: 'crab',
  };

  const VBC = {
    1: 'fish',
    2: 'prawn',
    3: 'gourd',
    4: 'stag',
    5: 'crab',
    6: 'rooster',
  }

  const BCR = {
    B_P_T: {
      0: 'banker_no_charge',
      1: 'banker_charge',
      2: 'player',
      3: 'tie',
    },
    B_Pair: {
      1: 'banker_pair',
    },
    P_Pair: {
      1: 'player_pair',
    },
    Super_Six: {
      1: 'super_six',
    }
  }

  const VXD = {
    '4R_Main_VXD': {
      1: 'allRed',
    },
    '4W_Main_VXD': {
      1: 'allWhite',
    },
    '3W1R_Main_VXD': {
      1: 'threeWoneR',
    },
    '3R1W_Main_VXD': {
      1: 'threeRoneW',
    },
  }

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

  const getDigitOrderContent = (originalContent) => {
    const contentArr = originalContent.split('@');

    const digitPosArr = _sortBy(contentArr[0].split(''));
    const digitPosText = digitPosArr.reduce((finalText, digitPos) => {
      const index = parseInt(digitPos) - 1;
      return `${finalText}${i18n(`startDigit.${SSC_DIGIT_KEY[index]}`)}`;
    }, '');

    const ballTextArray = _compact(contentArr[1].split(','));
    return { digitPosText, ballTextArray };
  };

  const getSpecialBallContent = (originalContent) => {
    const contentArr = originalContent.split('|');

    for (let a = 0; a < contentArr.length; a += 1) {
      contentArr[a] = i18n(`playKey.${SSC_SPECIAL_KEY[contentArr[a]]}`);
    }

    return contentArr.join('|');
  };

  // VXD
  const VXDTranslator = {
    '4R_Main_VXD': {
      items: [
        PlayMenu.XocDia_4R_Main_VXD
      ],
      getText: (content) => i18n(`vxd.${VXD['4R_Main_VXD'][content]}`),
    },
    '4W_Main_VXD': {
      items: [
        PlayMenu.XocDia_4W_Main_VXD
      ],
      getText: (content) => i18n(`vxd.${VXD['4W_Main_VXD'][content]}`),
    },
    '3W1R_Main_VXD': {
      items: [
        PlayMenu.XocDia_3W1R_Main_VXD
      ],
      getText: (content) => i18n(`vxd.${VXD['3W1R_Main_VXD'][content]}`),
    },
    '3R1W_Main_VXD': {
      items: [
        PlayMenu.XocDia_3R1W_Main_VXD
      ],
      getText: (content) => i18n(`vxd.${VXD['3R1W_Main_VXD'][content]}`),
    },
  };

  // VBC
  const VBCTranslator = {
    'Hoo_Hey_How_VBC': {
      items: [
        PlayMenu.Hoo_Hey_How_Main_VBC
      ],
      getText: (content) => i18n(`vbc.${VBC[content]}`),
    },
  };

  // CLR color game
  const CLRTranslator = {
    'CLR_Main': {
      items: [
        PlayMenu.CLR_Main
      ],
      getText: (content) => i18n(`ball.clr.${content}`),
    },
  };

  // BCR
  const BCRTranslator = {
    'Banker_Player_Tie_Main_BCR': {
      items: [
        PlayMenu.Banker_Player_Tie_Main_BCR,
      ],
      getText: (content) => i18n(`bcr.${BCR.B_P_T[content]}`),
    },
    'Banker_Pair_Main_BCR': {
      items: [
        PlayMenu.Banker_Pair_Main_BCR,
      ],
      getText: (content) => i18n(`bcr.${BCR.B_Pair[content]}`),
    },
    'Player_Pair_Main_BCR': {
      items: [
        PlayMenu.Player_Pair_Main_BCR,
      ],
      getText: (content) => i18n(`bcr.${BCR.P_Pair[content]}`),
    },
    'Super_Six_Main_BCR': {
      items: [
        PlayMenu.Super_Six_Main_BCR,
      ],
      getText: (content) => i18n(`bcr.${BCR.Super_Six[content]}`),
    },
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
        PlayMenu['5_Not_in_Winning_Numbers_LHC'],
        PlayMenu['6_Not_in_Winning_Numbers_LHC'],
        PlayMenu['7_Not_in_Winning_Numbers_LHC'],
        PlayMenu['8_Not_in_Winning_Numbers_LHC'],
        PlayMenu['9_Not_in_Winning_Numbers_LHC'],
        PlayMenu['10_Not_in_Winning_Numbers_LHC'],
        PlayMenu['11_Not_in_Winning_Numbers_LHC'],
        PlayMenu['12_Not_in_Winning_Numbers_LHC'],

        //  連碼
        PlayMenu.Two_In_Normal_LHC,
        PlayMenu.Three_In_Normal_LHC,
        PlayMenu.Four_In_Normal_LHC,
        PlayMenu.Two_Of_Three_In_Normal_LHC,
        PlayMenu.Two_In_Normal_Or_Special_LHC,
        PlayMenu.In_Normal_And_Special_LHC,

        // SSC 娛樂城
        PlayMenu.Combine_First_Straight_ENT,
        PlayMenu.Combine_Second_Straight_ENT,
        PlayMenu.Combine_Third_Straight_ENT,
        PlayMenu.Combine_Fourth_Straight_ENT,
        PlayMenu.Combine_Fifth_Straight_ENT,

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
        PlayMenu.Special_BSOE_LHC,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.BSOE[content]}`),
    },
    // 特(大小)(單雙)
    BS_OE_LHC: {
      items: [
        // 特碼A,B
        PlayMenu.Special_BS_OE_LHC,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.BS_OE[content]}`),
    },
    // 特合大小單雙
    SPECIAL_TOSum_BSOE_LHC: {
      items: [
        // 特碼A,B
        PlayMenu.SpecialA_TOSum_BSOE_LHC,
        // 兩面
        PlayMenu.Special_TOSum_BSOE_LHC,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.BALL_TOSUM_BSOE_KEY[content]}`),
    },
    // 特尾大小
    SPECIAL_Tail_BS_LHC: {
      items: [
        // 特碼A,B
        PlayMenu.SpecialA_Tail_BS_LHC,
        // 兩面
        PlayMenu.Special_Tail_BS_LHC,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.TAIL_BS_KEY[content]}`),
    },
    // 特肖
    SPECIAL_ZODIAC_LHC: {
      items: [
        // 特碼A,B
        PlayMenu.SpecialA_Animal_LHC,
        // 兩面
        PlayMenu.Special_Animal_LHC,
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
        PlayMenu.Fixed_First_Color_LHC,
        PlayMenu.Fixed_Second_Color_LHC,
        PlayMenu.Fixed_Third_Color_LHC,
        PlayMenu.Fixed_Fourth_Color_LHC,
        PlayMenu.Fixed_Fifth_Color_LHC,
        PlayMenu.Fixed_Sixth_Color_LHC,
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
    // 合肖 連肖
    COMBINE_ZODIAC_LHC: {
      items: [
        // 合肖
        PlayMenu.Special_Combine_Chinese_Zodiac_LHC,

        // 連肖
        PlayMenu.Two_Join_Zodiac_LHC,
        PlayMenu.Three_Join_Zodiac_LHC,
        PlayMenu.Four_Join_Zodiac_LHC,
        PlayMenu.Five_Join_Zodiac_LHC,
      ],
      getText: (content) => content.split('-').reduce((result, val) =>
        (`${result}${result ? ' | ' : ''}${i18n(`playKey.${LHC_KEY.ZODIAC[parseInt(val)]}`)}`), ''),
    },
    // 總大小單雙
    SUM_BSOE_LHC: {
      items: [
        // SSC ENT
        PlayMenu.Combine_Total_Sum_ENT,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.SUM_BSOE[content]}`),
    },
    /* 正碼特 */
    // 正四大小單雙
    FOURTH_FIXED_BSOE_LHC: {
      items: [
        // 正四大小單雙
        PlayMenu.Fixed_Fourth_BSOE_LHC,
      ],
      getText: (content) => i18n(`playKey.${LHC_KEY.FIXED_BSOE.FOURTH[content]}`),
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
    // 正碼1-6 大小單雙碼
    NORMAL_BSOE_LHC: {
      items: [
        // 正碼1-6大小單雙
        PlayMenu.Fixed_First_BSOE_LHC,
        PlayMenu.Fixed_Second_BSOE_LHC,
        PlayMenu.Fixed_Third_BSOE_LHC,
        PlayMenu.Fixed_Fourth_BSOE_LHC,
        PlayMenu.Fixed_Fifth_BSOE_LHC,
        PlayMenu.Fixed_Sixth_BSOE_LHC,
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

    FAN_PK10: {
      items: [PlayMenu.Fan_Tan_Fan_PK10],
      getText: (content) => i18n(`ball.fanTanFan.${content.replace('0', '4')}`),
    },

    JIAO_PK10: {
      items: [PlayMenu.Fan_Tan_Jiao_PK10],
      getText: (content) => i18n(`ball.fanTanJiao.${content.replace('0', '4').split('').join('_')}`),
    },

    NIAN_PK10: {
      items: [PlayMenu.Fan_Tan_Nian_PK10],
      getText: (content) => i18n(`ball.fanTanNian.${content.replace('0', '4').split('').join('_')}`),
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
        PlayMenu.BS_OE_WITH_TIE_PCB,
        PlayMenu.BS_OE_ONLY_TIE_PCB,
        PlayMenu.BS_OE_ALL_KILL_PCB,
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
        // 娛樂城
        PlayMenu.Sum_K3_ENT,
        PlayMenu.Single_Same_K3_ENT,
        PlayMenu.Sum_Baozi_Kill_K3_ENT,
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

    ALL_SAME_2_K3: {
      items: [
        PlayMenu.All_Same_2_K3,
      ],
      getText: () => i18n('ball.k3.All_Same_2_K3'),
    },
    All_Different_3_K3: {
      items: [
        PlayMenu.All_Different_3_K3,
      ],
      getText: () => i18n('ball.k3.All_Different_3_K3'),
    },
    // 梭哈-豹子
    Boazi_K3: {
      items: [
        PlayMenu.Boazi_K3,
      ],
      getText: () => i18n('playKey.baozi'),
    },
    // 梭哈-全顺
    Straight_K3: {
      items: [
        PlayMenu.Straight_K3,
      ],
      getText: () => i18n('playKey.straightK3'),
    },
    // 梭哈-对子
    Com_3_K3: {
      items: [
        PlayMenu.Com_3_K3,
      ],
      getText: () => i18n('playKey.pair'),
    },
    // 梭哈-半顺
    Half_Straight_K3: {
      items: [
        PlayMenu.Half_Straight_K3,
      ],
      getText: () => i18n('playKey.halfStraight'),
    },
    // 梭哈-杂三
    Different_SH_3_K3: {
      items: [
        PlayMenu.Different_SH_3_K3,
      ],
      getText: () => i18n('playKey.za3'),
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

   // K3 和值組合大小單雙 (娛樂城)
    SUM_COM_BS_OE_K3_ENT: {
      items: [
        PlayMenu.SUM_COM_BS_OE_K3_ENT,
      ],
      getText: (content) => {
        const val = content.replace(/[,]/g, '');
        if (val.length === 2) {
        // 大單
    return i18n(`ball.comBSOE.${K3_KEY.COMBALL_BSOE[val]}`);
        }
      // 大单 | 大双 | 小单 | 小双
        return val.sort().map((num) => i18n(`ball.comBSOE.${K3_KEY.COMBALL_BSOE[num]}`)).join(' | ');
      },
    },

  // K3 和值組合大小單雙 (官方)
    Sum_Com_BS_OE_K3: {
      items: [
        PlayMenu.Sum_Com_BS_OE_K3,
      ],
      getText: (content) => {
        const val = content.replace(/[,]/g, '');
        if (val.length === 2) {
    // 大單
    return i18n(`ball.comBSOE.${K3_KEY.COMBALL_BSOE[val]}`);
        }
        // 大单 | 大双 | 小单 | 小双
        return val.split('|').sort().map((num) => i18n(`ball.comBSOE.${K3_KEY.COMBALL_BSOE[num]}`)).join(' | ');
      },
    },
    Any_Code_Win_K3: {
      items: [
        PlayMenu.Any_Code_Win_K3,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result ? ' | ' : ''}${val}`), ''),
    },
    Any_Code_Not_Win_K3: {
      items: [
        PlayMenu.Any_Code_Not_Win_K3,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result ? ' | ' : ''}${val}`), ''),
    },
    Any_Code_Not_Win_K3_Ent: {
      items: [
        PlayMenu.Any_Code_Not_Win_K3_Ent,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result ? ' | ' : ''}${val}`), ''),
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
    Red_Black_Num_K3_Ent: {
      items: [
        PlayMenu.Red_Black_Num_K3_Ent,
      ],
      getText: (content) => (i18n(`playKey.num_combine${content}`) || '').split(',')[0],
    },
    Red_Num_Com_K3_Ent: {
      items: [
        PlayMenu.Red_Num_Com_K3_Ent,
      ],
      getText: (content) => (content || '').split(',')[0],
    },
    Black_Num_Com_K3_Ent: {
      items: [
        PlayMenu.Black_Num_Com_K3_Ent,
      ],
      getText: (content) => (content || '').split(',')[0],
    },
    // 跨度
    SPAN_K3: {
      items: [
        PlayMenu.Span_All_K3,
        PlayMenu.Span_All_K3_Ent,
      ],
      getText: (content) => content.split('-').reduce((result, val) =>
      (`${result}${result ? ' | ' : ''}${val}`), ''),
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

    DanTuo_11X5: {
      items: [
        PlayMenu.Any2_Dantuo_11X5,
        PlayMenu.Any3_Dantuo_11X5,
        PlayMenu.Any4_Dantuo_11X5,
        PlayMenu.Any5_Dantuo_11X5,
        PlayMenu.Any6_Dantuo_11X5,
        PlayMenu.Any7_Dantuo_11X5,
        PlayMenu.Any8_Dantuo_11X5,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result && val ? ' | ' : ''}${val}`), ''),
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
        PlayMenu.First2_Baodan_SSC,
        PlayMenu.Last2_Baodan_SSC,
        PlayMenu.First3C_Baodan_SSC,
        PlayMenu.Middle3_Baodan_SSC,
        PlayMenu.Last3_Baodan_SSC,
        PlayMenu.First2_Span_SSC,
        PlayMenu.Last2_Span_SSC,
        PlayMenu.First3C_Span_SSC,
        PlayMenu.Middle3_Span_SSC,
        PlayMenu.Last3_Span_SSC,
        PlayMenu.First4Choose1Any_SSC,
        PlayMenu.First4Choose2Any_SSC,
        PlayMenu.Last4Choose1Any_SSC,
        PlayMenu.Last4Choose2Any_SSC,
        PlayMenu.First3Choose2Any_SSC,
        PlayMenu.Mid3Choose2Any_SSC,
        PlayMenu.Last3Choose2Any_SSC,
        // 猜和值 與 定位膽 playcode與傳統重複..用到的地方暫時hard code
        // 這邊是猜和值
        /*
    First2Sum_PK10: 1885,
    First3Sum_PK10: 1886,
    FirstLastSum_PK10: 1887,
      */
        1885,
        1886,
        1887,
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
    Special_SSC: {
      items: [
        PlayMenu.First3_Special_SSC,
        PlayMenu.First3_Special_3_SSC,
        PlayMenu.Middle3_Special_SSC,
        PlayMenu.Middle3_Special_3_SSC,
        PlayMenu.Last3_Special_SSC,
        PlayMenu.Last3_Special_3_SSC,
      ],
      getText: (content) => getSpecialBallContent(content),
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

  const SSCBaccaratTranslator = {
    Baccarat: {
      items: [
        PlayMenu.Baccarat_With_Pair_SSC_ENT,
        PlayMenu.Baccarat_No_Pair_SSC_ENT,
      ],
      getText: (content) => i18n(`playKey.${BACCARAT_KEY[content]}`),
    },
  };

  // 泰彩 & 越南彩的投注內容
  const THAITranslator = {
    Thai: {
      items: [
        PlayMenu.LAST_3_STRAIGHT_THAI,
        PlayMenu.LAST_3_COMBINE_THAI,
        PlayMenu.LAST_2_STRAIGHT_THAI,
        PlayMenu.LAST_2_COMBINE_THAI,
        PlayMenu['2_STRAIGHT_ADD_THAI'],
        PlayMenu['1_AT_ANY_LAST_3_THAI'],
        PlayMenu.LAST_4_STRAIGHT_1ST_VNC,
        PlayMenu.LAST_4_COMBINE_1ST_VNC,
        PlayMenu.LAST_3_STRAIGHT_1ST_VNC,
        PlayMenu.LAST_3_COMBINE_1ST_VNC,
        PlayMenu.LAST_2_STRAIGHT_1ST_VNC,
        PlayMenu.LAST_2_STRAIGHT_2ND_VNC,
        PlayMenu.LAST_2_ANY_1ST_VNC,
        PlayMenu.LAST_2_ANY_2ND_VNC,
        PlayMenu.LAST_4_STRAIGHT_LAO,
        PlayMenu.LAST_4_COMBINE_LAO,
        PlayMenu.LAST_3_STRAIGHT_LAO,
        PlayMenu.LAST_3_COMBINE_LAO,
        PlayMenu.LAST_2_STRAIGHT_LAO,
        PlayMenu.FIRST_2_STRAIGHT_LAO,
        PlayMenu.LAST_2_ANY_LAO,
        PlayMenu.FIRST_2_ANY_LAO,
        PlayMenu.Any_Roll_Last_2_North_VNC,
        PlayMenu.Any_Roll_Last_2_1K_North_VNC,
        PlayMenu.Any_Roll_Last_2_1K_South_VNC,
        PlayMenu.Any_Roll_Last_3_North_VNC,
        PlayMenu.Any_Roll_Last_4_North_VNC,
        PlayMenu.Any_Roll_Last_2_South_VNC,
        PlayMenu.Any_Roll_Last_3_South_VNC,
        PlayMenu.Any_Roll_Last_4_South_VNC,
        PlayMenu['4_Not_Winning_Numbers_North_VNC'],
        PlayMenu['8_Not_Winning_Numbers_North_VNC'],
        PlayMenu['10_Not_Winning_Numbers_North_VNC'],
        PlayMenu['4_Not_Winning_Numbers_South_VNC'],
        PlayMenu['8_Not_Winning_Numbers_South_VNC'],
        PlayMenu['10_Not_Winning_Numbers_South_VNC'],

        PlayMenu.Any_Roll_First_2_North_VNC,
        PlayMenu.Any_Roll_First_2_1K_North_VNC,
        PlayMenu.Any_Roll_First_2_South_VNC,
        PlayMenu.Any_Roll_First_2_1K_South_VNC,

        PlayMenu.Bunch_2_North_VNC, // 北部 串2组
        PlayMenu.Bunch_3_North_VNC, // 北部 串3组
        PlayMenu.Bunch_4_North_VNC, // 北部 串4组
        PlayMenu.Bunch_2_South_VNC, // 中南部 串2组
        PlayMenu.Bunch_3_South_VNC, // 中南部 串3组
        PlayMenu.Bunch_4_South_VNC, // 中南部 串4组

        PlayMenu.Last_2_1st_7th_North_VNC_Single, // 北部 二数头尾
        PlayMenu.Last_2_7th_North_VNC_Single, // 北部 二数头
        PlayMenu.Last_2_1st_8th_South_VNC_Single, // 中南部 二数头尾
        PlayMenu.Last_2_8th_South_VNC_Single, // 中南部 二数头

        PlayMenu.Ten_Digit_1st_VNC, // 特等十位
        PlayMenu.Unit_Digit_1st_VNC, // 特等个位
        PlayMenu.Ten_Digit_2nd_VNC, // 一等十位
        PlayMenu.Unit_Digit_2nd_VNC, // 一等个位

        PlayMenu.Fixed_Place_4D_Unit, // 4D 一数 (個位)
        PlayMenu.Fixed_Place_4D_Ten, // 4D 一数 (十位)
        PlayMenu.Fixed_Place_4D_hundred, // 4D 一数 (百位)
        PlayMenu.Fixed_Place_4D_Thousand, // 4D 一数 (千位)

        PlayMenu.Fixed_Place_4D_Unit_VNC, // VNC 4D 一数 (個位)
        PlayMenu.Fixed_Place_4D_Ten_VNC, // VNC 4D 一数 (十位)
        PlayMenu.Fixed_Place_4D_hundred_VNC, // VNC 4D 一数 (百位)
        PlayMenu.Fixed_Place_4D_Thousand_VNC, // VNC 4D 一数 (千位)

        PlayMenu.Prize_2_Straight_THAI, // THAI 二等三位数
        PlayMenu.Special_Prize_2_Straight_THAI, // THAI 二特三位数

      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ',')
    },
    MULTI: {
      items: [
        PlayMenu.Last_3_Straight_THAI_Multi,
        PlayMenu.Last_3_Combine_THAI_Multi,
        PlayMenu['2_Straight_Add_THAI_Multi'],
        PlayMenu.Last_2_Combine_THAI_Multi,
        PlayMenu.Last_2_Straight_THAI_Multi,
        PlayMenu.Any_Roll_Last_2_North_VNC_Multi,
        PlayMenu.Any_Roll_Last_3_North_VNC_Multi,
        PlayMenu.Any_Roll_Last_4_North_VNC_Multi,
        PlayMenu.Any_Roll_Last_2_South_VNC_Multi,
        PlayMenu.Any_Roll_Last_3_South_VNC_Multi,
        PlayMenu.Any_Roll_Last_4_South_VNC_Multi,
        PlayMenu.Last_4_Straight_1st_VNC_Multi,
        PlayMenu.Last_3_Straight_1st_VNC_Multi,
        PlayMenu.Last_3_Straight_1st_VNC_Single,
        PlayMenu.Last_2_Straight_1st_VNC_Multi,
        PlayMenu.Last_2_Straight_2nd_VNC_Multi,
        PlayMenu.First_2_Straight_LAO_Multi,
        PlayMenu.Last_3_Combine_LAO_Multi,
        PlayMenu.Last_3_Straight_LAO_Multi,
        PlayMenu.Last_4_Straight_LAO_Multi,
      ],
      getText: (content = '') => content.split(',').filter((v) => v !== '').join(','),
    },
    FISH_PRAWN_CRAB: {
      items: [
        PlayMenu.Hoo_Hey_How_Play_THAI,
        PlayMenu.Hoo_Hey_How_Play_VNC,
        PlayMenu.Hoo_Hey_How_Play_LAO,
      ],
      getText: (content = '') => content.replace(/,/g, '').split('|').map((b) => i18n(`ball.fishPrawnCrab.${FISH_PRAWN_CRAB_KEY[b]}`)).join(','),
    },

    FAN: {
      items: [
        PlayMenu.Fan_Tan_Fan_THAI,
        PlayMenu.Fan_Tan_Fan_VNC,
        PlayMenu.Fan_Tan_Fan_LAO,
      ],
      getText: (content) => (content || '').split('|')
        .map((betNumber) => i18n(`ball.fanTanFan.${betNumber.trim().replace('0', '4')}`))
        .join(',')
    },

    JIAO: {
      items: [
        PlayMenu.Fan_Tan_Jiao_THAI,
        PlayMenu.Fan_Tan_Jiao_VNC,
        PlayMenu.Fan_Tan_Jiao_LAO,
      ],
      getText: (content) => (content || '').split('|')
        .map((betNumber) => i18n(`ball.fanTanJiao.${betNumber.trim().replace('0', '4').split('').join('_')}`))
        .join(',')
    },

    NIAN: {
      items: [
        PlayMenu.Fan_Tan_Nian_THAI,
        PlayMenu.Fan_Tan_Nian_VNC,
        PlayMenu.Fan_Tan_Nian_LAO,
      ],
      getText: (content) => (content || '').split('|')
        .map((betNumber) => i18n(`ball.fanTanNian.${betNumber.trim().replace('0', '4').split('').join('_')}`))
        .join(',')
    },

    SICBO_ALL_SURROUND: {
      items: [
        PlayMenu.All_Surround_Dice_Main_VK3,
      ],
      getText: (content) => i18n(`ball.sicBoAllSurroundDice.${content}`),
    },

    SICBO_OTHER: {
      items: [
        PlayMenu.Single_Dice_Main_VK3,
        PlayMenu.Dice_Sum_Main_VK3,
        PlayMenu.Surround_Dice_Main_VK3,
      ],
      getText: (content) => content,
    },
  };

  // sea特有的投注內容
  const SeaTranslator = {
    TL2D: {
      items: [
        PlayMenu.First_TL2D,
        PlayMenu.Second_TL2D,
        PlayMenu.Any1_TL2D,
        PlayMenu.Last_2_Straight_TL2D,
        PlayMenu.Last_2_Combine_TL2D,

        PlayMenu.First_TL2D37,
        PlayMenu.Second_TL2D37,
        PlayMenu.Any1_TL2D37,
        PlayMenu.Last_2_Straight_TL2D37,
        PlayMenu.Last_2_Combine_TL2D37,
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ','),
    },

    TL3D: {
      items: [
        PlayMenu.Last_2_Straight_TL3D, // SEA TL3D 上正二位数
        PlayMenu.Last_2_Combine_TL3D, // SEA TL3D 上反二位数
        PlayMenu.Last_3_Straight_TL3D, // SEA TL3D 上正三位数
        PlayMenu.Last_3_Combine_TL3D, // SEA TL3D 上反三位数
        PlayMenu['1_At_Any_Last_2_TL3D'], // SEA TL3D 上跑两位数
        PlayMenu.First_TL3D,
        PlayMenu.Second_TL3D,
        PlayMenu.Third_TL3D,
        PlayMenu.Comb3_TL3D, // 三星 三星組三
        PlayMenu.Comb6_TL3D, // 三星 三星組六
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ','),
    },

    TL4D: {
      items: [
        PlayMenu.Last_2_Straight_TL4D, // SEA TL4D 上正二位数
        PlayMenu.Last_2_Combine_TL4D, // SEA TL4D 上反二位数
        PlayMenu.Last_3_Straight_TL4D, // SEA TL4D 上正三位数
        PlayMenu.Last_3_Combine_TL4D, // SEA TL4D 上反三位数
        PlayMenu.Last_4_Straight_TL4D, // SEA TL4D 上正四位数
        PlayMenu.Last_4_Combine_TL4D, // SEA TL4D 上反四位数
        PlayMenu['1_At_Any_Last_2_TL4D'], // SEA TL4D 上跑两位数
        PlayMenu.First_TL4D,
        PlayMenu.Second_TL4D,
        PlayMenu.Third_TL4D,
        PlayMenu.Fourth_TL4D,
        PlayMenu.Comb3_TL4D, // 三星 後三組三
        PlayMenu.Comb6_TL4D, // 三星 後三組六
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ','),
    },

    TL6D: {
      items: [
        PlayMenu.Last_2_Straight_TL6D, // SEA TL6D 上正二位数
        PlayMenu.Last_2_Combine_TL6D, // SEA TL6D 上反二位数
        PlayMenu.Last_3_Straight_TL6D, // SEA TL6D 上正三位数
        PlayMenu.Last_3_Combine_TL6D, // SEA TL6D 上反三位数
        PlayMenu.Last_4_Straight_TL6D, // SEA TL6D 上正四位数
        PlayMenu.Last_4_Combine_TL6D, // SEA TL6D 上反四位数
        PlayMenu['1_At_Any_Last_2_TL6D'], // SEA TL6D 上跑两位数
        PlayMenu.First_TL6D,
        PlayMenu.Second_TL6D,
        PlayMenu.Third_TL6D,
        PlayMenu.Fourth_TL6D,
        PlayMenu.Fifth_TL6D,
        PlayMenu.Sixth_TL6D,
        PlayMenu.Comb3_TL6D, // 三星 後三組三
        PlayMenu.Comb6_TL6D, // 三星 後三組六
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ','),
    },
    TLBSOE: {
      items: [
        PlayMenu.First_BSOE_TL2D, // SEA TL2D BSOE第一球
        PlayMenu.Second_BSOE_TL2D, // SEA TL2D BSOE第二球
        PlayMenu.First_BSOE_TL3D, // SEA TL3D BSOE第一球
        PlayMenu.Second_BSOE_TL3D, // SEA TL3D BSOE第二球
        PlayMenu.Third_BSOE_TL3D, // SEA TL3D BSOE第三球
        PlayMenu.First_BSOE_TL4D, // SEA TL4D BSOE第一球
        PlayMenu.Second_BSOE_TL4D, // SEA TL4D BSOE第二球
        PlayMenu.Third_BSOE_TL4D, // SEA TL4D BSOE第三球
        PlayMenu.Forth_BSOE_TL4D, // SEA TL4D BSOE第四球
        PlayMenu.First_BSOE_TL6D, // SEA TL6D BSOE第一球
        PlayMenu.Second_BSOE_TL6D, // SEA TL6D BSOE第二球
        PlayMenu.Third_BSOE_TL6D, // SEA TL6D BSOE第三球
        PlayMenu.Forth_BSOE_TL6D, // SEA TL6D BSOE第四球
        PlayMenu.Fifth_BSOE_TL6D, // SEA TL6D BSOE第5球
        PlayMenu.Sixth_BSOE_TL6D, // SEA TL6D BSOE第6球
        PlayMenu.First_BSOE_TL2D37, // SEA TL2D37 第一球
        PlayMenu.Second_BSOE_TL2D37, // SEA TL2D37 第二球
      ],
      getText: (content) => i18n(`ball.BSOE.${BALL_BSOE_KEY[content]}`),
    },
    TL6XX1D: {
      items: [
        PlayMenu.Any1_TL642,
        PlayMenu.First_TL642,
        PlayMenu.Second_TL642,
        PlayMenu.Third_TL642,
        PlayMenu.Fourth_TL642,
        PlayMenu.Fifth_TL642,
        PlayMenu.Sixth_TL642,
        PlayMenu.Any1_TL645,
        PlayMenu.First_TL645,
        PlayMenu.Second_TL645,
        PlayMenu.Third_TL645,
        PlayMenu.Fourth_TL645,
        PlayMenu.Fifth_TL645,
        PlayMenu.Sixth_TL645,
        PlayMenu.Any1_TL649,
        PlayMenu.First_TL649,
        PlayMenu.Second_TL649,
        PlayMenu.Third_TL649,
        PlayMenu.Fourth_TL649,
        PlayMenu.Fifth_TL649,
        PlayMenu.Sixth_TL649,
        PlayMenu.Any1_TL655,
        PlayMenu.First_TL655,
        PlayMenu.Second_TL655,
        PlayMenu.Third_TL655,
        PlayMenu.Fourth_TL655,
        PlayMenu.Fifth_TL655,
        PlayMenu.Sixth_TL655,
        PlayMenu.Any1_TL658,
        PlayMenu.First_TL658,
        PlayMenu.Second_TL658,
        PlayMenu.Third_TL658,
        PlayMenu.Fourth_TL658,
        PlayMenu.Fifth_TL658,
        PlayMenu.Sixth_TL658,
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ','),
    },
    TL6XX2D: {
      items: [
        PlayMenu.First_2_Straight_TL642,
        PlayMenu.Last_2_Straight_TL642,
        PlayMenu.First_2_Straight_TL645,
        PlayMenu.Last_2_Straight_TL645,
        PlayMenu.First_2_Straight_TL649,
        PlayMenu.Last_2_Straight_TL649,
        PlayMenu.First_2_Straight_TL655,
        PlayMenu.Last_2_Straight_TL655,
        PlayMenu.First_2_Straight_TL658,
        PlayMenu.Last_2_Straight_TL658,
        PlayMenu.First_2_Any_TL642,
        PlayMenu.Last_2_Any_TL642,
        PlayMenu.First_2_Any_TL645,
        PlayMenu.Last_2_Any_TL645,
        PlayMenu.First_2_Any_TL649,
        PlayMenu.Last_2_Any_TL649,
        PlayMenu.First_2_Any_TL655,
        PlayMenu.Last_2_Any_TL655,
        PlayMenu.First_2_Any_TL658,
        PlayMenu.Last_2_Any_TL658,
      ],
      getText: (content) => {
        const trimed = (content || '').replace(/,/g, '').replace(/\|/g, ',');
        const ballRegex = new RegExp(`\\d{1,${2}}`, 'g');

        return trimed.match(ballRegex).join('-');
      },
    },
    TL6XX3D: {
      items: [
        PlayMenu.First_3_Straight_TL642,
        PlayMenu.Last_3_Straight_TL642,
        PlayMenu.First_3_Straight_TL645,
        PlayMenu.Last_3_Straight_TL645,
        PlayMenu.First_3_Straight_TL649,
        PlayMenu.Last_3_Straight_TL649,
        PlayMenu.First_3_Straight_TL655,
        PlayMenu.Last_3_Straight_TL655,
        PlayMenu.First_3_Straight_TL658,
        PlayMenu.Last_3_Straight_TL658,
        PlayMenu.First_3_Any_TL642,
        PlayMenu.Last_3_Any_TL642,
        PlayMenu.First_3_Any_TL645,
        PlayMenu.Last_3_Any_TL645,
        PlayMenu.First_3_Any_TL649,
        PlayMenu.Last_3_Any_TL649,
        PlayMenu.First_3_Any_TL655,
        PlayMenu.Last_3_Any_TL655,
        PlayMenu.First_3_Any_TL658,
        PlayMenu.Last_3_Any_TL658,
      ],
      getText: (content) => {
        const trimed = (content || '').replace(/,/g, '').replace(/\|/g, ',');
        const ballRegex = new RegExp(`\\d{1,${2}}`, 'g');

        return trimed.match(ballRegex).join('-');
      },
    },
    TL6XX_LUCKY_PICK: {
      items: [
        PlayMenu.LuckyPick_3_TL642,
        PlayMenu.LuckyPick_12_TL642,
        PlayMenu.LuckyPick_3_TL645,
        PlayMenu.LuckyPick_12_TL645,
        PlayMenu.LuckyPick_3_TL649,
        PlayMenu.LuckyPick_12_TL649,
        PlayMenu.LuckyPick_3_TL655,
        PlayMenu.LuckyPick_12_TL655,
        PlayMenu.LuckyPick_3_TL658,
        PlayMenu.LuckyPick_12_TL658,
      ],
      getText: (content) => {
        const trimed = (content || '').replace(/,/g, '').replace(/\|/g, ',');
        const ballRegex = new RegExp(`\\d{1,${2}}`, 'g');

        return trimed.match(ballRegex).join('-');
      },
    },
  };

  const LFTranslator = {
    NUMBER_LF: {
      items: [
        PlayMenu.Hundreds_Fixed_Place_LF, // 百定位
        PlayMenu.Hundreds_BSOE_LF, // 百定位大小单双
        PlayMenu.Hundreds_Prime_And_Composite_LF,
        PlayMenu.Tens_Fixed_Place_LF,
        PlayMenu.Tens_BSOE_LF,
        PlayMenu.Tens_Prime_And_Composite_LF,
        PlayMenu.Units_Fixed_Place_LF,
        PlayMenu.Units_BSOE_LF,
        PlayMenu.Units_Prime_And_Composite_LF,
        PlayMenu.Hundreds_Tens_Fixed_Place_LF, // 二字定位的百十定位
        PlayMenu.Hundreds_Units_Fixed_Place_LF,
        PlayMenu.Tens_Units_Fixed_Place_LF,
        PlayMenu.Hundreds_Tens_Units_Fixed_Place_LF, // 三字定位

        PlayMenu.Two_Word_Combine_LF, // 二字組合
        PlayMenu.Three_Word_Com_LF, // 三字組合

        PlayMenu.Hundreds_Tens_Sum_LF, // 百十和数
        PlayMenu.Hundreds_Tens_Sum_Last_LF, // 百十和数尾数
        PlayMenu.Hundreds_Units_Sum_LF, // 百个和数
        PlayMenu.Hundreds_Units_Sum_Last_LF, // 百个和数尾数
        PlayMenu.Tens_Units_Sum_LF, // 十个和数
        PlayMenu.Tens_Units_Sum_Last_LF, // 十个和数尾数
        PlayMenu.Hundreds_Tens_Units_Sum_LF,
        PlayMenu.Hundreds_Tens_Units_Sum_Tail_LF,

        PlayMenu.One_Word_Combine_LF, // 一字组合
        PlayMenu.Hundreds_Tens_Units_Com3_LF, // 组选三
        PlayMenu.Hundreds_Tens_Units_Com6_LF, // 组选六

        PlayMenu.Hundreds_Tens_Units_Span_LF, // 百十个跨度
        PlayMenu.Hundreds_Tens_Span_LF, // 百十跨度
        PlayMenu.Hundreds_Units_Span_LF, // 百个跨度
        PlayMenu.Tens_Units_Span_LF, // 十个跨度

        PlayMenu.Choose1_Fixed_Place_4D,
        PlayMenu.Choose2_Any_Code_4D,
        PlayMenu.Choose3_Any_Code_4D,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
        (`${result}${result ? ' ' : ''}${val}`), ''),
    },
    ANY_NUMBER_LF: {
      items: [
        PlayMenu.Any2_Straight_4D,
        PlayMenu.Any3_Straight_4D,
        PlayMenu.Any4_Straight_4D,
      ],
      getText: (content) => content.split(',').reduce((result, val) =>
    (`${result}${result && val ? ' | ' : ''}${val}`), ''),
    },
    SINGLE_LF: {
      items: [
        PlayMenu.Any2_Straight_Single_4D,
        PlayMenu.Any3_Straight_Single_4D,
        PlayMenu.Any4_Straight_Single_4D,
      ],
      getText: (content) => content.split('|').reduce((result, val) =>
    (`${result}${result && val ? ' | ' : ''}${val}`), ''),
    },
  };

  const KenoTranslator = {
    KENO_FUN: {
      items: [
        PlayMenu.Total_Sum_BST_KENO,
        PlayMenu.Total_Sum_OE_KENO,
        PlayMenu.Total_Sum_PASS_KENO,
        PlayMenu.UpDown_KENO,
        PlayMenu.OddEven_KENO,
        PlayMenu.WuXing_KENO,
      ],
      getText: (content) => i18n(`ball.kenoFunBall.${KENO_KEY.FUN[content]}`),
    },
    KENO_ANY: {
      items: [
        PlayMenu.Any1_KENO,
        PlayMenu.Any2_KENO,
        PlayMenu.Any3_KENO,
        PlayMenu.Any4_KENO,
        PlayMenu.Any5_KENO,
        PlayMenu.Any6_KENO,
        PlayMenu.Any7_KENO,
      ],
      getText: (content) => content,
    },
  };

  const WingoTranslator = {
    WIN_GO_COLOR: {
      items: [
        PlayMenu.Color_Red_WGG,
        PlayMenu.Color_Green_WGG,
        PlayMenu.Color_Purple_WGG,
      ],
      getText: (content) => i18n(`ball.wingo.${WINGO_KEY.COLOR[content]}`),
    },
    WIN_GO_BS: {
      items: [
        PlayMenu.BS_WGG,
      ],
      getText: (content) => i18n(`ball.wingo.${WINGO_KEY.BS[content]}`),
    },
    WIN_GO_NUMBER: {
      items: [
        PlayMenu.Num_WGG,
      ],
      getText: (content) => content,
    },
  };

  const Lotto5DTranslator = {
    LOTTO_5D_NUMBER: {
      items: [
        PlayMenu.First_Straight_5D,
        PlayMenu.Second_Straight_5D,
        PlayMenu.Third_Straight_5D,
        PlayMenu.Fourth_Straight_5D,
        PlayMenu.Fifth_Straight_5D,
      ],
      getText: (content) => content,
    },
    LOTTO_5D_BS: {
      items: [
        PlayMenu.Sum_BSOE_5D,
        PlayMenu.First_BSOE_5D,
        PlayMenu.Second_BSOE_5D,
        PlayMenu.Third_BSOE_5D,
        PlayMenu.Fourth_BSOE_5D,
        PlayMenu.Fifth_BSOE_5D,
      ],
      getText: (content) => i18n(`ball.lotto5D.${LOTTO_5D_KEY.BSOE[content]}`),
    },
  };

  const SEAK3Translator = {
    SEAK3_COMMON: {
      items: [
        PlayMenu.Sum_SEAK3,
        PlayMenu.Single_Same_2_SEAK3,
        PlayMenu.Multi_Same_2_SEAK3,
        PlayMenu.Single_Same_3_SEAK3,
        PlayMenu.Different_3_SEAK3,
        PlayMenu.Different_2_SEAK3,
      ],
      getText: (content) => (content || '').replace(/,/g, '').replace(/\|/g, ',')
    },
    SEAK3_ALL_SAME: {
      items: [
        PlayMenu.All_Same_3_SEAK3,
      ],
      getText: () => i18n(`playId.${PlayMenu.All_Same_3_SEAK3}`),
    },
    SEAK3_ALL_SEQUENCE: {
      items: [
        PlayMenu.All_Sequence_SEAK3,
      ],
      getText: () => i18n(`playId.${PlayMenu.All_Sequence_SEAK3}`),
    },
    SEAK3_BSOE: {
      items: [
        PlayMenu.BSOE_SEAK3,
      ],
      getText: (content) => i18n(`ball.lotto5D.${LOTTO_5D_KEY.BSOE[content]}`),
    },
  };

  const SEAPK10Translator = {
    SEAPK10_RANK: {
      items: [
        PlayMenu.SEA_PK10_RANK,
      ],
      getText: (content) => {
        const data = content.split(',');
        return `${i18n(`marble_pk10Ranking.${data[0]}`)} @ ${data[1]}`;
      }
    },
    SEAPK10_BSOE: {
      items: [
        PlayMenu.SEA_PK10_BS,
        PlayMenu.SEA_PK10_OE,
      ],
      getText: (content) => {
        const data = content.split(',');

        const ballI18n = {
          0: 'ball.marble_PK10_BSOE.big',
          1: 'ball.marble_PK10_BSOE.small',
          2: 'ball.marble_PK10_BSOE.odd',
          3: 'ball.marble_PK10_BSOE.even',
        }[data[1]];
        return `${i18n(`marble_pk10Ranking.${data[0]}`)} @ ${i18n(ballI18n)}`;
      },
    },
  }

  const NNPTranslator = {
    NNP: {
      items: [
        PlayMenu.EQUALIZE_MAIN_NNP,
        PlayMenu.DOUBLE_MAIN_NNP,
      ],
      getText: (content) => {
        const format = (content || '').replace(/,/g, '').replace(/\|/g, ',');
        let text = format;
        switch (format[0]) {
          case 'Z':
            text = `${i18n('prizeListPrizeType.P_BANKER')}${format[1]}`;
            break;
          case 'X':
            text = `${i18n('prizeListPrizeType.P_PLAYER')}${format[1]}`;
            break;
          default:
            break;
        }
        return text;
      },
    },
  }

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

        // PK10 Fantan
        PlayMenu.Fan_Tan_BSOE_PK10,

        // PCB28
        PlayMenu.SpecialBSOE_PCB,
        PlayMenu.BOSE_WITH_TIE_PCB,
        PlayMenu.BOSE_ONLY_TIE_PCB,
        PlayMenu.BOSE_ALL_KILL_PCB,
        // K3
        PlayMenu.Sum_BS_OE_K3,
        PlayMenu.Sum_BS_OE_K3_ENT,
        PlayMenu.Sum_BS_OE_Baozi_Kill_K3_ENT,
        PlayMenu.Red_Num_BSOE_K3_ENT,
        PlayMenu.Black_Num_BSOE_K3_ENT,
        // 11X5
        PlayMenu.Two_Side_First_BSOE_11X5_ENT,
        PlayMenu.Two_Side_Second_BSOE_11X5_ENT,
        PlayMenu.Two_Side_Third_BSOE_11X5_ENT,
        PlayMenu.Two_Side_Fourth_BSOE_11X5_ENT,
        PlayMenu.Two_Side_Fifth_BSOE_11X5_ENT,
        // LF3D
        PlayMenu.Hundreds_BSOE_LF,
        PlayMenu.Tens_BSOE_LF,
        PlayMenu.Units_BSOE_LF,

        // fan tan
        PlayMenu.Fan_Tan_BSOE_THAI,
        PlayMenu.Fan_Tan_BSOE_VNC,
        PlayMenu.Fan_Tan_BSOE_LAO,

        // SICBO
        PlayMenu.Dice_BSOE_Main_VK3,

        // VN PK10
        PlayMenu.First_Second_Sum_BSOE_VPK10,

        // VTX
        PlayMenu.Dice_BS_Main_VTX,
        // 色碟
        PlayMenu.XocDia_BS_Main_VXD,
        PlayMenu.XocDia_OD_Main_VXD,
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

    PRIME_COMPOSITE: {
      items: [
        PlayMenu.Hundreds_Prime_And_Composite_LF,
        PlayMenu.Tens_Prime_And_Composite_LF,
        PlayMenu.Units_Prime_And_Composite_LF,
      ],
      getText: (content) =>
        content.split('_').reduce((result, val) => (`${result}${result ? ' | ' : ''}${i18n(`ball.PC.${BALL_PC_KEY[parseInt(val)]}`)}`), ''),
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
        // 娛樂城快三龍虎和
        PlayMenu.Dragon_Tiger_1_VS_2_K3_Ent,
        PlayMenu.Dragon_Tiger_1_VS_3_K3_Ent,
        PlayMenu.Dragon_Tiger_2_VS_3_K3_Ent,
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
        // 時時彩新龍虎
        PlayMenu.New_Dragon_Tiger_10T_T_SSC,
        PlayMenu.New_Dragon_Tiger_10T_H_SSC,
        PlayMenu.New_Dragon_Tiger_10T_10_SSC,
        PlayMenu.New_Dragon_Tiger_10T_1_SSC,
        PlayMenu.New_Dragon_Tiger_T_H_SSC,
        PlayMenu.New_Dragon_Tiger_T_1_SSC,
        PlayMenu.New_Dragon_Tiger_H_10_SSC,
        PlayMenu.New_Dragon_Tiger_H_1_SSC,
        PlayMenu.New_Dragon_Tiger_10_1_SSC,
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
        PlayMenu.Any3Com3_SSC,
        PlayMenu.Any3Com6_SSC,
        PlayMenu.Any2Com_SSC,
      ],
      getText: (content, originalContent) => {
        const digitOrderContent = getDigitOrderContent(originalContent);
        return `(${digitOrderContent.digitPosText}) ${digitOrderContent.ballTextArray.join(' | ')}`;
      },
    },
    // 任选 單式
    ANY_COM_SSC_Single: {
      items: [
        PlayMenu.Any3Com_SSC,
        PlayMenu.Any2Com_SSC_Single,
      ],
      getText: (content, originalContent) => {
        const digitOrderContent = getDigitOrderContent(originalContent);
        return `(${digitOrderContent.digitPosText}) ${digitOrderContent.ballTextArray.join().replace(/\|/g, '  ').replace(/,/g, '')}`;
      },
    },
    // 和值
    SUM_BALL_NUMBER: {
      items: [
        // SSC 和值
        PlayMenu.First3Sum,
        PlayMenu.Middle3Sum,
        PlayMenu.Last3Sum,
        PlayMenu.First2Sum,
        PlayMenu.Last2Sum,
        // 低頻彩
        PlayMenu.Last3Sum_LF,
        PlayMenu.Last3ComSum_LF,
        PlayMenu.P3Sum_LF,
        PlayMenu.P3ComSum_LF,
        // K3
        PlayMenu.Sum_K3,

        // PK10
        // 猜和值 與 定位膽 playcode與傳統重複..用到的地方暫時hard code
        /*
    First2Sum_PK10: 1464,
    First3Sum_PK10: 1465,
    FirstLastSum_PK10: 1466,
      */
        1464,
        1465,
        1466,
      ],
      getText: (content) => content.split('|').reduce((result, val) =>
        (`${result}${result && val ? ' | ' : ''}${val}`), ''),
    },

    // 任選和值
    ANY_SUM_BALL_NUMBER: {
      items: [
        PlayMenu.Any2Sum_SSC,
        PlayMenu.Any3Sum_SSC,
      ],
      getText: (content, originalContent) => {
        const digitOrderContent = getDigitOrderContent(originalContent);
        const { digitPosText, ballTextArray } = digitOrderContent;
        const ballText = ballTextArray.join('').replace(/\|/g, ' | ');
        return `(${digitPosText}) ${ballText}`;
      },
    },

    // 和值大小單雙
    // ,,,,0|,,,,1 => 總和大 | 總和小
    SUM_BSOE: {
      items: [
        PlayMenu.Sum_BSOE_SSC,
      ],
      getText: (content) => {
        const { length } = content;
        if (length === 1) {
    // 總和單
    return i18n(`ball.sumBSOE.${content}`);
        }
        // 總和單 | 總和雙
        return content.split('|').sort().map((num) => i18n(`ball.sumBSOE.${num}`)).join(' | ');
      },
    },
    // 和值組合大小單雙
    // ,,,1,2|,,,0,3 => 總和大單 | 總和小雙
    SUM_BS_OE: {
      items: [
        PlayMenu.Sum_BS_OE_SSC,
      ],
      // 把 12 | 03 組成 1_2 | 0_3 去取i18n
      getText: (content) => {
        const { length } = content;
        if (length === 2) {
    // 總和大單
    return i18n(`ball.sumBSOE.${content.split('').join('_')}`);
        }
        // 總和大單 | 總和小雙
        return content.split('|').sort().map((num) => i18n(`ball.sumBSOE.${num.split('').join('_')}`)).join(' | ');
      },
    },

    VN_PK10_DRAGON_TIGER: {
      items: [
        PlayMenu.Dragon_Tiger_Main_PK10,
      ],
      getText: (content) => {
        const data = content.split(',');
        const ranking = data[0].split('-');
        return `${i18n(`pk10Ranking.${ranking[0]}`)} VS ${i18n(`pk10Ranking.${ranking[1]}`)} @ ${ranking[data[1]]}`;
      }
    },

    VN_PK10_FIRST_TO_TENTH_GUESS_RANK: {
      items: [
        PlayMenu.First_To_Tenth_Guess_Rank_VPK10,
      ],
      getText: (content) => {
        const data = content.split(',');
        return `${i18n(`pk10Ranking.${data[0]}`)} @ ${data[1]}`;
      },
    },

    VN_PK10_FIRST_TO_BSOE: {
      items: [
        PlayMenu.First_To_Tenth_BSOE_VPK10,
      ],
      getText: (content) => {
        const data = content.split(',');
        const ballI18n = {
          0: 'ball.PK10_BSOE.big',
          1: 'ball.PK10_BSOE.small',
          2: 'ball.PK10_BSOE.odd',
          3: 'ball.PK10_BSOE.even',
        }[data[1]];
        return `${i18n(`pk10Ranking.${data[0]}`)} @ ${i18n(ballI18n)}`;
      },
    },

    VN_PK10_SUM: {
      items: [
        PlayMenu.First_Second_Sum_Main_VPK10
      ],
      getText: (content) => ( content )
    },

    STRAIGHT_LF: {
      items: [
        PlayMenu.Last3Straight_LF,
        PlayMenu.First2Straight_LF,
        PlayMenu.Last2Straight_LF,
        PlayMenu.Last3StraightAnyCode1_LF,
        PlayMenu.Last3StraightAnyCode2_LF,
        PlayMenu.P3Straight_LF,
        PlayMenu.P3StraightAnyCode1_LF,
        PlayMenu.P3StraightAnyCode2_LF,
        PlayMenu.P5First2Straight_LF,
        PlayMenu.P3Last2Straight_LF,
        PlayMenu.P5Last2Straight_LF,
        PlayMenu.All5Straight_LF,
        PlayMenu.P5First4Straight_LF,
        PlayMenu.P5Last4Straight_LF,
      ],
      getText: (content, bettingContent) =>
      bettingContent.replace(/\|/g, ' ').split(',').filter((e) => e === 0 || e).join(' | ')
    },

    STRAIGHT_LF_SINGLE: {
      items: [
        PlayMenu.Last3Straight_LF_Single,
        PlayMenu.First2Straight_LF_Single,
        PlayMenu.Last2Straight_LF_Single,
        PlayMenu.P3Straight_LF_Single,
        PlayMenu.P5First2Straight_LF_Single,
        PlayMenu.P3Last2Straight_LF_Single,
        PlayMenu.P5Last2Straight_LF_Single,
        PlayMenu.All5Straight_LF_Single,
        PlayMenu.P5First4Straight_LF_Single,
        PlayMenu.P5Last4Straight_LF_Single,
      ],
      getText: (content, bettingContent) => bettingContent.split('|').map((e) =>e.split(',').filter((e) => e === 0 || e).join(' | ')).join('; '),
    },

    NON_STRAIGHT_LF: {
      items: [
        PlayMenu.Last3Com3_LF,
        PlayMenu.Last3Com6_LF,
        PlayMenu.Last3Com_LF,
        PlayMenu.First2Com_LF,
        PlayMenu.Last2Com_LF_3D,
        PlayMenu.FixedPlace_LF,
        PlayMenu.P3Com3_LF,
        PlayMenu.P3Com6_LF,
        PlayMenu.P5First2Com_LF,
        PlayMenu.P3Last2Com_LF,
        PlayMenu.Last2Com_LF_P3P5,
        PlayMenu.Last2BSOE_LF,
        PlayMenu.FixedPlace_LF_P3P5,
      ],
      getText: (content, bettingContent) => bettingContent.replace(/,/g, '').replace(/\|/g, ' | '),
    },

    play_type_SINGLE: {
      items: [
        PlayMenu.First2_PK10_Single,
        PlayMenu.First3_PK10_Single,
        PlayMenu.First4_PK10_Single,
        PlayMenu.First5_PK10_Single,
        PlayMenu.Any2_11X5_Single,
        PlayMenu.Any3_11X5_Single,
        PlayMenu.Any4_11X5_Single,
        PlayMenu.Any5_11X5_Single,
        PlayMenu.Any6_11X5_Single,
        PlayMenu.Any7_11X5_Single,
        PlayMenu.Any8_11X5_Single,
        PlayMenu.First3Straight_11X5_Single,
        PlayMenu.First3Com_11X5_Single,
        PlayMenu.First2Straight_11X5_Single,
        PlayMenu.First2Com_11X5_Single,
        PlayMenu.All5Straight_Single,
        PlayMenu.All5All_Single,
        PlayMenu.All5Join_Single,
        PlayMenu.Any2_Single,
        PlayMenu.Any3_Single,
        PlayMenu.Any4_Single,
      ],
      getText: (content, bettingContent) => bettingContent.split('|').map((e) =>e.split(',').filter((e) => e === 0 || e).join(' | ')).join('; '),
    },

    fiveRoll: {
      items: [
        PlayMenu.LOTTO_SYSTEM_5,
        PlayMenu.MEGA_SYSTEM_5,
        PlayMenu.SUPER_SYSTEM_5,
        PlayMenu.GRAND_SYSTEM_5,
        PlayMenu.ULTRA_SYSTEM_5,
      ],
      getText: (content) => content.replace('*', 'SR'),
    },

    ...VBCTranslator,
    // color game, mini-game
    ...CLRTranslator,
    ...BCRTranslator,
    ...VXDTranslator,
    ...PK10Translator,
    ...LHCTranslator,
    ...PCBTranslator,
    ...K3Translator,
    ..._11X5Translator,
    ...SSCTranslator,
    ...SSCNNTranslator,
    ...SSCHK5Translator,
    ...SSCBaccaratTranslator,
    ...THAITranslator,
    ...LFTranslator,
    ...KenoTranslator,
    ...WingoTranslator,
    ...Lotto5DTranslator,
    ...SEAK3Translator,
    ...SeaTranslator,
    ...NNPTranslator,
    ...SEAPK10Translator
  };

  return OrderInfoTranslatorList;
}

const OrderInfoTranslator = {
  getText: (playId, bettingContent, lang) => {
    // 參數 null 的防呆
    if (!playId || !bettingContent) {
      return '';
    }

    const OrderInfoTranslatorList = getOrderInfoTranslatorList(lang);
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
