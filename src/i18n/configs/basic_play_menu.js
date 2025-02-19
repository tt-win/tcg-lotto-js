/**
 * original file name : play_menu_config.js & order_i18n_config.js
 *
 * 定義所有與 order 有關的多語系對應
 */

const groupSSCDigitsI18n = {
  digitsI18n: {
    0: 'startDigit.ones',
    1: 'startDigit.tens',
    2: 'startDigit.hundreds',
    3: 'startDigit.thousands',
    4: 'startDigit.tenThousands',
  },
};

const groupSSCManualDigitsI18n = {
  digitsI18n: {
    1: 'startDigit.tenThousands2',
    2: 'startDigit.thousands2',
    3: 'startDigit.hundreds2',
    4: 'startDigit.tens2',
    5: 'startDigit.ones2',
  },
};

const group11X5DigitsI18n = {
  digitsI18n: {
    4: 'startDigit.first',
    3: 'startDigit.second',
    2: 'startDigit.third',
    1: 'startDigit.fourth',
    0: 'startDigit.fifth',
  },
};

const groupPK10DigitsI18n = {
  digitsI18n: {
    0: 'startDigit.pk10_first',
    1: 'startDigit.pk10_second',
    2: 'startDigit.pk10_third',
    3: 'startDigit.pk10_fourth',
    4: 'startDigit.pk10_fifth',
    5: 'startDigit.pk10_sixth',
    6: 'startDigit.pk10_seventh',
    7: 'startDigit.pk10_eighth',
    8: 'startDigit.pk10_ninth',
    9: 'startDigit.pk10_tenth',
  },
};

// 顯示在購物車或訂單查詢 digits 多語系對應
// key: play_code, value: object, digitsI18n, 定義成object未來擴充用
export const orderDigitsI18n = {
  // 定位膽
  FixedPlace: { ...groupSSCDigitsI18n },
  FixedPlace_Last_4: { ...groupSSCDigitsI18n },
  FixedPlace_Last_3: { ...groupSSCDigitsI18n },
  FixedPlace_Last_2: { ...groupSSCDigitsI18n },
  FixedPlace_Last_1: { ...groupSSCDigitsI18n },
  FixedPlace_ZY: { ...groupSSCDigitsI18n },
  Any2Sum_SSC: { ...groupSSCManualDigitsI18n },
  Any2Com_SSC_Single: { ...groupSSCManualDigitsI18n },
  Any3Sum_SSC: { ...groupSSCManualDigitsI18n },
  Any2Com_SSC: { ...groupSSCManualDigitsI18n },
  Any3Com3_SSC: { ...groupSSCManualDigitsI18n },
  Any3Com_SSC: { ...groupSSCManualDigitsI18n },
  Any3Com6_SSC: { ...groupSSCManualDigitsI18n },
  Any4Com12_SSC: { ...groupSSCManualDigitsI18n },
  Any4Com6_SSC: { ...groupSSCManualDigitsI18n },
  Any4Com4_SSC: { ...groupSSCManualDigitsI18n },
  Any4Com24_SSC: { ...groupSSCManualDigitsI18n },
  FixedPlace_11X5: { ...group11X5DigitsI18n },
  FixedPlace_LF: { ...groupSSCDigitsI18n },
  First5Fixed_PK10: { ...groupPK10DigitsI18n },
  Last5Fixed_PK10: { ...groupPK10DigitsI18n },
  First5BSOE_PK10: { ...groupPK10DigitsI18n },
  Last5BSOE_PK10: { ...groupPK10DigitsI18n },
  Choose1_Fixed_Place_4D: { ...groupSSCDigitsI18n },
};

export default {};

// 彩種組預設玩法
export const groupCodeDefaultActive = {
  SSC: {
    defaultActive: 'Last_3',
    subPlayMenu: {
      defaultActive: 'Last3Straight',
    },
  },
  '11X5': {
    defaultActive: 'First_3_11X5',
    subPlayMenu: {
      defaultActive: 'First3Straight_11X5',
    },
  },
  PK10: {
    defaultActive: 'Fixed_Place_PK10',
    subPlayMenu: {
      defaultActive: 'First5Fixed_PK10',
    },
  },
  LF: {
    defaultActive: 'Last_3_3D',
    subPlayMenu: {
      defaultActive: 'Last3Straight_LF',
    },
  },
  K3: {
    defaultActive: 'Sum_Number_K3',
    subPlayMenu: {
      defaultActive: 'Sum_K3',
    },
  },
};
// 彩種客製化預設玩法
export const playMenuDefaultActive = {
  FC3D: {
    defaultActive: 'Last_3_3D',
    subPlayMenu: {
      defaultActive: 'Last3Straight_LF',
    },
  },
  TCP3P5: {
    defaultActive: 'P3_Straight_LF',
    subPlayMenu: {
      defaultActive: 'P3Straight_LF',
    },
  },
  HK6: {
    defaultActive: 'Special_LHC',
    subPlayMenu: {},
  },

  // 天彩TC
  TCSSC: {
    defaultActive: 'Last_3',
    subPlayMenu: {
      defaultActive: 'Last3Straight',
    },
  },
  TC11X5: {
    defaultActive: 'First_3_11X5',
    subPlayMenu: {
      defaultActive: 'First3Straight_11X5',
    },
  },
};

/**
 * H5 Used
 * */
export const defaultActivePlayMenu = {
  trad: {
    group: {
      SSC: {
        active: 'Last_3',
        subPlayMenu: {
          active: 'Last3Straight',
        },
      },
      '11X5': {
        active: 'First_3_11X5',
        subPlayMenu: {
          active: 'First3Straight_11X5',
        },
      },
      PK10: {
        active: 'Fixed_Place_PK10',
        subPlayMenu: {
          active: 'First5Fixed_PK10',
        },
      },
      LF: {
        active: 'Last_3_3D',
        subPlayMenu: {
          active: 'Last3Straight_LF',
        },
      },
      K3: {
        active: 'Sum_K3',
        subPlayMenu: {
          active: 'Sum_K3',
        },
      },
    },
    endsWith: {
      '3D': {
        active: 'Last_3_3D',
        subPlayMenu: {
          active: 'Last3Straight_LF',
        },
      },
      P5: {
        active: 'P3_Straight_LF',
        subPlayMenu: {
          active: 'P3Straight_LF',
        },
      },
    },
    // specific: {
    //   FC3D: {
    //     active: 'Last_3_3D',
    //     subPlayMenu: {
    //       active: 'Last3Straight_LF',
    //     },
    //   },
    //   TCP3P5: {
    //     active: 'P3_Straight_LF',
    //     subPlayMenu: {
    //       active: 'P3Straight_LF',
    //     },
    //   },
    // },
  },
  ent: {
    group: {
      SSC: {
        active: 'Combined_ENT',
      },
      '11X5': {
        active: 'Two_Side_11X5_ENT',
      },
      PK10: {
        active: 'Two_Side_PK10',
      },
      LHC: {
        active: 'Special_LHC',
      },
      PCB: {
        active: 'Combined_PCB',
      },
      K3: {
        active: 'Combined_K3_ENT',
      },
    },
  },
};

export const PlayMenu = {
  // BCR

  Banker_Player_Tie_Main_BCR: 2890,
  Banker_Pair_Main_BCR: 2891,
  Player_Pair_Main_BCR: 2892,
  Super_Six_Main_BCR: 2893,

  // Keno

  // 一級選單

  Any_KENO: 2647, // 任选
  Fun_KENO: 2656, // 趣味

  // 二級選單

  Any_L2_KENO: 2648, // 任选
  Total_Sum_BST_KENO: 2657, // 总和大小
  Total_Sum_OE_KENO: 2658, // 总和单双
  Total_Sum_PASS_KENO: 2659, // 总和过关
  UpDown_KENO: 2660, // 上下盘
  OddEven_KENO: 2661, // 奇偶盘
  WuXing_KENO: 2662, // 五行

  // 三級選單

  Any1_KENO: 2649, // 任选一
  Any2_KENO: 2650, // 任选二
  Any3_KENO: 2651, // 任选三
  Any4_KENO: 2652, // 任选四
  Any5_KENO: 2653, // 任选五
  Any6_KENO: 2654, // 任选六
  Any7_KENO: 2655, // 任选七

  Last1Straight: 13,
  FixedPlace: 14,
  Last2Straight: 15,
  Last2Com: 16,
  Last2Join: 19,
  Last2Sum: 20,
  Last3Straight: 21,
  Last3Com3: 23,
  Last3Com6: 24,
  Last3Com: 25,
  Last3Join: 26,
  Last3StraightCom: 27,
  Last3Sum: 28,
  Last4Straight: 29,
  Last4Join: 30,
  FixedPlace_Last_4: 2015,
  FixedPlace_Last_3: 2016,
  FixedPlace_Last_2: 2017,
  FixedPlace_Last_1: 2018,
  FixedPlace_ZY: 2014,
  First2Straight: 34,
  First2Com: 35,
  First2Split: 36,
  First2Join: 38,
  First2Sum: 39,
  First3Straight: 40,
  First3Com3: 42,
  First3Com6: 43,
  First3Com: 44,
  First3Join: 45,
  First3StraightCom: 46,
  First3Sum: 47,
  First4Straight: 48,
  First4Join: 49,
  Middle3Straight: 50,
  Middle3Com3: 52,
  Middle3Com6: 53,
  Middle3Com: 54,
  Middle3Join: 55,
  Middle3StraightCom: 56,
  Middle3Sum: 57,
  First4Straight_Single: 83,
  First4Join_Single: 84,
  Last4Straight_Single: 85,
  Last4Join_Single: 86,
  First3Straight_Single: 87,
  First3Join_Single: 88,
  Middle3Straight_Single: 89,
  Middle3Join_Single: 90,
  Last3Straight_Single: 91,
  Last3Join_Single: 92,
  First2Straight_Single: 93,
  First2Join_Single: 94,
  Last2Straight_Single: 95,
  Last2Join_Single: 96,

  First2Straight_LF: 1416,
  First2Straight_LF_Single: 112,
  P3Straight_LF: 1430,
  P3Straight_LF_Single: 114,
  P3Last2Straight_LF: 1440,
  P3Last2Straight_LF_Single: 116,
  P3Com_LF: 1434,
  P5First2Straight_LF: 1438,
  P5First2Straight_LF_Single: 115,
  All5Straight_LF: 2879,
  All5Straight_LF_Single: 2880,
  P5Last4Straight_LF: 2887,
  P5Last4Straight_LF_Single: 2888,

  FixedPlace_LF_FC3D: 1422,
  FixedPlace_LF_P3P5: 1447,
  FixedPlace_11X5: 923,

  First2BSOE: 62,
  Last2BSOE: 63,
  First2BSOE_LF: 1420,
  Last2BSOE_LF_FC3D: 1421,
  P5First2BSOE_LF: 1444,
  P3Last2BSOE_LF: 1445,
  Last2BSOE_LF_P3P5: 1446,

  OECounts_11X5: 916,

  AllCom120: 1601,
  AllCom60: 1602,
  AllCom30: 1603,
  AllCom20: 1604,
  AllCom10: 1605,
  AllCom5: 1606,

  F4Com24: 1607,
  F4Com12: 1608,
  F4Com6: 1609,
  F4Com4: 1610,

  L4Com24: 1611,
  L4Com12: 1612,
  L4Com6: 1613,
  L4Com4: 1614,

  // LF 4D
  Choose1_Fixed_Place_4D: 2246,
  Any2_Straight_4D: 2249,
  Any2_Straight_Single_4D: 2250,
  Any3_Straight_4D: 2253,
  Any3_Straight_Single_4D: 2254,
  Any4_Straight_4D: 2257,
  Any4_Straight_Single_4D: 2258,
  Choose2_Any_Code_4D: 2261,
  Choose3_Any_Code_4D: 2264,

  // 2017 0531 added by G 龍虎和
  Dragon_Tiger_10T_T_SSC: 1738,
  Dragon_Tiger_10T_H_SSC: 1739,
  Dragon_Tiger_10T_10_SSC: 1740,
  Dragon_Tiger_10T_1_SSC: 1741,
  Dragon_Tiger_T_H_SSC: 1742,
  Dragon_Tiger_T_10_SSC: 1743,
  Dragon_Tiger_T_1_SSC: 1744,
  Dragon_Tiger_H_10_SSC: 1745,
  Dragon_Tiger_H_1_SSC: 1746,
  Dragon_Tiger_10_1_SSC: 1747,

  // 2022 0110 added 新龍虎
  New_Dragon_Tiger_10T_T_SSC: 2665,
  New_Dragon_Tiger_10T_H_SSC: 2666,
  New_Dragon_Tiger_10T_10_SSC: 2667,
  New_Dragon_Tiger_10T_1_SSC: 2668,
  New_Dragon_Tiger_T_H_SSC: 2669,
  New_Dragon_Tiger_T_10_SSC: 2670,
  New_Dragon_Tiger_T_1_SSC: 2671,
  New_Dragon_Tiger_H_10_SSC: 2672,
  New_Dragon_Tiger_H_1_SSC: 2673,
  New_Dragon_Tiger_10_1_SSC: 2674,

  // 2017 0607 added by G 不定位新玩法
  First2ComAnyCode: 64,
  First2StraightAnyCode: 65,
  First3ComAnyCode1: 66,
  First3ComAnyCode2: 67,
  First3StraightAnyCode1: 68,
  First3StraightAnyCode2: 69,
  Last2ComAnyCode: 70,
  Last2StraightAnyCode: 71,
  Last3ComAnyCode1: 72,
  Last3ComAnyCode2: 73,
  Last3StraightAnyCode1: 74,
  Last3StraightAnyCode2: 75,
  Middle3ComAnyCode1: 76,
  Middle3ComAnyCode2: 77,
  Middle3StraightAnyCode1: 78,
  Middle3StraightAnyCode2: 79,
  Last4StraightAnyCode1_SSC: 1748, // 四星一码不定位
  Last4StraightAnyCode2_SSC: 1749, // 四星二码不定位
  AllStraightAnyCode1_SSC: 1750, // 五星一码不定位
  AllStraightAnyCode2_SSC: 1751, // 五星二码不定位
  AllStraightAnyCode3_SSC: 1752, // 五星三码不定位
  anyComChoose2: 2029, // 五星二码 組選不定位
  anyComChoose3: 2030, // 五星三码 組選不定位

  // 趣味玩法
  AnyShow1_SSC: 169,
  AnyShow2_SSC: 170,
  AnyShow3_SSC: 171,
  AnyShow4_SSC: 172,

  // ENT
  Combined_ENT: 1753,
  First_ENT: 1754,
  Second_ENT: 1764,
  Third_ENT: 1774,
  Fourth_ENT: 1784,
  Fifth_ENT: 1794,
  Two_Side_ENT: 1828,
  Dragon_Tiger_Tie_ENT: 1841,
  Five_Have_One_ENT: 1853,
  NN_SSC_MAIN_ENT: 2019,
  HK5_SSC_MAIN_ENT: 2026,

  Any4Com24_SSC: 174,
  Any4Com12_SSC: 175,
  Any4Com6_SSC: 176,
  Any4Com4_SSC: 177,
  Any3Sum_SSC: 178,
  Any3Com3_SSC: 179,
  Any3Com6_SSC: 180,
  Any3Com_SSC: 181,
  Any2Sum_SSC: 182,
  Any2Com_SSC: 183,
  Any2Com_SSC_Single: 184,

  Special_Zodiac_LHC: 1691,
  Not_Winning_Numbers_LHC: 1688,
  Normal_FirstToSixth_LHC: 1657,
  Normal_Special_Animal_Or_Tail_LHC: 1654,
  Head_Tail_LHC: 1649,
  Two_Sides_LHC: 1642,
  Color_LHC: 1634,
  Normal_Fixed_Place_LHC: 1622,
  Normal_LHC: 1619,
  Special_LHC: 1615,
  Special_Combine_Zodiac_LHC: 1728,
  Join_Zodiac: 2031,
  Join_Main_LHC: 2040,

  Special_Combine_Chinese_Zodiac_LHC: 1730,
  SpecialA_Animal_LHC: 1713,
  Fixed_Sixth_Color_LHC: 1712,
  Fixed_Sixth_BSOE_LHC: 1710,
  Fixed_Fifth_Color_LHC: 1709,
  Fixed_Fifth_BSOE_LHC: 1707,
  Fixed_Fourth_Color_LHC: 1706,
  Fixed_Fourth_BSOE_LHC: 1704,
  Fixed_Third_Color_LHC: 1703,
  Fixed_Third_BSOE_LHC: 1701,
  Fixed_Second_Color_LHC: 1700,
  Fixed_Second_BSOE_LHC: 1698,
  Fixed_First_Color_LHC: 1697,
  Normal_First_TOSum_BSOE_LHC: 1665,
  Fixed_First_TOSum_OE_LHC: 1696,
  Fixed_Second_TOSum_OE_LHC: 1699,
  Fixed_Third_TOSum_OE_LHC: 1702,
  Fixed_Fourth_TOSum_OE_LHC: 1705,
  Fixed_Fifth_TOSum_OE_LHC: 1708,
  Fixed_Sixth_TOSum_OE_LHC: 1711,
  Fixed_First_BSOE_LHC: 1695,
  Normal_Special_One_Zodiac_LHC: 1694,
  Special_Zodiac_Straight_LHC: 1693,
  Normal_Sixth_Tail_BS_LHC: 1687,
  Normal_Sixth_TOSum_BSOE_LHC: 1685,
  Normal_Fifth_Tail_BS_LHC: 1683,
  Normal_Fifth_TOSum_BSOE_LHC: 1681,
  Normal_Fourth_Tail_BS_LHC: 1679,
  Normal_Fourth_TOSum_BSOE_LHC: 1677,
  Normal_Third_Tail_BS_LHC: 1675,
  Normal_Third_TOSum_BSOE_LHC: 1673,
  Normal_Second_Tail_BS_LHC: 1671,
  Normal_Second_TOSum_BSOE_LHC: 1669,
  Normal_First_Tail_BS_LHC: 1667,
  Normal_Special_Tail_No_LHC: 1656,
  Head_Tail_Special_LHC: 1651,
  Two_Sides_Total_Sum_BSOE_LHC: 1648,
  Special_Animal_LHC: 1714,
  Special_TOSum_BSOE_LHC: 1641,
  Special_Tail_BS_LHC: 1639,
  Special_BS_OE_LHC: 1633,
  SpecialA_TOSum_BSOE_LHC: 1640,
  SpecialA_Tail_BS_LHC: 1638,
  Color_BS_OE_LHC: 1637,
  Color_BSOE_LHC: 1636,
  Color_Straight_LHC: 1635,
  // 特碼
  SpecialA_BS_OE_LHC: 1632,
  Special_BSOE_LHC: 1631,
  SpecialA_BSOE_LHC: 1630,
  Sixth_Fixed_LHC: 1628,
  Fifth_Fixed_LHC: 1627,
  Fourth_Fixed_LHC: 1626,
  Third_Fixed_LHC: 1625,
  Second_Fixed_LHC: 1624,
  First_Fixed_LHC: 1623,
  Normal_Straight_LHC: 1621,
  SpecialA_Straight_LHC: 1617,
  SpecialB_Straight_LHC: 1618,
  Normal_Sixth_LHC: 1663,
  Normal_Fifth_LHC: 1662,
  Normal_Fourth_LHC: 1661,
  Normal_Third_LHC: 1660,
  Normal_Second_LHC: 1659,
  Normal_First_LHC: 1658,
  Normal_Special_One_Zodiac_Straight_LHC: 1731,
  Normal_Special_Tail_LHC: 1655,
  Fixed_First_Fun_LHC: 1722,
  Fixed_Second_Fun_LHC: 1723,
  Fixed_Third_Fun_LHC: 1724,
  Fixed_Fourth_Fun_LHC: 1725,
  Fixed_Fifth_Fun_LHC: 1726,
  Fixed_Sixth_Fun_LHC: 1727,
  // 連肖
  Two_Join_Zodiac_Main_LHC: 2032,
  Two_Join_Zodiac_LHC: 2033,
  Three_Join_Zodiac_Main_LHC: 2034,
  Three_Join_Zodiac_LHC: 2035,
  Four_Join_Zodiac_Main_LHC: 2036,
  Four_Join_Zodiac_LHC: 2037,
  Five_Join_Zodiac_Main_LHC: 2038,
  Five_Join_Zodiac_LHC: 2039,
  // 連碼
  Two_In_Normal_Main_LHC: 2041,
  Two_In_Normal_LHC: 2042,
  Three_In_Normal_Main_LHC: 2043,
  Three_In_Normal_LHC: 2044,
  Four_In_Normal_Main_LHC: 2045,
  Four_In_Normal_LHC: 2046,
  Two_Of_Three_In_Normal_Main_LHC: 2047,
  Two_Of_Three_In_Normal_LHC: 2048,
  Two_In_Normal_Or_Special_Main_LHC: 2049,
  Two_In_Normal_Or_Special_LHC: 2050,
  In_Normal_And_Special_Main_LHC: 2051,
  In_Normal_And_Special_LHC: 2052,
  // 自選不中
  Not_Winning_Numbers_Straight_LHC: 1689,
  '5_Not_in_Winning_Numbers_Main_LHC': 2147,
  '6_Not_in_Winning_Numbers_Main_LHC': 2149,
  '7_Not_in_Winning_Numbers_Main_LHC': 2151,
  '8_Not_in_Winning_Numbers_Main_LHC': 2153,
  '9_Not_in_Winning_Numbers_Main_LHC': 2155,
  '10_Not_in_Winning_Numbers_Main_LHC': 2157,
  '11_Not_in_Winning_Numbers_Main_LHC': 2159,
  '12_Not_in_Winning_Numbers_Main_LHC': 2161,
  Choose_Not_in_Winning_Numbers_LHC: 1690,
  '5_Not_in_Winning_Numbers_LHC': 2148,
  '6_Not_in_Winning_Numbers_LHC': 2150,
  '7_Not_in_Winning_Numbers_LHC': 2152,
  '8_Not_in_Winning_Numbers_LHC': 2154,
  '9_Not_in_Winning_Numbers_LHC': 2156,
  '10_Not_in_Winning_Numbers_LHC': 2158,
  '11_Not_in_Winning_Numbers_LHC': 2160,
  '12_Not_in_Winning_Numbers_LHC': 2162,

  // 11x5 任選膽拖
  Any2_Dantuo_11X5: 2572,
  Any3_Dantuo_11X5: 2573,
  Any4_Dantuo_11X5: 2574,
  Any5_Dantuo_11X5: 2575,
  Any6_Dantuo_11X5: 2576,
  Any7_Dantuo_11X5: 2577,
  Any8_Dantuo_11X5: 2578,

  // ENT config
  Dragon_Tiger_Tie_5_4_ENT: 1843,
  Dragon_Tiger_Tie_5_3_ENT: 1844,
  Dragon_Tiger_Tie_5_2_ENT: 1845,
  Dragon_Tiger_Tie_4_3_ENT: 1847,
  Dragon_Tiger_Tie_4_2_ENT: 1848,
  Dragon_Tiger_Tie_4_1_ENT: 1849,
  Dragon_Tiger_Tie_3_2_ENT: 1850,
  Dragon_Tiger_Tie_3_1_ENT: 1851,
  Dragon_Tiger_Tie_2_1_ENT: 1852,
  Five_Have_One_Straight_ENT: 1855,
  // ENT兩面
  // ENT整合
  Combine_First_Straight_ENT: 1805,
  Combine_First_BSOE_ENT: 1806,
  Combine_Second_Straight_ENT: 1808,
  Combine_Second_BSOE_ENT: 1809,
  Combine_Third_Straight_ENT: 1811,
  Combine_Third_BSOE_ENT: 1812,
  Combine_Fourth_Straight_ENT: 1814,
  Combine_Fourth_BSOE_ENT: 1815,
  Combine_Fifth_Straight_ENT: 1817,
  Combine_Fifth_BSOE_ENT: 1818,
  Combine_First3_ENT: 1820,
  Combine_Middle3_ENT: 1822,
  Combine_Last3_ENT: 1824,
  Combine_Total_Sum_ENT: 1826,
  Combine_Dragon_Tiger_Tie_ENT: 1827,

  // PK10
  First1_PK10: 1457,
  First2_PK10: 1458,
  First3_PK10: 1459,
  First4_PK10: 1460,
  First5_PK10: 1461,
  First5Fixed_PK10: 1462,
  Last5Fixed_PK10: 1463,
  // 猜和值 與 定位膽 playcode與傳統重複..
  First2Sum_PK10: 1464,
  First3Sum_PK10: 1465,
  FirstLastSum_PK10: 1466,
  SixToTenthPlace_PK10: 9999,
  // =====================================
  First5BSOE_PK10: 1467,
  Last5BSOE_PK10: 1468,
  First2SumBSOE_PK10: 1469,
  Dragon_Tiger_1_VS_10: 1470,
  Dragon_Tiger_2_VS_9: 1471,
  Dragon_Tiger_3_VS_8: 1472,
  Dragon_Tiger_4_VS_7: 1473,
  Dragon_Tiger_5_VS_6: 1474,

  // ENT PK10
  Quick_Play_PK10: 99999,
  Two_Side_PK10: 1856,
  Sum_PK10: 1884,
  // 猜和值 與 定位膽 playcode與傳統重複..
  // 現在只有娛樂城玩法使用playcode, 之後如果有要使用playMenu.[playCode] 指向傳統玩法的話需要特別留意
  // First2Sum_PK10: 1885,
  // First3Sum_PK10: 1886,
  // FirstLastSum_PK10: 1887,
  Fixed_Place_PK10: 1888,
  // =====================================
  Dragon_Tiger_PK10: 1899,
  FirstPlace_PK10: 1889,
  SecondPlace_PK10: 1890,
  ThirdPlace_PK10: 1891,
  FourthPlace_PK10: 1892,
  FifthPlace_PK10: 1893,
  SixthPlace_PK10: 1894,
  SeventhPlace_PK10: 1895,
  EighthPlace_PK10: 1896,
  NinthPlace_PK10: 1897,
  TenthPlace_PK10: 1898,

  // ENT PK10 兩面玩法 (Key與傳統重複..有另外改)
  Two_Side_First2SumBSOE_PK10: 1858,
  Two_Side_FirstPlace_PK10: 1860,
  Two_Side_FirstPlace_Dragon_PK10: 1861,
  Two_Side_SecondPlace_PK10: 1863,
  Two_Side_SecondPlace_Dragon_PK10: 1864,
  Two_Side_ThirdPlace_PK10: 1866,
  Two_Side_ThirdPlace_Dragon_PK10: 1867,
  Two_Side_FourthPlace_PK10: 1869,
  Two_Side_FourthPlace_Dragon_PK10: 1870,
  Two_Side_FifthPlace_PK10: 1872,
  Two_Side_FifthPlace_Dragon_PK10: 1873,
  Two_Side_SixthPlace_PK10: 1875,
  Two_Side_SeventhPlace_PK10: 1877,
  Two_Side_EighthPlace_PK10: 1879,
  Two_Side_NinthPlace_PK10: 1881,
  Two_Side_TenthPlace_PK10: 1883,
  // ENT PK10 龍虎鬥
  Dragon_Tiger_1_VS_10_PK10: 1861,
  Dragon_Tiger_2_VS_9_PK10: 1864,
  Dragon_Tiger_3_VS_8_PK10: 1867,
  Dragon_Tiger_4_VS_7_PK10: 1870,
  Dragon_Tiger_5_VS_6_PK10: 1873,

  // ENT PK10 番攤
  Fan_Tan_PK10: 2541,
  Fan_Tan_Fan_PK10: 2543,
  Fan_Tan_Jiao_PK10: 2545,
  Fan_Tan_Nian_PK10: 2547,
  Fan_Tan_BSOE_PK10: 2549,

  // 幸運28
  Combined_PCB: 1905,
  Special_PCB: 1906,
  SpecialSum_PCB: 1907,
  Two_Side_PCB: 1908,
  SpecialBSOE_PCB: 1909,
  Special_BS_OE_PCB: 1910,
  BOSE_WITH_TIE_PCB: 2163,
  BS_OE_WITH_TIE_PCB: 2164,
  BOSE_ONLY_TIE_PCB: 2165,
  BS_OE_ONLY_TIE_PCB: 2166,
  BOSE_ALL_KILL_PCB: 2167,
  BS_OE_ALL_KILL_PCB: 2168,
  Special_Extremum_BS_PCB: 1911,
  Color_PCB: 1913,
  Boazi_PCB: 1914,
  SpecialCom3_PCB: 1915,

  // K3
  Sum_K3: 1917,
  Single_Same_3_K3: 1919,
  All_Same_3_K3: 1920,
  Different_3_K3: 1922,
  All_Even_3_K3: 1924,
  Single_Same_2_K3: 1926,
  Multi_Same_2_K3: 1927,
  Different_2_K3: 1929,
  Sum_BS_OE_K3: 1931,
  Sum_Com_BS_OE_K3: 2236,
  Any_Code_Win_K3: 2240,
  Any_Code_Not_Win_K3: 2241,
  Show_Hand: 2271,
  Boazi_K3: 2272,
  Straight_K3: 2273,
  Com_3_K3: 2274,
  Half_Straight_K3: 2275,
  Different_SH_3_K3: 2276,
  All_Same_2_K3: 2277,
  All_Different_3_K3: 2278,

  // K3 ENT
  Combined_K3_ENT: 1932,
  Sum_K3_ENT: 1934,
  Sum_BS_OE_K3_ENT: 1936,
  Different_2_K3_ENT: 1938,
  Single_Same_K3_ENT: 1940,
  Boazi_K3_ENT: 1942,
  Any_Boazi_K3_ENT: 1943,
  Single_Same_2_K3_ENT: 1945,
  Sum_Baozi_Kill_K3_ENT: 2053, // 和值(豹子通杀)
  Sum_BS_OE_Baozi_Kill_K3_ENT: 2054, // 和值大小单双(豹子通杀)
  Red_Black_Combine_K3_Ent: 2227,
  Red_Black_Num_K3_Ent: 2228,
  Red_Num_Com_K3_Ent: 2229,
  Black_Num_Com_K3_Ent: 2230,
  Red_Num_BSOE_K3_ENT: 2269,
  Black_Num_BSOE_K3_ENT: 2270,
  SUM_COM_BS_OE_K3_ENT: 2238,
  Any_Code_Not_Win_K3_Ent: 2243,

  // 11x5 ENT
  Two_Side_11X5_ENT: 1946,
  Two_Side_Total_Sum_Group_11X5_ENT: 1948,
  Two_Side_First_BSOE_11X5_ENT: 1950,
  Two_Side_Second_BSOE_11X5_ENT: 1952,
  Two_Side_Third_BSOE_11X5_ENT: 1954,
  Two_Side_Fourth_BSOE_11X5_ENT: 1956,
  Two_Side_Fifth_BSOE_11X5_ENT: 1958,
  First_LV1_11X5_ENT: 1959,
  First_11X5_ENT: 1961,
  Second_LV1_11X5_ENT: 1964,
  Second_11X5_ENT: 1966,
  Third_LV1_11X5_ENT: 1969,
  Third_11X5_ENT: 1971,
  Fourth_LV1_11X5_ENT: 1974,
  Fourth_11X5_ENT: 1976,
  Fifth_LV1_11X5_ENT: 1979,
  Fifth_11X5_ENT: 1981,
  Any_11X5_ENT: 1984,
  Any1_11X5_ENT: 1986,
  Any2_11X5_ENT: 1987,
  Any3_11X5_ENT: 1988,
  Any4_11X5_ENT: 1989,
  Any5_11X5_ENT: 1990,
  Any6_11X5_ENT: 1991,
  Any7_11X5_ENT: 1992,
  Any8_11X5_ENT: 1993,
  Com_11X5_ENT: 1994,
  First2_Com_11X5_ENT: 1996,
  First3_Com_11X5_ENT: 1997,
  Straight_11X5_ENT: 1998,
  First2_Straight_11X5_ENT: 2000,
  First3_Straight_11X5_ENT: 2001,
  Dragon_Tiger_11X5_ENT: 2002,
  Dragon_Tiger_5_4_11X5_ENT: 2004,
  Dragon_Tiger_5_3_11X5_ENT: 2005,
  Dragon_Tiger_5_2_11X5_ENT: 2006,
  Dragon_Tiger_5_1_11X5_ENT: 2007,
  Dragon_Tiger_4_3_11X5_ENT: 2008,
  Dragon_Tiger_4_2_11X5_ENT: 2009,
  Dragon_Tiger_4_1_11X5_ENT: 2010,
  Dragon_Tiger_3_2_11X5_ENT: 2011,
  Dragon_Tiger_3_1_11X5_ENT: 2012,
  Dragon_Tiger_2_1_11X5_ENT: 2013,
  NN_SSC_ENT: 2021,
  NN_HAS_SSC_ENT: 2023,
  NN_SSC_BSOE_ENT: 2025,
  HK5_SSC_ENT: 2028,
  Sum_BSOE_SSC: 2071,
  Sum_BS_OE_SSC: 2072,
  First2_Baodan_SSC: 2073,
  Last2_Baodan_SSC: 2074,
  First3C_Baodan_SSC: 2075,
  Middle3_Baodan_SSC: 2076,
  Last3_Baodan_SSC: 2077,
  First2_Span_SSC: 2078,
  Last2_Span_SSC: 2079,
  First3C_Span_SSC: 2080,
  Middle3_Span_SSC: 2081,
  Last3_Span_SSC: 2082,
  First4Choose1Any_SSC: 2083,
  First4Choose2Any_SSC: 2084,
  Last4Choose1Any_SSC: 2085,
  Last4Choose2Any_SSC: 2086,
  First3Choose2Any_SSC: 2087,
  Mid3Choose2Any_SSC: 2088,
  Last3Choose2Any_SSC: 2089,
  First3_Special_SSC: 2113,
  First3_Special_3_SSC: 2114,
  Middle3_Special_SSC: 2115,
  Middle3_Special_3_SSC: 2116,
  Last3_Special_SSC: 2117,
  Last3_Special_3_SSC: 2118,

  // SEA V2 TL(天龍)

  // 一級選單

  // TL2D
  '1_Num_TL2D': 2735, // SEA TL2D 一星
  '2_Num_TL2D': 2741, // SEA TL2D 二星
  Fun_TL2D: 2746, // SEA TL2D 趣味

  // TL3D

  '2_Num_TL3D': 2684, // SEA TL3D 二數
  '3_Num_TL3D': 2689, // SEA TL3D 三數
  'Any_Place_TL3D': 2694, // SEA TL3D 跑數
  Fun_TL3D: 2750, // SEA TL3D 趣味

  // TL4D

  '2_Num_TL4D': 2697, // SEA TL4D 二數
  '3_Num_TL4D': 2702, // SEA TL4D 三數
  '4_Num_TL4D': 2707, // SEA TL4D 四數
  'Any_Place_TL4D': 2712, // SEA TL4D 跑數
  Fun_TL4D: 2755, // SEA TL4D 趣味

  // TL6D

  '2_Num_TL6D': 2715, // SEA TL6D 二數
  '3_Num_TL6D': 2720, // SEA TL6D 三數
  '4_Num_TL6D': 2725, // SEA TL6D 四數
  'Any_Place_TL6D': 2730, // SEA TL6D 跑數
  Fun_TL6D: 2761, // SEA TL6D 趣味

  // TL642

  LuckyPick_TL642: 3034, // SEA TL Lucky Pick
  '3_Num_TL642': 2894, // SEA TL 3D
  '2_Num_TL642': 2901, // SEA 2D
  '1_Num_TL642': 2908, // SEA 1D

  // TL645

  LuckyPick_TL645: 2918,
  '3_Num_TL645': 2923,
  '2_Num_TL645': 2930,
  '1_Num_TL645': 2937,

  // TL649

  LuckyPick_TL649: 2947,
  '3_Num_TL649': 2952,
  '2_Num_TL649': 2959,
  '1_Num_TL649': 2966,

  // TL655

  LuckyPick_TL655: 2976,
  '3_Num_TL655': 2981,
  '2_Num_TL655': 2988,
  '1_Num_TL655': 2995,

  // TL658

  LuckyPick_TL658: 3005,
  '3_Num_TL658': 3010,
  '2_Num_TL658': 3017,
  '1_Num_TL658': 3024,

  // TL2D37

  '1_Num_TL2D37': 3039, // SEA TL2D37 一星
  '2_Num_TL2D37': 3045, // SEA TL2D37 二星
  'Fun_TL2D37': 3050, // SEA TL2D37 趣味

  // 二級選單

  // TL2D
  FixedPlace_TL2D: 2736, // SEA TL2D 定位胆
  Any_TL2D: 2739, // SEA TL2D 任选
  Last_2_Straight_Main_TL2D: 2742, // SEA TL2D 二星直选
  Last_2_Combine_Main_TL2D: 2744,  // SEA TL2D 二星组选
  BSOE_TL2D: 2747 ,// SEA TL2D 大小单双


  // TL3D

  Last_2_Straight_Main_TL3D: 2685, // SEA TL3D 後二直選
  Last_2_Combine_Main_TL3D: 2687, // SEA TL3D 後二組選
  Last_3_Straight_Main_TL3D: 2690, // SEA TL3D 後三直選
  Last_3_Combine_Main_TL3D: 2692, // SEA TL3D 後三組選
  '1_At_Any_Last_2_Main_TL3D': 2695, // SEA TL3D 后二不定位
  BSOE_TL3D: 2751 ,// SEA TL3D 大小单双
  FixedPlace_TL3D: 2776, // SEA TL3D 定位胆

  // TL4D

  Last_2_Straight_Main_TL4D: 2698, // SEA TL4D 後二直選
  Last_2_Combine_Main_TL4D: 2700, // SEA TL4D 後二組選
  Last_3_Straight_Main_TL4D: 2703, // SEA TL4D 後三直選
  Last_3_Combine_Main_TL4D: 2705, // SEA TL4D 後三組選
  Last_4_Straight_Main_TL4D: 2708, // SEA TL4D 後四直選
  Last_4_Combine_Main_TL4D: 2710, // SEA TL4D 後四組選
  '1_At_Any_Last_2_Main_TL4D': 2713, // SEA TL4D 后二不定位
  BSOE_TL4D: 2756 ,// SEA TL4D 大小单双
  FixedPlace_TL4D: 2780, // SEA TL4D 定位胆

  // TL6D

  Last_2_Straight_Main_TL6D: 2716, // SEA TL6D 後二直選
  Last_2_Combine_Main_TL6D: 2718, // SEA TL6D 後二組選
  Last_3_Straight_Main_TL6D: 2721, // SEA TL6D 後三直選
  Last_3_Combine_Main_TL6D: 2723, // SEA TL6D 後三組選
  Last_4_Straight_Main_TL6D: 2726, // SEA TL6D 後四直選
  Last_4_Combine_Main_TL6D: 2728, // SEA TL6D 後四組選
  '1_At_Any_Last_2_Main_TL6D': 2731, // SEA TL6D 后二不定位
  BSOE_TL6D: 2762 ,// SEA TL6D 大小单双
  FixedPlace_TL6D: 2785, // SEA TL6D 定位胆

  // TL642

  LuckyPick_3_Main_TL642: 3035,
  LuckyPick_12_Main_TL642: 3037,
  '3_Num_Straight_TL642': 2895,
  '3_Num_Any_TL642': 2898,
  '2_Num_Straight_TL642': 2902,
  '2_Num_Any_TL642': 2905,
  FixedPlace_TL642: 2909,
  Any1_Main_TL642: 2916,

  // TL645

  LuckyPick_3_Main_TL645: 2919,
  LuckyPick_12_Main_TL645: 2921,
  '3_Num_Straight_TL645': 2924,
  '3_Num_Any_TL645': 2927,
  '2_Num_Straight_TL645': 2931,
  '2_Num_Any_TL645': 2934,
  FixedPlace_TL645: 2938,
  Any1_Main_TL645: 2945,

  // TL649

  LuckyPick_3_Main_TL649: 2948,
  LuckyPick_12_Main_TL649: 2950,
  '3_Num_Straight_TL649': 2953,
  '3_Num_Any_TL649': 2956,
  '2_Num_Straight_TL649': 2960,
  '2_Num_Any_TL649': 2963,
  FixedPlace_TL649: 2967,
  Any1_Main_TL649: 2974,

  // TL655

  LuckyPick_3_Main_TL655: 2977,
  LuckyPick_12_Main_TL655: 2979,
  '3_Num_Straight_TL655': 2982,
  '3_Num_Any_TL655': 2985,
  '2_Num_Straight_TL655': 2989,
  '2_Num_Any_TL655': 2992,
  FixedPlace_TL655: 2996,
  Any1_Main_TL655: 3003,

  // TL658

  LuckyPick_3_Main_TL658: 3006,
  LuckyPick_12_Main_TL658: 3008,
  '3_Num_Straight_TL658': 3011,
  '3_Num_Any_TL658': 3014,
  '2_Num_Straight_TL658': 3018,
  '2_Num_Any_TL658': 3021,
  FixedPlace_TL658: 3025,
  Any1_Main_TL658: 3032,

  // TL2D37

  'FixedPlace_TL2D37': 3040, // SEA TL2D37 定位胆
  'Any_TL2D37': 3043, // SEA TL2D37 任选
  'Last_2_Straight_Main_TL2D37': 3046, // SEA TL2D37 二星直选
  'Last_2_Combine_Main_TL2D37': 3048, // SEA TL2D37 二星组选
  'BSOE_TL2D37': 3051, // SEA TL2D37 大小单双

  // 三級選單

  // TL2D

  First_TL2D: 2737, // SEA TL2D 定位胆第一球
  Second_TL2D: 2738,  // SEA TL2D 定位胆第二球
  Any1_TL2D: 2740, // SEA TL2D 任选一

  Last_2_Straight_TL2D: 2743, // SEA TL2D 二星直选
  Last_2_Combine_TL2D: 2745,  // SEA TL2D 二星组选

  First_BSOE_TL2D: 2748, // SEA TL2D BSOE第一球
  Second_BSOE_TL2D: 2749, // SEA TL2D BSOE第二球

  // TL3D

  Last_2_Straight_TL3D: 2686, // SEA TL3D 上正二位数
  Last_2_Combine_TL3D: 2688, // SEA TL3D 上反二位数
  Last_3_Straight_TL3D: 2691, // SEA TL3D 上正三位数
  Last_3_Combine_TL3D: 2693, // SEA TL3D 上反三位数
  '1_At_Any_Last_2_TL3D': 2696, // SEA TL3D 上跑两位数

  First_BSOE_TL3D: 2752, // SEA TL3D BSOE第一球
  Second_BSOE_TL3D: 2753, // SEA TL3D BSOE第二球
  Third_BSOE_TL3D: 2754, // SEA TL3D BSOE第三球


  First_TL3D: 2777, // SEA TL3D 定位胆第一球
  Second_TL3D: 2778,  // SEA TL3D 定位胆第二球
  Third_TL3D: 2779,  // SEA TL3D 定位胆第三球

  // TL4D

  Last_2_Straight_TL4D: 2699, // SEA TL4D 上正二位数
  Last_2_Combine_TL4D: 2701, // SEA TL4D 上反二位数
  Last_3_Straight_TL4D: 2704, // SEA TL4D 上正三位数
  Last_3_Combine_TL4D: 2706, // SEA TL4D 上反三位数
  Last_4_Straight_TL4D: 2709, // SEA TL4D 上正四位数
  Last_4_Combine_TL4D: 2711, // SEA TL4D 上反四位数
  '1_At_Any_Last_2_TL4D': 2714, // SEA TL4D 上跑两位数

  First_BSOE_TL4D: 2757, // SEA TL4D BSOE第一球
  Second_BSOE_TL4D: 2758, // SEA TL4D BSOE第二球
  Third_BSOE_TL4D: 2759, // SEA TL4D BSOE第三球
  Forth_BSOE_TL4D: 2760, // SEA TL4D BSOE第四球

  First_TL4D: 2781, // SEA TL4D 定位胆第一球
  Second_TL4D: 2782,  // SEA TL4D 定位胆第二球
  Third_TL4D: 2783,  // SEA TL4D 定位胆第三球
  Fourth_TL4D: 2784,  // SEA TL4D 定位胆第四球

  // TL6D

  Last_2_Straight_TL6D: 2717, // SEA TL6D 上正二位数
  Last_2_Combine_TL6D: 2719, // SEA TL6D 上反二位数
  Last_3_Straight_TL6D: 2722, // SEA TL6D 上正三位数
  Last_3_Combine_TL6D: 2724, // SEA TL6D 上反三位数
  Last_4_Straight_TL6D: 2727, // SEA TL6D 上正四位数
  Last_4_Combine_TL6D: 2729, // SEA TL6D 上反四位数
  '1_At_Any_Last_2_TL6D': 2732, // SEA TL6D 上跑两位数

  First_BSOE_TL6D: 2763, // SEA TL6D BSOE第一球
  Second_BSOE_TL6D: 2764, // SEA TL6D BSOE第二球
  Third_BSOE_TL6D: 2765, // SEA TL6D BSOE第三球
  Forth_BSOE_TL6D: 2766, // SEA TL6D BSOE第四球
  Fifth_BSOE_TL6D: 2767, // SEA TL6D BSOE第5球
  Sixth_BSOE_TL6D: 2768, // SEA TL6D BSOE第6球

  First_TL6D: 2786, // SEA TL6D 定位胆第一球
  Second_TL6D: 2787,  // SEA TL6D 定位胆第二球
  Third_TL6D: 2788,  // SEA TL6D 定位胆第三球
  Fourth_TL6D: 2789,  // SEA TL6D 定位胆第四球
  Fifth_TL6D: 2790,  // SEA TL6D 定位胆第五球
  Sixth_TL6D: 2791,  // SEA TL6D 定位胆第六球

  // TL642

  LuckyPick_3_TL642: 3036,
  LuckyPick_12_TL642: 3038,
  First_3_Straight_TL642: 2896,
  Last_3_Straight_TL642: 2897,
  First_3_Any_TL642: 2899,
  Last_3_Any_TL642: 2900,
  First_2_Straight_TL642: 2903,
  Last_2_Straight_TL642: 2904,
  First_2_Any_TL642: 2906,
  Last_2_Any_TL642: 2907,
  First_TL642: 2910,
  Second_TL642: 2911,
  Third_TL642: 2912,
  Fourth_TL642: 2913,
  Fifth_TL642: 2914,
  Sixth_TL642: 2915,
  Any1_TL642: 2917,

  // TL645

  LuckyPick_3_TL645: 2920,
  LuckyPick_12_TL645: 2922,
  First_3_Straight_TL645: 2925,
  Last_3_Straight_TL645: 2926,
  First_3_Any_TL645: 2928,
  Last_3_Any_TL645: 2929,
  First_2_Straight_TL645: 2932,
  Last_2_Straight_TL645: 2933,
  First_2_Any_TL645: 2935,
  Last_2_Any_TL645: 2936,
  First_TL645: 2939,
  Second_TL645: 2940,
  Third_TL645: 2941,
  Fourth_TL645: 2942,
  Fifth_TL645: 2943,
  Sixth_TL645: 2944,
  Any1_TL645: 2946,

  // TL649

  LuckyPick_3_TL649: 2949,
  LuckyPick_12_TL649: 2951,
  First_3_Straight_TL649: 2954,
  Last_3_Straight_TL649: 2955,
  First_3_Any_TL649: 2957,
  Last_3_Any_TL649: 2958,
  First_2_Straight_TL649: 2961,
  Last_2_Straight_TL649: 2962,
  First_2_Any_TL649: 2964,
  Last_2_Any_TL649: 2965,
  First_TL649: 2968,
  Second_TL649: 2969,
  Third_TL649: 2970,
  Fourth_TL649: 2971,
  Fifth_TL649: 2972,
  Sixth_TL649: 2973,
  Any1_TL649: 2975,

  // TL655

  LuckyPick_3_TL655: 2978,
  LuckyPick_12_TL655: 2980,
  First_3_Straight_TL655: 2983,
  Last_3_Straight_TL655: 2984,
  First_3_Any_TL655: 2986,
  Last_3_Any_TL655: 2987,
  First_2_Straight_TL655: 2990,
  Last_2_Straight_TL655: 2991,
  First_2_Any_TL655: 2993,
  Last_2_Any_TL655: 2994,
  First_TL655: 2997,
  Second_TL655: 2998,
  Third_TL655: 2999,
  Fourth_TL655: 3000,
  Fifth_TL655: 3001,
  Sixth_TL655: 3002,
  Any1_TL655: 3004,

  // TL658

  LuckyPick_3_TL658: 3007,
  LuckyPick_12_TL658: 3009,
  First_3_Straight_TL658: 3012,
  Last_3_Straight_TL658: 3013,
  First_3_Any_TL658: 3015,
  Last_3_Any_TL658: 3016,
  First_2_Straight_TL658: 3019,
  Last_2_Straight_TL658: 3020,
  First_2_Any_TL658: 3022,
  Last_2_Any_TL658: 3023,
  First_TL658: 3026,
  Second_TL658: 3027,
  Third_TL658: 3028,
  Fourth_TL658: 3029,
  Fifth_TL658: 3030,
  Sixth_TL658: 3031,
  Any1_TL658: 3033,

  // TL2D37

  'First_TL2D37': 3041, // SEA TL2D37 第一球
  'Second_TL2D37': 3042, // SEA TL2D37 第二球
  'Any1_TL2D37': 3044, // SEA TL2D37 任选一
  'Last_2_Straight_TL2D37': 3047, // SEA TL2D37 二星直选
  'Last_2_Combine_TL2D37': 3049, // SEA TL2D37 二星组选
  'First_BSOE_TL2D37': 3052, // SEA TL2D37 第一球
  'Second_BSOE_TL2D37': 3053, // SEA TL2D37 第二球

  // THAI

  // 一級選單

  Last_3_THAI: 2055,
  '2_Star_THAI': 2060,
  Any_Place_THAI: 2067,
  Hoo_Hey_How_Main_THAI: 2297, // 魚蝦蟹
  Hoo_Hey_How_Play_THAI: 2299, // 魚蝦蟹
  Fan_Tan_THAI: 2497,
  Fan_Tan_Fan_THAI: 2499,
  Fan_Tan_Jiao_THAI: 2501,
  Fan_Tan_Nian_THAI: 2503,
  Fan_Tan_BSOE_THAI: 2505,

  // 二級選單

  // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
  LAST_3_STRAIGHT_THAI: 2057, // 上正三位数
  LAST_3_COMBINE_THAI: 2059, // 上反三位数
  LAST_2_STRAIGHT_THAI: 2062, // 上正二位数
  LAST_2_COMBINE_THAI: 2064, // 上反二位数
  '2_STRAIGHT_ADD_THAI': 2066, // 下正二位数
  '1_AT_ANY_LAST_3_THAI': 2069, // 上跑三位数
  Prize_2_Straight_THAI: 2645, // 二等三位数
  Special_Prize_2_Straight_THAI: 2646, // 二特三位数

  Any_Roll_Last_2_North_VNC: 2517, // 北部 - 后二包胆
  Any_Roll_Last_3_North_VNC: 2521, // 北部 - 后三包胆
  Any_Roll_Last_4_North_VNC: 2525, // 北部 - 后四包胆

  Any_Roll_Last_2_South_VNC: 2530, // 中南部 - 后二包胆
  Any_Roll_Last_3_South_VNC: 2534, // 中南部 - 后三包胆
  Any_Roll_Last_4_South_VNC: 2538, // 中南部 - 后四包胆

  Any_Roll_Last_2_1K_North_VNC: 2641, // 北部 - 后二包胆1K
  Any_Roll_Last_2_1K_South_VNC: 2642, // 中南部 - 后二包胆1K

  Any_Roll_First_2_North_VNC: 3054, // 北部 - 前二包胆
  Any_Roll_First_2_1K_North_VNC: 3055, // 北部 - 前二包胆1K
  Any_Roll_First_2_South_VNC: 3056, // 中南部 - 前二包胆
  Any_Roll_First_2_1K_South_VNC: 3057, // 中南部 - 前二包胆1K

  // 三級選單

  Last_3_Straight_THAI_Multi: 2485, // 上正三位数（复式）
  Last_3_Straight_THAI_Single: 2486, // 上正三位数（单式）
  Last_3_Combine_THAI_Multi: 2487, // 上反三位数（复式）
  '2_Straight_Add_THAI_Multi': 2480, // 下正二位数（复式）
  '2_Straight_Add_THAI_Single': 2481, // 下正二位数（单式）
  Last_2_Combine_THAI_Multi: 2482, // 上反二位数（复式）
  Last_2_Straight_THAI_Multi: 2483, // 上正二位数（复式）
  Last_2_Straight_THAI_Single: 2484, // 上正二位数（单式）

  // vnc 越南彩

  // 一級選單

  Last_4_VNC: 2090, // 四數
  Last_3_VNC: 2095, // 三數
  '2_Star_VNC': 2100, // 二數
  Any_Place_VNC: 2105, // 跑數

  Any_Roll_North_VNC: 2515, // 北部 - 包膽
  Any_Roll_South_VNC: 2528, // 中南部 - 包膽

  Not_Winning_Numbers_North_VNC: 2550, // 北部 - 逆向
  Not_Winning_Numbers_South_VNC: 2560, // 中南部 - 逆向

  Bunch_North_VNC: 2598, // 北部 串组 - 一級選單
  Bunch_South_VNC: 2608, // 中南部 串组 - 一級選單

  Hoo_Hey_How_Main_VNC: 2300, // 魚蝦蟹
  Fan_Tan_VNC: 2488, // 番攤

  SicBO_VK3: 2618, // 骰寶快三

  First_To_Tenth_VPK10: 2624, // 极速PK10 - 第1-10名排名
  First_Second_Sum_VPK10: 2627, // 极速PK10 - 冠亚和值
  Dragon_Tiger_VPK10: 2630, // 极速PK10 - 龙虎斗

  // 二級選單

  Single_Dice_Main_VK3: 2619, // 骰寶快三 - 单骰
  Dice_Sum_Main_VK3: 2620, // 骰寶快三 - 和值
  Surround_Dice_Main_VK3: 2621, // 骰寶快三 - 围骰
  All_Surround_Dice_Main_VK3: 2622, // 骰寶快三 - 全围
  Dice_BSOE_Main_VK3: 2623, // 骰寶快三 - 大小单双

  First_To_Tenth_Guess_Rank_VPK10: 2625, // 极速PK10 - 第1-10名排名-二級選單
  First_To_Tenth_BSOE_VPK10: 2626, // 极速PK10 - 第1-10名-大小单双
  First_Second_Sum_Main_VPK10: 2628, // 极速PK10 - 冠亚和值-二級選單
  First_Second_Sum_BSOE_VPK10: 2629, // 极速PK10 - 冠亚和值-大小单双
  Dragon_Tiger_Main_PK10: 2631, // 极速PK10 - 龙虎斗-二級選單

  // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
  LAST_4_STRAIGHT_1ST_VNC: 2092, // 上正四位数
  LAST_4_COMBINE_1ST_VNC: 2094, // 上反四位数
  LAST_3_STRAIGHT_1ST_VNC: 2097, // 上正三位数
  LAST_3_COMBINE_1ST_VNC: 2099, // 上反三位数
  LAST_2_STRAIGHT_1ST_VNC: 2102, // 上正二位数
  LAST_2_STRAIGHT_2ND_VNC: 2104, // 下正二位数
  LAST_2_ANY_1ST_VNC: 2107, // 上跑两位数
  LAST_2_ANY_2ND_VNC: 2109, // 下跑两位数

  Bunch_2_North_VNC: 2601, // 北部 串2组
  Bunch_3_North_VNC: 2604, // 北部 串3组
  Bunch_4_North_VNC: 2607, // 北部 串4组
  Bunch_2_South_VNC: 2611, // 中南部 串2组
  Bunch_3_South_VNC: 2614, // 中南部 串3组
  Bunch_4_South_VNC: 2617, // 中南部 串4组

  // 三級選單

  // 北部

  Any_Roll_Last_2_North_VNC_Multi: 2518, // 北部 - 后二包胆（复式）
  Any_Roll_Last_2_North_VNC_Single: 2519, // 北部 - 后二包胆（单式）
  Any_Roll_Last_3_North_VNC_Multi: 2522, // 北部 - 后三包胆（复式）
  Any_Roll_Last_3_North_VNC_Single: 2523, // 北部 - 后三包胆（单式）
  Any_Roll_Last_4_North_VNC_Multi: 2526, // 北部 - 后四包胆（复式）
  Any_Roll_Last_4_North_VNC_Single: 2527, // 北部 - 后四包胆（单式）

  '4_Not_Winning_Numbers_North_VNC': 2552, // 北部 - 四不中
  '4_Not_Winning_Numbers_Single_North_VNC': 2553, // 北部 - 四不中(单式)
  '8_Not_Winning_Numbers_North_VNC': 2555, // 北部 - 八不中
  '8_Not_Winning_Numbers_Single_North_VNC': 2556, // 北部 - 八不中(单式)
  '10_Not_Winning_Numbers_North_VNC': 2558, // 北部 - 十不中
  '10_Not_Winning_Numbers_Single_North_VNC': 2559, // 北部 - 十不中(单式)

  Last_2_1st_7th_North_VNC: 2585, // 北部 二数头尾
  Last_2_1st_7th_North_VNC_Single: 2586, // 北部 二数头尾 (单式)
  Last_2_1st_7th_North_VNC_Multi: 2587, // 北部 二数头尾（复式)
  Last_2_7th_North_VNC: 2588, // 北部 二数头
  Last_2_7th_North_VNC_Single: 2589, // 北部 二数头 (单式)
  Last_2_7th_North_VNC_Multi: 2590, // 北部 二数头（复式)

  // 中南部

  Any_Roll_Last_2_South_VNC_Multi: 2531, // 中南部 - 后二包胆（复式）
  Any_Roll_Last_2_South_VNC_Single: 2532, // 中南部 - 后二包胆（单式）
  Any_Roll_Last_3_South_VNC_Multi: 2535, // 中南部 - 后三包胆（复式）
  Any_Roll_Last_3_South_VNC_Single: 2536, // 中南部 - 后三包胆（单式）
  Any_Roll_Last_4_South_VNC_Multi: 2539, // 中南部 - 后四包胆（复式）
  Any_Roll_Last_4_South_VNC_Single: 2540, // 中南部 - 后四包胆（单式）

  '4_Not_Winning_Numbers_South_VNC': 2562, // 中南部 - 四不中
  '4_Not_Winning_Numbers_Single_South_VNC': 2563, // 中南部 - 四不中(单式)
  '8_Not_Winning_Numbers_South_VNC': 2565, // 中南部 - 八不中
  '8_Not_Winning_Numbers_Single_South_VNC': 2566, // 中南部 - 八不中(单式)
  '10_Not_Winning_Numbers_South_VNC': 2568, // 中南部 - 十不中
  '10_Not_Winning_Numbers_Single_South_VNC': 2569, // 中南部 - 十不中(单式)

  Last_2_1st_8th_South_VNC: 2592, // 中南部 二数头尾
  Last_2_1st_8th_South_VNC_Single: 2593, // 中南部 二数头尾 (单式)
  Last_2_1st_8th_South_VNC_Multi: 2594, // 中南部 二数头尾（复式)
  Last_2_8th_South_VNC: 2595, // 中南部 二数头
  Last_2_8th_South_VNC_Single: 2596, // 中南部 二数头 (单式)
  Last_2_8th_South_VNC_Multi: 2597, // 中南部 二数头(复式)

  // 以下不分南北部
  Last_4_Straight_1st_VNC_Multi: 2286, // 上正四位数（复式）
  Last_4_Straight_1st_VNC_Single: 2287, // 上正四位数（单式）

  Last_3_Straight_1st_VNC_Multi: 2284, // 上正三位数（复式）
  Last_3_Straight_1st_VNC_Single: 2285, // 上正三位数（单式）
  Last_3_Combine_1st_VNC_Multi: 2283, // 上反三位数（复式）

  Last_2_Straight_1st_VNC_Multi: 2279, // 上正二位数(复式)
  Last_2_Straight_1st_VNC_Single: 2280, // 上正二位数（单式）
  Last_2_Straight_2nd_VNC_Multi: 2281, // 下正二位数（复式）
  Last_2_Straight_2nd_VNC_Single: 2282, // 下正二位数（单式）

  Ten_Digit_1st_VNC: 2580, // 特等十位
  Unit_Digit_1st_VNC: 2581, // 特等个位
  Ten_Digit_2nd_VNC: 2582, // 一等十位
  Unit_Digit_2nd_VNC: 2583, // 一等个位

  Fixed_Place_4D_VNC: 263700, // VNC 4D 一数, 後端沒有的playId
  Fixed_Place_4D_Unit_VNC: 2637, // VNC 4D 一数 (個位)
  Fixed_Place_4D_Ten_VNC: 2638, // VNC 4D 一数 (十位)
  Fixed_Place_4D_hundred_VNC: 2639, // VNC 4D 一数 (百位)
  Fixed_Place_4D_Thousand_VNC: 2640, // VNC 4D 一数 (千位)

  Hoo_Hey_How_Play_VNC: 2302, // 魚蝦蟹
  Fan_Tan_Fan_VNC: 2490, // 番攤 - 番
  Fan_Tan_Jiao_VNC: 2492, // 番攤 - 角
  Fan_Tan_Nian_VNC: 2494, // 番攤 - 念
  Fan_Tan_BSOE_VNC: 2496, // 番攤 - 大小單雙

  Comb3_TL3D: 2863, // 三星 後三組3
  Comb6_TL3D: 2864, // 三星 後三組6
  Comb3_TL4D: 2865, // 四星 後三組3
  Comb6_TL4D: 2866, // 四星 後三組6
  Comb3_TL6D: 2867, // 六星 後三組3
  Comb6_TL6D: 2868, // 六星 後三組6

  // LAO 老挝彩

  // 一級選單

  '4_Num_LAO': 2127,
  '3_Num_LAO': 2132,
  '2_Num_LAO': 2137,
  Any_LAO: 2142,
  Hoo_Hey_How_Main_LAO: 2303, // 魚蝦蟹
  Hoo_Hey_How_Play_LAO: 2305, // 魚蝦蟹
  Fan_Tan_LAO: 2506,
  Fan_Tan_Fan_LAO: 2508,
  Fan_Tan_Jiao_LAO: 2510,
  Fan_Tan_Nian_LAO: 2512,
  Fan_Tan_BSOE_LAO: 2514,

  // 二級選單

  // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
  LAST_4_STRAIGHT_LAO: 2129, // 上正四位数
  LAST_4_COMBINE_LAO: 2131, // 上反四位数
  LAST_3_STRAIGHT_LAO: 2134, // 上正三位数
  LAST_3_COMBINE_LAO: 2136, // 上反三位数
  LAST_2_STRAIGHT_LAO: 2139, // 上正二位数
  FIRST_2_STRAIGHT_LAO: 2141, // 下正二位数
  LAST_2_ANY_LAO: 2144, // 上跑两位数
  FIRST_2_ANY_LAO: 2146, // 下跑两位数
  Fixed_Place_4D: 2632, // SEA 4D 一数

  // 三級選單

  Fixed_Place_4D_Unit: 2633, // SEA 4D 一数 (個位)
  Fixed_Place_4D_Ten: 2634, // SEA 4D 一数 (十位)
  Fixed_Place_4D_hundred: 2635, // SEA 4D 一数 (百位)
  Fixed_Place_4D_Thousand: 2636, // SEA 4D 一数 (千位)

  Last_2_Straight_LAO_Multi: 2288, // 上正四位数（单式）
  Last_2_Straight_LAO_Single: 2289, // 上正二位数（单式）
  First_2_Straight_LAO_Multi: 2290, // 下正二位数（复式）
  First_2_Straight_LAO_Single: 2291, // 下正二位数（单式）
  Last_3_Combine_LAO_Multi: 2292, // 上反三位数（复式）
  Last_3_Straight_LAO_Multi: 2293, // 上正三位数（复式）
  Last_3_Straight_LAO_Single: 2294, // 上正三位数（单式）
  Last_4_Straight_LAO_Multi: 2295, // 上正四位数（复式）
  Last_4_Straight_LAO_Single: 2296, // 上正四位数（单式）

  Baccarat_SSC_ENT: 2123,
  Baccarat_With_Pair_SSC_ENT: 2125,
  Baccarat_No_Pair_SSC_ENT: 2126,

  // LF3D ENT
  One_Word_Position_Main_LF: 2169, // 一字定位
  Hundreds_Fixed_Place_Main_LF: 2170, // 百定位
  Hundreds_Fixed_Place_LF: 2171, // 百定位
  Hundreds_BSOE_LF: 2172, // 大小单双
  Hundreds_Prime_And_Composite_LF: 2173, // 质合数
  Tens_Fixed_Place_Main_LF: 2174, // 十定位
  Tens_Fixed_Place_LF: 2175, // 十定位
  Tens_BSOE_LF: 2176, // 大小单双
  Tens_Prime_And_Composite_LF: 2177, // 质合数
  Units_Fixed_Place_Main_LF: 2178, // 个定位
  Units_Fixed_Place_LF: 2179, // 个定位
  Units_BSOE_LF: 2180, // 大小单双
  Units_Prime_And_Composite_LF: 2181, // 质合数
  One_Word_Combine_Main_LF: 2182, // 一字組合
  One_Word_Combine_L2_LF: 2183, // 一字組合
  One_Word_Combine_LF: 2184, // 一字組合
  Two_Word_Position_Main_LF: 2185, // 二字定位
  Hundreds_Tens_Fixed_Place_Main_LF: 2186, // 百十定位
  Hundreds_Tens_Fixed_Place_LF: 2187, // 百十定位
  Hundreds_Units_Fixed_Place_Main_LF: 2188, // 百个定位
  Hundreds_Units_Fixed_Place_LF: 2189, // 百个定位
  Tens_Units_Fixed_Place_Main_LF: 2190, // 十个定位
  Tens_Units_Fixed_Place_LF: 2191, // 十个定位
  Two_Word_Combine_Main_LF: 2192, // 二字組合
  Two_Word_Combine_Second_LF: 2193, // 二字組合
  Two_Word_Combine_LF: 2194, // 二字組合
  Two_Word_Sum_Main_LF: 2195, // 二字和数
  Hundreds_Tens_Sum_Main_LF: 2196, // 百十和数
  Hundreds_Tens_Sum_LF: 2197, // 百十和数
  Hundreds_Tens_Sum_Last_LF: 2198, // 百十和数尾数
  Hundreds_Units_Sum_Main_LF: 2199, // 百个和数
  Hundreds_Units_Sum_LF: 2200, // 百个和数
  Hundreds_Units_Sum_Last_LF: 2201, // 百个和数尾数
  Tens_Tens_Sum_Main_LF: 2202, // 十个和数
  Tens_Units_Sum_LF: 2203, // 十个和数
  Tens_Units_Sum_Last_LF: 2204, // 十个和数尾数
  Three_Word_Position_Main_LF: 2205, // 三字定位
  Hundreds_Tens_Units_Fixed_Place_Main_LF: 2206, // 百十个定位
  Hundreds_Tens_Units_Fixed_Place_LF: 2207, // 百十个定位
  Three_Word_Com_MAIN_LF: 2208, // 三字组合
  Three_Word_Com_Second_LF: 2209, // 三字组合
  Three_Word_Com_LF: 2210, // 三字组合
  Three_Word_Total_Sum_LF: 2211, // 三字和数
  Hundreds_Tens_Units_Sum_MAIN_LF: 2212, // 百十个和数
  Hundreds_Tens_Units_Sum_LF: 2213, // 百十个和数
  Hundreds_Tens_Units_Sum_Tail_LF: 2214, // 百十个和数尾数
  Hundreds_Tens_Units_Com3_MAIN_LF: 2215, // 组选三
  Hundreds_Tens_Units_Com3_Second_LF: 2216, // 组选三
  Hundreds_Tens_Units_Com3_LF: 2217, // 组选三
  Hundreds_Tens_Units_Com6_MAIN_LF: 2218, // 组选六
  Hundreds_Tens_Units_Com6_Second_LF: 2219, // 组选六
  Hundreds_Tens_Units_Com6_LF: 2220, // 组选六
  Span_LF: 2221, // 跨度
  Span_MAIN_LF: 2222, // 跨度
  Hundreds_Tens_Units_Span_LF: 2223, // 百十个跨度
  Hundreds_Tens_Span_LF: 2224, // 百十跨度
  Hundreds_Units_Span_LF: 2225, // 百个跨度
  Tens_Units_Span_LF: 2226, // 十个跨度
  // K3 ENT 龙虎和
  Dragon_Tiger_K3_Ent: 2231,
  Dragon_Tiger_1_VS_2_K3_Ent: 2233,
  Dragon_Tiger_1_VS_3_K3_Ent: 2234,
  Dragon_Tiger_2_VS_3_K3_Ent: 2235,
  // K3 Span
  Span_All_K3: 2266,
  Span_K3_Ent: 2267,
  Span_All_K3_Ent: 2268,
  // 3D_LF
  Last3Straight_LF: 1408,
  Last3Straight_LF_Single: 111,
  Last3Sum_LF: 1409,
  Last3Com3_LF: 1410,
  Last3Com6_LF: 1411,
  Last3ComSum_LF: 1412,
  Last3Com_LF: 1413,
  First2Com_LF: 1417,
  Last2Straight_LF: 1418,
  Last2Straight_LF_Single: 113,
  Last2Com_LF_3D: 1419,
  Last3StraightAnyCode1_LF: 1414,
  Last3StraightAnyCode2_LF: 1415,
  FixedPlace_LF: 1422,
  // P3P5
  P3Sum_LF: 1431,
  P3Com3_LF: 1432,
  P3Com6_LF: 1433,
  P3ComSum_LF: 1435,
  P3StraightAnyCode1_LF: 1436,
  P3StraightAnyCode2_LF: 1437,
  P5First2Com_LF: 1439,
  P5Last2Straight_LF: 1442,
  P5Last2Straight_LF_Single: 166,
  P3Last2Com_LF: 1441,
  Last2Com_LF_P3P5: 1443,
  P5First4Straight_LF: 2883,
  P5First4Straight_LF_Single: 2884,

  // PK10_Single
  First2_PK10_Single: 1732,
  First3_PK10_Single: 1733,
  First4_PK10_Single: 1734,
  First5_PK10_Single: 1735,
  // 11X5_Single
  Any2_11X5_Single: 100,
  Any3_11X5_Single: 101,
  Any4_11X5_Single: 102,
  Any5_11X5_Single: 103,
  Any6_11X5_Single: 104,
  Any7_11X5_Single: 105,
  Any8_11X5_Single: 106,
  First3Straight_11X5_Single: 107,
  First3Com_11X5_Single: 108,
  First2Straight_11X5_Single: 109,
  First2Com_11X5_Single: 110,
  // SSC_Single
  All5Straight_Single: 80,
  All5All_Single: 81,
  All5Join_Single: 82,
  Any2_Single: 97,
  Any3_Single: 98,
  Any4_Single: 99,

  // VTX 越式大小
  Dice_BS_VTX: 2675,
  Dice_BS_Main_VTX: 2676,
  // 色碟
  XocDia_VXD: 2677,
  XocDia_BS_Main_VXD: 2678,
  XocDia_OD_Main_VXD: 2679,
  XocDia_4R_Main_VXD: 2680, // 全红
  XocDia_4W_Main_VXD: 2681, // 全白
  XocDia_3W1R_Main_VXD: 2682, // 3白1紅
  XocDia_3R1W_Main_VXD: 2683, // 3紅1白

  // 魚蝦蟹
  Hoo_Hey_How_VBC: 2733,
  Hoo_Hey_How_Main_VBC: 2734,

  // Color Game
  CLR_Main: 3059,

  // PCSO
  Straight_2D_PLAY: 2858,
  Rambolito: 2860,
  Straight_3D_PLAY: 2852,
  Rambolito3: 2854,
  Rambolito6: 2856,
  Standard_4D_PLAY: 2844,
  Perm: 2846,
  Roll1: 2848,
  Roll4: 2850,
  Standard_6D_PLAY: 2842,
  LOTTO_STANDARD_PLAY: 2792,
  LOTTO_SYSTEM_PLAY: 2794,
  MEGA_STANDARD_PLAY: 2802,
  MEGA_SYSTEM_PLAY: 2804,
  SUPER_STANDARD_PLAY: 2812,
  SUPER_SYSTEM_PLAY: 2814,
  GRAND_STANDARD_PLAY: 2822,
  GRAND_SYSTEM_PLAY: 2824,
  ULTRA_STANDARD_PLAY: 2832,
  ULTRA_SYSTEM_PLAY: 2834,
  Straight_2D: 2859,
  Rambolito_2D: 2861,
  Straight_3D: 2853,
  Rambolito3_3D: 2855,
  Rambolito6_3D: 2857,
  Standard_4D: 2845,
  Perm_4D: 2847,
  Roll1_4D: 2849,
  Roll4_4D: 2851,
  Standard_6D: 2843,
  LOTTO_STANDARD: 2793,
  LOTTO_SYSTEM_5: 2795,
  LOTTO_SYSTEM_7: 2796,
  LOTTO_SYSTEM_8: 2797,
  LOTTO_SYSTEM_9: 2798,
  LOTTO_SYSTEM_10: 2799,
  LOTTO_SYSTEM_11: 2800,
  LOTTO_SYSTEM_12: 2801,
  MEGA_STANDARD: 2803,
  MEGA_SYSTEM_5: 2805,
  MEGA_SYSTEM_7: 2806,
  MEGA_SYSTEM_8: 2807,
  MEGA_SYSTEM_9: 2808,
  MEGA_SYSTEM_10: 2809,
  MEGA_SYSTEM_11: 2810,
  MEGA_SYSTEM_12: 2811,
  SUPER_STANDARD: 2813,
  SUPER_SYSTEM_5: 2815,
  SUPER_SYSTEM_7: 2816,
  SUPER_SYSTEM_8: 2817,
  SUPER_SYSTEM_9: 2818,
  SUPER_SYSTEM_10: 2819,
  SUPER_SYSTEM_11: 2820,
  SUPER_SYSTEM_12: 2821,
  GRAND_STANDARD: 2823,
  GRAND_SYSTEM_5: 2825,
  GRAND_SYSTEM_7: 2826,
  GRAND_SYSTEM_8: 2827,
  GRAND_SYSTEM_9: 2828,
  GRAND_SYSTEM_10: 2829,
  GRAND_SYSTEM_11: 2830,
  GRAND_SYSTEM_12: 2831,
  ULTRA_STANDARD: 2833,
  ULTRA_SYSTEM_5: 2835,
  ULTRA_SYSTEM_7: 2836,
  ULTRA_SYSTEM_8: 2837,
  ULTRA_SYSTEM_9: 2838,
  ULTRA_SYSTEM_10: 2839,
  ULTRA_SYSTEM_11: 2840,
  ULTRA_SYSTEM_12: 2841,

  // 百人牛牛 NNP
  EQUALIZE_MAIN_NNP: 2770,
  DOUBLE_MAIN_NNP: 2772,

  // 印度彩 wingo

  // Wingo-Level:1

  'Any_Place_WGG': 3060, // SEA Wingo 跑数

  // Wingo-Level:2

  'BS_Main_WGG': 3061, // SEA Wingo 大小
  'Num_Main_WGG': 3063, // SEA Wingo 数字
  'Color_Main_WGG': 3065, // SEA Wingo 顔色

  // Wingo-Level:3

  'BS_WGG': 3062, // SEA Wingo 大小
  'Num_WGG': 3064, // SEA Wingo 猜数字
  'Color_Red_WGG': 3066, // SEA Wingo 猜紅色
  'Color_Green_WGG': 3067, // SEA Wingo 猜綠色
  'Color_Purple_WGG': 3068, // SEA Wingo 猜紫色

  // 5D-Level:1

  'Combined_5D': 3069, // SEA 5D 整合
  '1Num_5D': 3077, // SEA 5D 跑數

  // 5D-Level:2

  'BSOE_Main_5D': 3070, // SEA 5D 大小单双
  'Straight_1Num_Main_5D': 3078, // SEA 5D 直选

  // 5D-Level:3

  'Sum_BSOE_5D': 3071, // SEA 5D 和值
  'First_BSOE_5D': 3072, // SEA 5D 第一球
  'Second_BSOE_5D': 3073, // SEA 5D 第二球
  'Third_BSOE_5D': 3074, // SEA 5D 第三球
  'Fourth_BSOE_5D': 3075, // SEA 5D 第四球
  'Fifth_BSOE_5D': 3076, // SEA 5D 第五球
  'First_Straight_5D': 3079, // SEA 5D 第一球
  'Second_Straight_5D': 3080, // SEA 5D 第二球
  'Third_Straight_5D': 3081, // SEA 5D 第三球
  'Fourth_Straight_5D': 3082, // SEA 5D 第四球
  'Fifth_Straight_5D': 3083, // SEA 5D 第五球

  // SEAK3-Level:1

  'Combined_SEAK3': 3084, // SEA SEAK3 整合

  // SEAK3-Level:2

  'Sum_BSOE_SEAK3': 3085, // SEA SEAK3 和值
  'Dice_2_SEAK3': 3088, // SEA SEAK3 2骰子
  'Dice_3_SEAK3': 3091, // SEA SEAK3 3骰子
  'Different_Dice_SEAK3': 3094, // SEA SEAK3 不同骰

  // SEAK3-Level:3

  'Sum_SEAK3': 3086, // SEA SEAK3 和值
  'BSOE_SEAK3': 3087, // SEA SEAK3 大小單雙
  'Single_Same_2_SEAK3': 3089, // SEA SEAK3 2同号单选
  'Multi_Same_2_SEAK3': 3090, // SEA SEAK3 2同号复选
  'Single_Same_3_SEAK3': 3092, // SEA SEAK3 3同号单选
  'All_Same_3_SEAK3': 3093, // SEA SEAK3 3同号通选
  'All_Sequence_SEAK3': 3095, // SEA SEAK3 全順
  'Different_3_SEAK3': 3096, // SEA SEAK3 3不同
  'Different_2_SEAK3': 3097, // SEA SEAK3 2不同

  // SEAPK10-Level:1

  'RANK_SEAPK10': 3100, // SEA SEAPK10 第1-10名排名
  'BS_SEAPK10': 3101, // SEA SEAPK10 第1-10名大小
  'OE_SEAPK10': 3102, // SEA SEAPK10 第1-10名單雙

  // SEAPK10-Level:2

  'RANK_SEAPK10_SECOND_LAYER': 3103, // SEA SEAPK10 第1-10名排名
  'BS_SEAPK10_SECOND_LAYER': 3104, // SEA SEAPK10 第1-10名大小
  'OE_SEAPK10_SECOND_LAYER': 3105, // SEA SEAPK10 第1-10名單雙

  // SEAPK10-Level:3

  'SEA_PK10_RANK': 3106, // SEA SEAPK10 排名
  'SEA_PK10_BS': 3107, // SEA SEAPK10 大小
  'SEA_PK10_OE': 3108, // SEA SEAPK10 單雙
};
