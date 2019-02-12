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
  multi: true,
  maxBallCount: -1, // 最大選擇球數, -1 表示不限球數, 特殊玩法使用
  canShowManualDigits: false, // 位數選擇器
  manualDigits: [], // 位數值 (成立訂單使用)
  manualDigitsI18n: [], // 選擇位數i18n
  defaultManualDigits: [], // 預設選擇位數值
  minChooseManualDigits: 0, // 最少選擇位數

  displayBallBonus: false,  // 是否顯示個別球最高獎金  2017.06.02 added by G
  prizeTypeMapping: {},   // prizeType對照
  isShowHotGapTabs: true,
  rowMulti: true, // 每一列球號是否多選 false:每一列球號不能相同
  ballShowWithDice: false,
  ballShowPosition: '', // 組態球要顯示的位置
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
