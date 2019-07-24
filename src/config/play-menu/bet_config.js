import { Record } from 'immutable';

// 投注參數
// 機選參數
// 購物車顯示參數
const BetConfigRecord = Record({
  // 該玩法是否需要每列拆開成立訂單
  isBetSlipByRow: false,
  // 該玩法是否需要每顆球成立訂單
  isBetSlipByBall: false,
  // 該玩法是否需要依列作球組合
  isBetMatchBallRow: false,
  // 該玩法是否需要依注數組合 for K3 二同號單選
  isBetSlipByStake: false,
  // 機選: 每列最少球數
  minBalls: [],
  // 機選: 最少選幾列, -1 表示不限制
  minRows: -1,
  // 機選: 球(列)可否重複
  canRandomDuplicateBall: true,
});

const groupBetConfigSSC = {
  // 定位膽
  FixedPlace: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_Last_4: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_Last_3: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_Last_2: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_Last_1: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_ZY: BetConfigRecord({
    isBetSlipByRow: true,
  }),


    // 不定位組選
  First4Choose1Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First4Choose2Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
    minBalls: [2],
  }),
  Last4Choose1Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last4Choose2Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
    minBalls: [2],
  }),
  First3Choose2Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
    minBalls: [2],
  }),
  Mid3Choose2Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
    minBalls: [2],
  }),
  Last3Choose2Any_SSC: BetConfigRecord({
    isBetSlipByRow: true,
    minBalls: [2],
  }),
  // 和值
  First3Sum: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Middle3Sum: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last3Sum: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First2Sum: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last2Sum: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Any2Sum_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Any3Sum_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  // 龍虎和
  Dragon_Tiger_10T_T_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_10T_H_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_10T_10_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_10T_1_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_T_H_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_T_10_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_T_1_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_H_10_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_H_1_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Dragon_Tiger_10_1_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),

  // 任選組選
  Any2Com_SSC: BetConfigRecord({
    minBalls: [2],
  }),
  Any3Com3_SSC: BetConfigRecord({
    minBalls: [2],
  }),
  Any3Com6_SSC: BetConfigRecord({
    minBalls: [3],
  }),
  Any4Com12_SSC: BetConfigRecord({
    minBalls: [1, 2],
    canRandomDuplicateBall: false,
  }),
  Any4Com6_SSC: BetConfigRecord({
    minBalls: [2],
  }),
  Any4Com4_SSC: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  Any4Com24_SSC: BetConfigRecord({
    minBalls: [4],
  }),
  AllCom120: BetConfigRecord({
    minBalls: [5],
  }),
  AllCom60: BetConfigRecord({
    minBalls: [1, 3],
    canRandomDuplicateBall: false,
  }),
  AllCom30: BetConfigRecord({
    minBalls: [2, 1],
    canRandomDuplicateBall: false,
  }),
  AllCom20: BetConfigRecord({
    minBalls: [1, 2],
    canRandomDuplicateBall: false,
  }),
  AllCom10: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  AllCom5: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  F4Com24: BetConfigRecord({
    minBalls: [4],
  }),
  F4Com12: BetConfigRecord({
    minBalls: [1, 2],
    canRandomDuplicateBall: false,
  }),
  F4Com6: BetConfigRecord({
    minBalls: [2],
  }),
  F4Com4: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  L4Com24: BetConfigRecord({
    minBalls: [4],
  }),
  L4Com12: BetConfigRecord({
    minBalls: [1, 2],
    canRandomDuplicateBall: false,
  }),
  L4Com6: BetConfigRecord({
    minBalls: [2],
  }),
  L4Com4: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First3StraightCom: BetConfigRecord({
    minBalls: [3],
  }),
  First3Com3: BetConfigRecord({
    minBalls: [2],
  }),
  First3Com6: BetConfigRecord({
    minBalls: [3],
  }),
  Middle3StraightCom: BetConfigRecord({
    minBalls: [3],
  }),
  Middle3Com3: BetConfigRecord({
    minBalls: [2],
  }),
  Middle3Com6: BetConfigRecord({
    minBalls: [3],
  }),
  Last3StraightCom: BetConfigRecord({
    minBalls: [3],
  }),
  Last3Com3: BetConfigRecord({
    minBalls: [2],
  }),
  Last3Com6: BetConfigRecord({
    minBalls: [3],
  }),
  First2Com: BetConfigRecord({
    minBalls: [2],
  }),
  Last2Com: BetConfigRecord({
    minBalls: [2],
  }),
  Any1: BetConfigRecord({
    minRows: 1,
  }),
  Any2: BetConfigRecord({
    minRows: 2,
  }),
  Any3: BetConfigRecord({
    minRows: 3,
  }),
  Any4: BetConfigRecord({
    minRows: 4,
  }),
  Different_3_K3: BetConfigRecord({
    minBalls: [3],
  }),
  Different_2_K3: BetConfigRecord({
    minBalls: [2],
  }),
  anyComChoose2: BetConfigRecord({
    minBalls: [2],
  }),
  anyComChoose3: BetConfigRecord({
    minBalls: [3],
  }),

  // 特殊號
  First3_Special_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First3_Special_3_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Middle3_Special_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Middle3_Special_3_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last3_Special_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last3_Special_3_SSC: BetConfigRecord({
    isBetSlipByRow: true,
  }),
};

const groupBetConfig11X5 = {
  OECounts_11X5: BetConfigRecord({
    isBetSlipByBall: true,
  }),
  '3rdDigit_11X5': BetConfigRecord({
    isBetSlipByBall: true,
  }),
  FixedPlace_11X5: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Any2_11X5: BetConfigRecord({
    minBalls: [2],
  }),
  Any3_11X5: BetConfigRecord({
    minBalls: [3],
  }),
  Any4_11X5: BetConfigRecord({
    minBalls: [4],
  }),
  Any5_11X5: BetConfigRecord({
    minBalls: [5],
  }),
  Any6_11X5: BetConfigRecord({
    minBalls: [6],
  }),
  Any7_11X5: BetConfigRecord({
    minBalls: [7],
  }),
  Any8_11X5: BetConfigRecord({
    minBalls: [8],
  }),
  First3Straight_11X5: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First3Com_11X5: BetConfigRecord({
    minBalls: [3],
  }),
  First2Straight_11X5: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First2Com_11X5: BetConfigRecord({
    minBalls: [2],
  }),
};

const groupBetConfigLF = {
  Last3Sum_LF: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last3ComSum_LF: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FixedPlace_LF: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  P3Sum_LF: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  P3ComSum_LF: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last3Com3_LF: BetConfigRecord({
    minBalls: [2],
  }),
  Last3Com6_LF: BetConfigRecord({
    minBalls: [3],
  }),
  First2Com_LF: BetConfigRecord({
    minBalls: [2],
  }),
  Last2Com_LF: BetConfigRecord({
    minBalls: [2],
  }),
  P3Com3_LF: BetConfigRecord({
    minBalls: [2],
  }),
  P3Com6_LF: BetConfigRecord({
    minBalls: [3],
  }),
  P5First2Com_LF: BetConfigRecord({
    minBalls: [2],
  }),
  P3Last2Com_LF: BetConfigRecord({
    minBalls: [2],
  }),
  Choose1_Fixed_Place_4D: BetConfigRecord({
    minRows: 1,
  }),
  Any2_Straight_4D: BetConfigRecord({
    minRows: 2,
  }),
  Any3_Straight_4D: BetConfigRecord({
    minRows: 3,
  }),
  Any4_Straight_4D: BetConfigRecord({
    minRows: 4,
  }),
  Choose2_Any_Code_4D: BetConfigRecord({
    minBalls: [2],
  }),
  Choose3_Any_Code_4D: BetConfigRecord({
    minBalls: [3],
  }),
};

const groupBetConfigPK10 = {
  First5Fixed_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last5Fixed_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First2Sum_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First3Sum_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  FirstLastSum_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First5BSOE_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Last5BSOE_PK10: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  First2_PK10: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First3_PK10: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First4_PK10: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
  First5_PK10: BetConfigRecord({
    canRandomDuplicateBall: false,
  }),
};

const groupBetConfigK3 = {
  Sum_K3: BetConfigRecord({
    isBetSlipByRow: true,
  }),
  Single_Same_3_K3: BetConfigRecord({
    isBetSlipByBall: true,
  }),
  Single_Same_2_K3: BetConfigRecord({
    isBetSlipByStake: true,
  }),
  Multi_Same_2_K3: BetConfigRecord({
    isBetSlipByBall: true,
  }),
};

// 手工錄入
const betConfigSingle = {
  Any2Com_SSC_Single: groupBetConfigSSC.Any2Com_SSC,
  Any2_Single: groupBetConfigSSC.Any2,
  Any3_Single: groupBetConfigSSC.Any3,
  Any4_Single: groupBetConfigSSC.Any4,
  Any2_11X5_Single: groupBetConfig11X5.Any2_11X5,
  Any3_11X5_Single: groupBetConfig11X5.Any3_11X5,
  Any4_11X5_Single: groupBetConfig11X5.Any4_11X5,
  Any5_11X5_Single: groupBetConfig11X5.Any5_11X5,
  Any6_11X5_Single: groupBetConfig11X5.Any6_11X5,
  Any7_11X5_Single: groupBetConfig11X5.Any7_11X5,
  Any8_11X5_Single: groupBetConfig11X5.Any8_11X5,
  First3Com_11X5_Single: groupBetConfig11X5.First3Com_11X5,
  First2Com_11X5_Single: groupBetConfig11X5.First2Com_11X5,
  Any2_Straight_Single_4D: groupBetConfigLF.Any2_Straight_4D,
  Any3_Straight_Single_4D: groupBetConfigLF.Any3_Straight_4D,
  Any4_Straight_Single_4D: groupBetConfigLF.Any4_Straight_4D,
};

export default {
  ...groupBetConfigSSC,
  ...groupBetConfig11X5,
  ...groupBetConfigLF,
  ...groupBetConfigPK10,
  ...betConfigSingle,
  ...groupBetConfigK3,
};
