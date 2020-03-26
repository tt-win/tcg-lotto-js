import { i18n } from 'locales';

// 根據玩法 球要顯示組態的位置
export const ballShowPosition = {
  TWO: 'TWO', // 第二球
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIRST_FIVE: 'FIRST_FIVE', // 前五球
  FIRST_FOUR: 'FIRST_FOUR',
  FIRST_THREE: 'FIRST_THREE',
  FIRST_TWO: 'FIRST_TWO',
  FIRST_ONE: 'FIRST_ONE',
  LAST_FIVE: 'LAST_FIVE', // 後五球
  LAST_FOUR: 'LAST_FOUR',
  LAST_THREE: 'LAST_THREE',
  LAST_TWO: 'LAST_TWO',
  LAST_ONE: 'LAST_ONE',
  FIRST_ONE_THREE: 'FIRST_ONE_THREE', // 前一、三球
  FIRST_ONE_FOUR: 'FIRST_ONE_FOUR',
  FIRST_ONE_FIVE: 'FIRST_ONE_FIVE',
  FIRST_ONE_TEN: 'FIRST_ONE_TEN',
  FIRST_TWO_THREE: 'FIRST_TWO_THREE',
  FIRST_TWO_FOUR: 'FIRST_TWO_FOUR',
  FIRST_TWO_FIVE: 'FIRST_TWO_FIVE',
  FIRST_TWO_NINE: 'FIRST_TWO_NINE',
  FIRST_THREE_FOUR: 'FIRST_THREE_FOUR',
  FIRST_THREE_FIVE: 'FIRST_THREE_FIVE',
  FIRST_THREE_EIGHT: 'FIRST_THREE_EIGHT',
  FIRST_FOUR_SEVEN: 'FIRST_FOUR_SEVEN',
  FIRST_FIVE_SIX: 'FIRST_FIVE_SIX',
  FIRST_TWO_TO_FOUR: 'FIRST_TWO_TO_FOUR', // 前二到四球
  LAST_TWO_THREE: 'LAST_TWO_THREE', // 後二、三球
  ALL: 'ALL', // 所有球
};

// 顯示組態文字的類型
export const ballConfigurationCategory = {
  CONFIGURATION_NUMBER: 'CONFIGURATION_NUMBER', // 組態數
  BALL_SUM: 'BALL_SUM', // 和值
  K3_BALL_SUM_BSOE: 'K3_BALL_SUM_BSOE', // K3和值大小單雙
  SPECIAL_NUMBER: 'SPECIAL_NUMBER', // 特殊號
  BALL_SPAN: 'BALL_SPAN', // 跨度
  SSC_BSOE: 'SSC_BSOE', // 時時彩 總和大小 總和單雙
  DRAGON_TIGER_TIE: 'DRAGON_TIGER_TIE', // 龍虎和
  OE_COUNT: 'OE_COUNT', // 幾單幾雙
  MIDDLE_NUMBER: 'MIDDLE_NUMBER', // 中位數
  K3_BSOE: 'K3_BSOE', // 大小單雙
  EMPTY: 'EMPTY', // 不顯示組態
};

export const showBZHList = ['SSC', '11X5', 'LF', 'K3']; // 要顯示組態文字的彩種

export const showBZHName = {
  BZ: i18n('winNoFragment.baozi'), // 豹子
  Z2: i18n('winNoFragment.com2'), // 組二
  Z3: i18n('winNoFragment.com3'), // 組三
  Z4: i18n('winNoFragment.com4'), // 組四
  Z5: i18n('winNoFragment.com5'), // 組五
  Z6: i18n('winNoFragment.com6'), // 組六
  Z12: i18n('winNoFragment.com12'), // 組12
  Z20: i18n('winNoFragment.com20'), // 組20
  Z24: i18n('winNoFragment.com24'), // 組24
  Z30: i18n('winNoFragment.com30'), // 組30
  Z60: i18n('winNoFragment.com60'), // 組60
  Z120: i18n('winNoFragment.com120'), // 組120
  HZ: i18n('betDigit.SUM'), // 和值
  PAIR: i18n('winNoFragment.pair'), // 對子
  EMPTY: '--', // 空開
};
