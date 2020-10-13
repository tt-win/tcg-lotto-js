import _ from 'lodash';

const anyRollProps = {
  grade: _.times(9), // 全獎級顯示
  numberOfColorWords: 2, // 後幾位變色
};

export const gradeColorWords = {
  // 後二包膽
  2517: { ...anyRollProps },
  2518: { ...anyRollProps },
  2519: { ...anyRollProps },
  2530: { ...anyRollProps },
  2531: { ...anyRollProps },
  2532: { ...anyRollProps },
  // 後三包膽
  2521: { ...anyRollProps, numberOfColorWords: 3 },
  2522: { ...anyRollProps, numberOfColorWords: 3 },
  2523: { ...anyRollProps, numberOfColorWords: 3 },
  2534: { ...anyRollProps, numberOfColorWords: 3 },
  2535: { ...anyRollProps, numberOfColorWords: 3 },
  2536: { ...anyRollProps, numberOfColorWords: 3 },
  // 後四包膽
  2525: { ...anyRollProps, numberOfColorWords: 4 },
  2526: { ...anyRollProps, numberOfColorWords: 4 },
  2527: { ...anyRollProps, numberOfColorWords: 4 },
  2538: { ...anyRollProps, numberOfColorWords: 4 },
  2539: { ...anyRollProps, numberOfColorWords: 4 },
  2540: { ...anyRollProps, numberOfColorWords: 4 },
};
export default gradeColorWords;
