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
  Last4StraightAnyCode1_SSC: 1748,   // 四星一码不定位
  Last4StraightAnyCode2_SSC: 1749,   // 四星二码不定位
  AllStraightAnyCode1_SSC: 1750,     // 五星一码不定位
  AllStraightAnyCode2_SSC: 1751,     // 五星二码不定位
  AllStraightAnyCode3_SSC: 1752,     // 五星三码不定位
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
  SpecialB_Animal_LHC: 1714,
  SpecialA_Animal_LHC: 1713,
  Fixed_Sixth_Color_LHC: 1712,
  Fixed_Sixth_TOSum_OE_LHC: 1711,
  Fixed_Sixth_BSOE_LHC: 1710,
  Fixed_Fifth_Color_LHC: 1709,
  Fixed_Fifth_TOSum_OE_LHC: 1708,
  Fixed_Fifth_BSOE_LHC: 1707,
  Fixed_Fourth_Color_LHC: 1706,
  Fixed_Fourth_TOSum_OE_LHC: 1705,
  Fixed_Fourth_BSOE_LHC: 1704,
  Fixed_Third_Color_LHC: 1703,
  Fixed_Third_TOSum_OE_LHC: 1702,
  Fixed_Third_BSOE_LHC: 1701,
  Fixed_Second_Color_LHC: 1700,
  Fixed_Second_TOSum_OE_LHC: 1699,
  Fixed_Second_BSOE_LHC: 1698,
  Fixed_First_Color_LHC: 1697,
  Fixed_First_TOSum_OE_LHC: 1696,
  Fixed_First_BSOE_LHC: 1695,
  Normal_Special_One_Zodiac_LHC: 1694,
  Special_Zodiac_Straight_LHC: 1693,
  Normal_Sixth_Tail_BS_LHC: 1687,
  Normal_Sixth_Color_LHC: 1686,
  Normal_Sixth_TOSum_BSOE_LHC: 1685,
  Normal_Sixth_BSOE_LHC: 1684,
  Normal_Fifth_Tail_BS_LHC: 1683,
  Normal_Fifth_Color_LHC: 1682,
  Normal_Fifth_TOSum_BSOE_LHC: 1681,
  Normal_Fifth_BSOE_LHC: 1680,
  Normal_Fourth_Tail_BS_LHC: 1679,
  Normal_Fourth_Color_LHC: 1678,
  Normal_Fourth_TOSum_BSOE_LHC: 1677,
  Normal_Fourth_BSOE_LHC: 1676,
  Normal_Third_Tail_BS_LHC: 1675,
  Normal_Third_Color_LHC: 1674,
  Normal_Third_TOSum_BSOE_LHC: 1673,
  Normal_Third_BSOE_LHC: 1672,
  Normal_Second_Tail_BS_LHC: 1671,
  Normal_Second_Color_LHC: 1670,
  Normal_Second_TOSum_BSOE_LHC: 1669,
  Normal_Second_BSOE_LHC: 1668,
  Normal_First_Tail_BS_LHC: 1667,
  Normal_First_Color_LHC: 1666,
  Normal_First_TOSum_BSOE_LHC: 1665,
  Normal_First_BSOE_LHC: 1664,
  Normal_Special_Tail_No_LHC: 1656,
  Normal_Total_BSOE_LHC: 1653,
  Head_Tail_Special_LHC: 1651,
  Two_Sides_Total_Sum_BSOE_LHC: 1648,
  Two_Sides_Special_Animal_LHC: 1647,
  Two_Sides_Special_TOSum_BSOE_LHC: 1646,
  Two_Sides_Special_BS_LHC: 1645,
  Two_Sides_Special_BSOE_LHC: 1644,
  SpecialA_TOSum_BSOE_LHC: 1640,
  SpecialA_Tail_BS_LHC: 1638,
  Color_BS_OE_LHC: 1637,
  Color_BSOE_LHC: 1636,
  Color_Straight_LHC: 1635,
  // 特碼
  SpecialB_TOSum_BSOE_LHC: 1641,
  SpecialB_Tail_BS_LHC: 1639,
  SpecialB_BS_OE_LHC: 1633,
  SpecialA_BS_OE_LHC: 1632,
  SpecialB_BSOE_LHC: 1631,
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


  // ENT config
  First_Straight_ENT: 1756,
  First_BSOE_ENT: 1758,
  First_Total_Sum_ENT: 1759,
  First_First3_ENT: 1761,
  First_Middle3_ENT: 1762,
  First_Last3_ENT: 1763,
  Second_Straight_ENT: 1766,
  Second_BSOE_ENT: 1768,
  Second_Total_Sum_ENT: 1769,
  Second_First3_ENT: 1771,
  Second_Middle3_ENT: 1772,
  Second_Last3_ENT: 1773,
  Third_Straight_ENT: 1776,
  Third_BSOE_ENT: 1778,
  Third_Total_Sum_ENT: 1779,
  Third_First3_ENT: 1781,
  Third_Middle3_ENT: 1782,
  Third_Last3_ENT: 1783,
  Fourth_Straight_ENT: 1786,
  Fourth_BSOE_ENT: 1788,
  Fourth_Total_Sum_ENT: 1789,
  Fourth_First3_ENT: 1791,
  Fourth_Middle3_ENT: 1792,
  Fourth_Last3_ENT: 1793,
  Fifth_Straight_ENT: 1796,
  Fifth_BSOE_ENT: 1798,
  Fifth_Total_Sum_ENT: 1799,
  Fifth_First3_ENT: 1801,
  Fifth_Middle3_ENT: 1802,
  Fifth_Last3_ENT: 1803,
  Dragon_Tiger_Tie_5_4_ENT: 1843,
  Dragon_Tiger_Tie_5_3_ENT: 1844,
  Dragon_Tiger_Tie_5_2_ENT: 1845,
  Dragon_Tiger_Tie_5_1_ENT: 1846,
  Dragon_Tiger_Tie_4_3_ENT: 1847,
  Dragon_Tiger_Tie_4_2_ENT: 1848,
  Dragon_Tiger_Tie_4_1_ENT: 1849,
  Dragon_Tiger_Tie_3_2_ENT: 1850,
  Dragon_Tiger_Tie_3_1_ENT: 1851,
  Dragon_Tiger_Tie_2_1_ENT: 1852,
  Five_Have_One_Straight_ENT: 1855,
  // ENT兩面
  Two_Side_First_BSOE_ENT: 1830,
  Two_Side_Second_BSOE_ENT: 1832,
  Two_Side_Third_BSOE_ENT: 1834,
  Two_Side_Fourth_BSOE_ENT: 1836,
  Two_Side_Fifth_BSOE_ENT: 1838,
  Two_Side_Total_Sum_BSOE_ENT: 1840,
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
  Two_Side_PK10: 1856,
  Sum_PK10: 1884,
  // 猜和值 與 定位膽 playcode與傳統重複..
  // 現在只有娛樂城玩法使用playcode, 之後如果有要使用playMenu.[playCode] 指向傳統玩法的話需要特別留意
  First2Sum_PK10: 1885,
  First3Sum_PK10: 1886,
  FirstLastSum_PK10: 1887,
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
  Dragon_Tiger_1_VS_10_PK10: 1900,
  Dragon_Tiger_2_VS_9_PK10: 1901,
  Dragon_Tiger_3_VS_8_PK10: 1902,
  Dragon_Tiger_4_VS_7_PK10: 1903,
  Dragon_Tiger_5_VS_6_PK10: 1904,

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
  First_BSOE_11X5_ENT: 1963,
  Second_LV1_11X5_ENT: 1964,
  Second_11X5_ENT: 1966,
  Second_BSOE_11X5_ENT: 1968,
  Third_LV1_11X5_ENT: 1969,
  Third_11X5_ENT: 1971,
  Third_BSOE_11X5_ENT: 1973,
  Fourth_LV1_11X5_ENT: 1974,
  Fourth_11X5_ENT: 1976,
  Fourth_BSOE_11X5_ENT: 1978,
  Fifth_LV1_11X5_ENT: 1979,
  Fifth_11X5_ENT: 1981,
  Fifth_BSOE_11X5_ENT: 1983,
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

  // THAI
  Last_3_THAI: 2055,
  '2_Star_THAI': 2060,
  Any_Place_THAI: 2067,
  Hoo_Hey_How_Main_THAI: 2297, // 魚蝦蟹
  Hoo_Hey_How_Play_THAI: 2299, // 魚蝦蟹

  LAST_3_STRAIGHT_THAI: 2057, // 上正三位数
  LAST_3_COMBINE_THAI: 2059, // 上反三位数
  LAST_2_STRAIGHT_THAI: 2062, // 上正二位数
  LAST_2_COMBINE_THAI: 2064, // 上反二位数
  '2_STRAIGHT_ADD_THAI': 2066, // 下正二位数
  '1_AT_ANY_LAST_3_THAI': 2069, // 上跑三位数

  Last_3_Straight_THAI_Multi: 2485, // 上正三位数（复式）
  Last_3_Straight_THAI_Single: 2486, // 上正三位数（单式）
  Last_3_Combine_THAI_Multi: 2487, // 上反三位数（复式）
  '2_Straight_Add_THAI_Multi': 2480, // 下正二位数（复式）
  '2_Straight_Add_THAI_Single': 2481, // 下正二位数（单式）
  Last_2_Combine_THAI_Multi: 2482, // 上反二位数（复式）
  Last_2_Straight_THAI_Multi: 2483, // 上正二位数（复式）
  Last_2_Straight_THAI_Single: 2484, // 上正二位数（单式）

  // vnc 越南彩
  Last_4_VNC: 2090, // 越南彩四數
  Last_3_VNC: 2095,
  '2_Star_VNC': 2100,
  Any_Place_VNC: 2105,
  Hoo_Hey_How_Main_VNC: 2300, // 魚蝦蟹
  Hoo_Hey_How_Play_VNC: 2302, // 魚蝦蟹

  LAST_4_STRAIGHT_1ST_VNC: 2092, // 上正四位数
  LAST_4_COMBINE_1ST_VNC: 2094, // 上反四位数
  LAST_3_STRAIGHT_1ST_VNC: 2097, // 上正三位数
  LAST_3_COMBINE_1ST_VNC: 2099, // 上反三位数
  LAST_2_STRAIGHT_1ST_VNC: 2102, // 上正二位数
  LAST_2_STRAIGHT_2ND_VNC: 2104, // 下正二位数
  LAST_2_ANY_1ST_VNC: 2107, // 上跑两位数
  LAST_2_ANY_2ND_VNC: 2109, // 下跑两位数

  Last_2_Straight_1st_VNC_Multi: 2279, // 上正二位数(复式)
  Last_2_Straight_1st_VNC_Single: 2280, // 上正二位数（单式）
  Last_2_Straight_2nd_VNC_Multi: 2281, // 下正二位数（复式）
  Last_2_Straight_2nd_VNC_Single: 2282, // 下正二位数（单式）
  Last_3_Combine_1st_VNC_Multi: 2283, // 上反三位数（复式）
  Last_3_Straight_1st_VNC_Multi: 2284, // 上正三位数（复式）
  Last_3_Straight_1st_VNC_Single: 2285, // 上正三位数（单式）
  Last_4_Straight_1st_VNC_Multi: 2286, // 上正四位数（复式）
  Last_4_Straight_1st_VNC_Single: 2287, // 上正四位数（单式）

  // LAO 老挝彩
  '4_Num_LAO': 2127,
  '3_Num_LAO': 2132,
  '2_Num_LAO': 2137,
  Any_LAO: 2142,
  Hoo_Hey_How_Main_LAO: 2303, // 魚蝦蟹
  Hoo_Hey_How_Play_LAO: 2305, // 魚蝦蟹

  LAST_4_STRAIGHT_LAO: 2129, // 上正四位数
  LAST_4_COMBINE_LAO: 2131, // 上反四位数
  LAST_3_STRAIGHT_LAO: 2134, // 上正三位数
  LAST_3_COMBINE_LAO: 2136, // 上反三位数
  LAST_2_STRAIGHT_LAO: 2139, // 上正二位数
  FIRST_2_STRAIGHT_LAO: 2141, // 下正二位数
  LAST_2_ANY_LAO: 2144, // 上跑两位数
  FIRST_2_ANY_LAO: 2146, // 下跑两位数

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
};
