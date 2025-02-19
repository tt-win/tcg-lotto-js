import { betDigits } from './play-menu/ball-board-config';

// define map bet digit to hot gap digit.
const hotGapDigits = {
  [betDigits.TEN_THOUSANDS]: '1',
  [betDigits.THOUSANDS]: '2',
  [betDigits.HUNDREDS]: '3',
  [betDigits.TENS]: '4',
  [betDigits.ONES]: '5',
  [betDigits.FIRST]: '1',
  [betDigits.SECOND]: '2',
  [betDigits.THIRD]: '3',
  [betDigits.FOURTH]: '4',
  [betDigits.FIFTH]: '5',
  [betDigits.SIXTH]: '6',
  [betDigits.SEVENTH]: '7',
  [betDigits.EIGHTH]: '8',
  [betDigits.NINTH]: '9',
  [betDigits.TENTH]: '10',
  [betDigits.ANY1]: 'ANY',
  [betDigits.ANY2]: 'ANY',
  [betDigits.ANY3]: 'ANY',
  [betDigits.ANY4]: 'ANY',
  [betDigits.ANY5]: 'ANY',
  [betDigits.ANY6]: 'ANY',
  [betDigits.ANY7]: 'ANY',
  [betDigits.ANY8]: 'ANY',
  [betDigits.COM]: 'ANY',
  [betDigits.DAN]: 'ANY',
  [betDigits.FC3D_HUNDREDS]: '3',
  [betDigits.FC3D_TENS]: '4',
  [betDigits.FC3D_ONES]: '5',
  [betDigits.PK10_FIRST]: '1',
  [betDigits.PK10_SECOND]: '2',
  [betDigits.PK10_THIRD]: '3',
  [betDigits.PK10_FOURTH]: '4',
  [betDigits.PK10_FIFTH]: '5',
  [betDigits.PK10_SIXTH]: '6',
  [betDigits.PK10_SEVENTH]: '7',
  [betDigits.PK10_EIGHTH]: '8',
  [betDigits.PK10_NINTH]: '9',
  [betDigits.PK10_TENTH]: '10',
  // 跨度
  [betDigits.SPAN]: {
    First2_Span_SSC: 'FIRST2_SPAN',
    Last2_Span_SSC: 'LAST2_SPAN',
    First3C_Span_SSC: 'FIRST3_SPAN',
    Middle3_Span_SSC: 'MIDDLE3_SPAN',
    Last3_Span_SSC: 'LAST3_SPAN',
  },
};

export { hotGapDigits as default };
