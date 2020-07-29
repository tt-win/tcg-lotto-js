import { Record } from 'immutable';

// 投注球號版渲染參數
// 機選也會根據此參數產生可供機選的球號
export const BallBoardConfigRecord = Record({
  ballRange: [],
  ballDigit: 1, // 數字位數 ex: 02 => 2位
  ballI18n: {}, // 特殊: 根據球號值對應 i18n, ex: 大小單雙, 定單雙, 龍虎, 龍虎和
  ballI18nDigitExclude: [],  // 不須進行翻譯的ballDigit key
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
  forceSmallUpper: undefined,  // 快捷投注大小區分 >為大 <=為小  預設不給
  multi: true,
  maxBallCount: -1, // 最大選擇球數, -1 表示不限球數, 特殊玩法使用
  canShowManualDigits: false, // 位數選擇器
  manualDigits: [], // 位數值 (成立訂單使用)
  manualDigitsI18n: [], // 選擇位數i18n
  defaultManualDigits: [], // 預設選擇位數值
  minChooseManualDigits: 0, // 最少選擇位數

  displayBallBonus: false,  // 是否顯示個別球最高獎金  2017.06.02 added by G
  prizeTypeMapping: {},   // prizeType對照
  rowMulti: true, // 每一列球號是否多選 false:每一列球號不能相同
  ballShowWithDice: false,
  ballShowPosition: '', // 組態球要顯示的位置
  ballConfigurationCategory: '', // 組態球要顯示的型態 ex:組數 和值 大小單雙 龍虎和...
  positionMapping: {}, // fan tan position mapping
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
  fixedBalls: ['3_0', '3_1', '3_2','0_3', '2_3', '0_2', '2_0', '0_1', '2_1', '1_0', '1_3', '1_2'],
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
