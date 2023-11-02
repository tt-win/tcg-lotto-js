import { Record } from 'immutable';

// 投注球號版渲染參數
// 機選也會根據此參數產生可供機選的球號
export const BallBoardConfigRecord = Record({
  ballRange: [],
  ballDigit: 1, // 數字位數 ex: 02 => 2位
  ballI18n: {}, // 特殊: 根據球號值對應 i18n, ex: 大小單雙, 定單雙, 龍虎, 龍虎和
  ballI18nDigitExclude: [], // 不須進行翻譯的ballDigit key
  fixedBalls: [], // 特殊: 固定球號, 球號無規律, ex: 定單雙
  betDigits: [], // 球號每列名稱
  boardClassNames: '', // ball board class
  delimiter: '',
  forceUseDelimiter: false, // 使用delimiter
  hasToolbar: true,
  canHideToolBarAll: false,
  canHideToolBarBig: false,
  canHideToolBarSmall: false,
  canHideToolBarOdd: false,
  canHideToolBarEven: false,
  canShowHotGap: true,
  canShowStakes: false,
  canShowBallAtSub: false, // 直接在額外欄顯示球號文字
  isBSOE: false,
  formula: undefined, // 注數計算公式
  forceSmallUpper: undefined, // 快捷投注大小區分 >為大 <=為小  預設不給
  multi: true,
  maxBallCount: -1, // 最大選擇球數, -1 表示不限球數, 特殊玩法使用
  canShowManualDigits: false, // 位數選擇器
  manualDigits: [], // 位數值 (成立訂單使用)
  manualDigitsI18n: [], // 選擇位數i18n
  defaultManualDigits: [], // 預設選擇位數值
  minChooseManualDigits: 0, // 最少選擇位數
  minChooseFailParlayDigits: 0,
  displayBallBonus: false, // 是否顯示個別球最高獎金  2017.06.02 added by G
  prizeTypeMapping: {}, // prizeType對照
  rowMulti: true, // 每一列球號是否多選 false:每一列球號不能相同
  ballShowWithDice: false,
  ballShowPosition: '', // 組態球要顯示的位置
  ballConfigurationCategory: '', // 組態球要顯示的型態 ex:組數 和值 大小單雙 龍虎和...
  positionMapping: {}, // fan tan position mapping
  warningTag: '',
});

export const baseBSOEProps = {
  ballRange: [0, 3],
  ballDigit: 1,
  canShowHotGap: true,
  hasToolbar: false,
  isBSOE: true,
  multi: false,
  formula: 'straight',
  ballI18n: {
    0: 'ball.BSOE.big',
    1: 'ball.BSOE.small',
    2: 'ball.BSOE.odd',
    3: 'ball.BSOE.even',
  },
};

export const fishPrawnCrabBallProps = {
  fixedBalls: ['0', '1', '2'],
  ballI18n: {
    0: 'ball.fishPrawnCrab.fish',
    1: 'ball.fishPrawnCrab.prawn',
    2: 'ball.fishPrawnCrab.crab',
  },
  prizeTypeMapping: {
    0: 'Hoo_Hey_How_0',
    1: 'Hoo_Hey_How_1',
    2: 'Hoo_Hey_How_2',
  },
};

export const fanTanFanBallProps = {
  fixedBalls: ['0', '1', '2', '3'],
  ballI18n: {
    0: 'ball.fanTanFan.4',
    1: 'ball.fanTanFan.1',
    2: 'ball.fanTanFan.2',
    3: 'ball.fanTanFan.3',
  },
  prizeTypeMapping: {
    0: 'P_Fan_0',
    1: 'P_Fan_1',
    2: 'P_Fan_2',
    3: 'P_Fan_3',
    4: 'P_Fan_3',
  },
};

export const fanTanJiaoBallProps = {
  fixedBalls: ['3_0', '2_3', '1_0', '1_2'],
  ballI18n: {
    '1_2': 'ball.fanTanJiao.1_2',
    '1_0': 'ball.fanTanJiao.1_4',
    '2_3': 'ball.fanTanJiao.2_3',
    '3_0': 'ball.fanTanJiao.3_4',
  },
  prizeTypeMapping: {
    '1_2': 'P_Jiao_12',
    '1_0': 'P_Jiao_10',
    '2_3': 'P_Jiao_23',
    '3_0': 'P_Jiao_30',
  },
};

export const fanTanNianBallProps = {
  fixedBalls: ['3_0', '3_1', '3_2', '0_3', '2_3', '0_2', '2_0', '0_1', '2_1', '1_0', '1_3', '1_2'],
  ballI18n: {
    '1_2': 'ball.fanTanNian.1_2',
    '1_3': 'ball.fanTanNian.1_3',
    '1_0': 'ball.fanTanNian.1_4',
    '2_1': 'ball.fanTanNian.2_1',
    '2_3': 'ball.fanTanNian.2_3',
    '2_0': 'ball.fanTanNian.2_4',
    '3_1': 'ball.fanTanNian.3_1',
    '3_2': 'ball.fanTanNian.3_2',
    '3_0': 'ball.fanTanNian.3_4',
    '0_1': 'ball.fanTanNian.4_1',
    '0_2': 'ball.fanTanNian.4_2',
    '0_3': 'ball.fanTanNian.4_3',
  },
  prizeTypeMapping: {
    '1_2': 'P_1NIAN2',
    '1_3': 'P_1NIAN3',
    '1_0': 'P_1NIAN4',
    '2_1': 'P_2NIAN1',
    '2_3': 'P_2NIAN3',
    '2_0': 'P_2NIAN4',
    '3_1': 'P_3NIAN1',
    '3_2': 'P_3NIAN2',
    '3_0': 'P_3NIAN4',
    '0_1': 'P_4NIAN1',
    '0_2': 'P_4NIAN2',
    '0_3': 'P_4NIAN3',
  },
};

export const fanTanBSOEProps = {
  ...baseBSOEProps,
  prizeTypeMapping: {
    0: 'P_BIG',
    1: 'P_SMALL',
    2: 'P_ODD',
    3: 'P_EVEN',
  },
};

export const seaMultiBetProps = {
  ballRange: [0, 9],
  ballDigit: 1,
};

export const vnPK10FirstTenthGuessRankProps = {
  prizeTypeMapping: {
    '1_1': 'VPK10_RANK1_1',
    '1_2': 'VPK10_RANK1_2',
    '1_3': 'VPK10_RANK1_3',
    '1_4': 'VPK10_RANK1_4',
    '1_5': 'VPK10_RANK1_5',
    '1_6': 'VPK10_RANK1_6',
    '1_7': 'VPK10_RANK1_7',
    '1_8': 'VPK10_RANK1_8',
    '1_9': 'VPK10_RANK1_9',
    '1_10': 'VPK10_RANK1_10',

    '2_1': 'VPK10_RANK2_1',
    '2_2': 'VPK10_RANK2_2',
    '2_3': 'VPK10_RANK2_3',
    '2_4': 'VPK10_RANK2_4',
    '2_5': 'VPK10_RANK2_5',
    '2_6': 'VPK10_RANK2_6',
    '2_7': 'VPK10_RANK2_7',
    '2_8': 'VPK10_RANK2_8',
    '2_9': 'VPK10_RANK2_9',
    '2_10': 'VPK10_RANK2_10',

    '3_1': 'VPK10_RANK3_1',
    '3_2': 'VPK10_RANK3_2',
    '3_3': 'VPK10_RANK3_3',
    '3_4': 'VPK10_RANK3_4',
    '3_5': 'VPK10_RANK3_5',
    '3_6': 'VPK10_RANK3_6',
    '3_7': 'VPK10_RANK3_7',
    '3_8': 'VPK10_RANK3_8',
    '3_9': 'VPK10_RANK3_9',
    '3_10': 'VPK10_RANK3_10',

    '4_1': 'VPK10_RANK4_1',
    '4_2': 'VPK10_RANK4_2',
    '4_3': 'VPK10_RANK4_3',
    '4_4': 'VPK10_RANK4_4',
    '4_5': 'VPK10_RANK4_5',
    '4_6': 'VPK10_RANK4_6',
    '4_7': 'VPK10_RANK4_7',
    '4_8': 'VPK10_RANK4_8',
    '4_9': 'VPK10_RANK4_9',
    '4_10': 'VPK10_RANK4_10',

    '5_1': 'VPK10_RANK5_1',
    '5_2': 'VPK10_RANK5_2',
    '5_3': 'VPK10_RANK5_3',
    '5_4': 'VPK10_RANK5_4',
    '5_5': 'VPK10_RANK5_5',
    '5_6': 'VPK10_RANK5_6',
    '5_7': 'VPK10_RANK5_7',
    '5_8': 'VPK10_RANK5_8',
    '5_9': 'VPK10_RANK5_9',
    '5_10': 'VPK10_RANK5_10',

    '6_1': 'VPK10_RANK6_1',
    '6_2': 'VPK10_RANK6_2',
    '6_3': 'VPK10_RANK6_3',
    '6_4': 'VPK10_RANK6_4',
    '6_5': 'VPK10_RANK6_5',
    '6_6': 'VPK10_RANK6_6',
    '6_7': 'VPK10_RANK6_7',
    '6_8': 'VPK10_RANK6_8',
    '6_9': 'VPK10_RANK6_9',
    '6_10': 'VPK10_RANK6_10',

    '7_1': 'VPK10_RANK7_1',
    '7_2': 'VPK10_RANK7_2',
    '7_3': 'VPK10_RANK7_3',
    '7_4': 'VPK10_RANK7_4',
    '7_5': 'VPK10_RANK7_5',
    '7_6': 'VPK10_RANK7_6',
    '7_7': 'VPK10_RANK7_7',
    '7_8': 'VPK10_RANK7_8',
    '7_9': 'VPK10_RANK7_9',
    '7_10': 'VPK10_RANK7_10',

    '8_1': 'VPK10_RANK8_1',
    '8_2': 'VPK10_RANK8_2',
    '8_3': 'VPK10_RANK8_3',
    '8_4': 'VPK10_RANK8_4',
    '8_5': 'VPK10_RANK8_5',
    '8_6': 'VPK10_RANK8_6',
    '8_7': 'VPK10_RANK8_7',
    '8_8': 'VPK10_RANK8_8',
    '8_9': 'VPK10_RANK8_9',
    '8_10': 'VPK10_RANK8_10',

    '9_1': 'VPK10_RANK9_1',
    '9_2': 'VPK10_RANK9_2',
    '9_3': 'VPK10_RANK9_3',
    '9_4': 'VPK10_RANK9_4',
    '9_5': 'VPK10_RANK9_5',
    '9_6': 'VPK10_RANK9_6',
    '9_7': 'VPK10_RANK9_7',
    '9_8': 'VPK10_RANK9_8',
    '9_9': 'VPK10_RANK9_9',
    '9_10': 'VPK10_RANK9_10',

    '10_1': 'VPK10_RANK10_1',
    '10_2': 'VPK10_RANK10_2',
    '10_3': 'VPK10_RANK10_3',
    '10_4': 'VPK10_RANK10_4',
    '10_5': 'VPK10_RANK10_5',
    '10_6': 'VPK10_RANK10_6',
    '10_7': 'VPK10_RANK10_7',
    '10_8': 'VPK10_RANK10_8',
    '10_9': 'VPK10_RANK10_9',
    '10_10': 'VPK10_RANK10_10',
  },
};

export const vnPk10FirstTenthBSOEProps = {
  prizeTypeMapping: {
    '1_0': 'VPK10_RANK_BSOE_1_BIG',
    '1_1': 'VPK10_RANK_BSOE_1_SMALL',
    '1_2': 'VPK10_RANK_BSOE_1_ODD',
    '1_3': 'VPK10_RANK_BSOE_1_EVEN',
    '2_0': 'VPK10_RANK_BSOE_2_BIG',
    '2_1': 'VPK10_RANK_BSOE_2_SMALL',
    '2_2': 'VPK10_RANK_BSOE_2_ODD',
    '2_3': 'VPK10_RANK_BSOE_2_EVEN',
    '3_0': 'VPK10_RANK_BSOE_3_BIG',
    '3_1': 'VPK10_RANK_BSOE_3_SMALL',
    '3_2': 'VPK10_RANK_BSOE_3_ODD',
    '3_3': 'VPK10_RANK_BSOE_3_EVEN',
    '4_0': 'VPK10_RANK_BSOE_4_BIG',
    '4_1': 'VPK10_RANK_BSOE_4_SMALL',
    '4_2': 'VPK10_RANK_BSOE_4_ODD',
    '4_3': 'VPK10_RANK_BSOE_4_EVEN',
    '5_0': 'VPK10_RANK_BSOE_5_BIG',
    '5_1': 'VPK10_RANK_BSOE_5_SMALL',
    '5_2': 'VPK10_RANK_BSOE_5_ODD',
    '5_3': 'VPK10_RANK_BSOE_5_EVEN',
    '6_0': 'VPK10_RANK_BSOE_6_BIG',
    '6_1': 'VPK10_RANK_BSOE_6_SMALL',
    '6_2': 'VPK10_RANK_BSOE_6_ODD',
    '6_3': 'VPK10_RANK_BSOE_6_EVEN',
    '7_0': 'VPK10_RANK_BSOE_7_BIG',
    '7_1': 'VPK10_RANK_BSOE_7_SMALL',
    '7_2': 'VPK10_RANK_BSOE_7_ODD',
    '7_3': 'VPK10_RANK_BSOE_7_EVEN',
    '8_0': 'VPK10_RANK_BSOE_8_BIG',
    '8_1': 'VPK10_RANK_BSOE_8_SMALL',
    '8_2': 'VPK10_RANK_BSOE_8_ODD',
    '8_3': 'VPK10_RANK_BSOE_8_EVEN',
    '9_0': 'VPK10_RANK_BSOE_9_BIG',
    '9_1': 'VPK10_RANK_BSOE_9_SMALL',
    '9_2': 'VPK10_RANK_BSOE_9_ODD',
    '9_3': 'VPK10_RANK_BSOE_9_EVEN',
    '10_0': 'VPK10_RANK_BSOE_10_BIG',
    '10_1': 'VPK10_RANK_BSOE_10_SMALL',
    '10_2': 'VPK10_RANK_BSOE_10_ODD',
    '10_3': 'VPK10_RANK_BSOE_10_EVEN',
  },
};

export const vnPk10FirstSecondSumMainProps = {
  prizeTypeMapping: {
    3: 'VPK10_1_2_SUM_3',
    4: 'VPK10_1_2_SUM_4',
    5: 'VPK10_1_2_SUM_5',
    6: 'VPK10_1_2_SUM_6',
    7: 'VPK10_1_2_SUM_7',
    8: 'VPK10_1_2_SUM_8',
    9: 'VPK10_1_2_SUM_9',
    10: 'VPK10_1_2_SUM_10',
    11: 'VPK10_1_2_SUM_11',
    12: 'VPK10_1_2_SUM_12',
    13: 'VPK10_1_2_SUM_13',
    14: 'VPK10_1_2_SUM_14',
    15: 'VPK10_1_2_SUM_15',
    16: 'VPK10_1_2_SUM_16',
    17: 'VPK10_1_2_SUM_17',
    18: 'VPK10_1_2_SUM_18',
    19: 'VPK10_1_2_SUM_19',
  },
};

export const vnPK10FirstSecondSumBSOEProps = {
  prizeTypeMapping: {
    0: 'VPK10_1_2_SUM_BSOE_BIG',
    1: 'VPK10_1_2_SUM_BSOE_SMALL',
    2: 'VPK10_1_2_SUM_BSOE_ODD',
    3: 'VPK10_1_2_SUM_BSOE_EVEN',
  },
};

export const vnPK10DragonTigerProps = {
  prizeTypeMapping: {
    '1-10_0': 'VPK10_DRAGON_TIGER_1-10_DRAGON',
    '1-10_1': 'VPK10_DRAGON_TIGER_1-10_TIGER',
    '2-9_0': 'VPK10_DRAGON_TIGER_2-9_DRAGON',
    '2-9_1': 'VPK10_DRAGON_TIGER_2-9_TIGER',
    '3-8_0': 'VPK10_DRAGON_TIGER_3-8_DRAGON',
    '3-8_1': 'VPK10_DRAGON_TIGER_3-8_TIGER',
    '4-7_0': 'VPK10_DRAGON_TIGER_4-7_DRAGON',
    '4-7_1': 'VPK10_DRAGON_TIGER_4-7_TIGER',
    '5-6_0': 'VPK10_DRAGON_TIGER_5-6_DRAGON',
    '5-6_1': 'VPK10_DRAGON_TIGER_5-6_TIGER',
  },
};
