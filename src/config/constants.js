
export const liveStreamConfig = {
  blockTime: 600,
};

export const BetType = {
  normal: 1,
  manual: 2,
  upload: 4,
};

export const LHCConfig = {
  groupCode: 'LHC',
  games: {
    HK6: {
      code: 'HK6',
      id: 25,
    },
  },
  playCategory: {
    // 色波
    color: 1,
    BSOE: 2,
    tailBS: 3,
    TOSumBSOE: 4,
    headTail: 5,
    // 生肖
    chineseZodiac: 6,
    // 天地家野前後
    chineseZodiacCategory: 7,
  },
};
export const PCBConfig = {
  groupCode: 'PCB',
  playCategory: {
    color: 11,
    BSOE: 10,
    extremum: 12,
  },
};

export const K3Config = {
  groupCode: 'K3',
};

export const ORDER_STATUS = {
  NotDrawYet: 2,
  Winning: 4,
  NotWinning: 5,
  HitCancel: 6,
  ShownCancel: 7,
  PlayerCancel: 8,
  EmptyDrawDrawback: 12,
  SystemDrawback: 14,
  SuperDrawback: 15,
  Tie: 16,
};

// account control
export const URL = {
  topUp: '',
  withdraw: '',
};

export const PrizeModeKey = {
  1: 'Lott',
  2: 'ZY',
  3: 'Elott',
};

export const PlayModeKey = {
  1: 'Tradition',
  2: 'Entertainment',
};

export const merchantCode = {
  b2c: [
    'fenghuangcai',
    'caihong',
    '500cai',
    'deleasia',
    'tcgdemo',
    'haocai',
    'hccdemo',
    'hongda',
    'xinying',
    'cxstar',
    'wbcity',
    '2000cai',
    'botianxia',
    'boyifang',
    'heying',
    'wangzhe',
    'huashan',
    'fafacai',
    'demov1',
    'alading',
  ],
};

// playmenu要往前提的玩法
// [merchant] ; [playId]
export const fixedPlayMenuMerchantSetting = {
  fulicp: [1930],
};

// group要往前提的玩法
// [merchant] ; [gameGroup]
export const fixedGroupMerchantSetting = {
  fulicp: ['K3'],
};

export default {};
