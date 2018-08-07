/**
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
};

export default {};
