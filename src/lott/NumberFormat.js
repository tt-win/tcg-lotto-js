import _ from 'lodash';
import numeral from 'numeral';

export default class NumberFormat {

  /**
   *
   * @param num 數字
   * @param decimalPlaces 小數位數
   * @param round 是否四捨五入
   * @returns {*}
   */
  static formatDecimal(num = 0, decimalPlaces = 0, round = true) {
    const formula = round ? 'round' : 'floor';
    const parseNum = Math[formula](num * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
    return numeral(parseNum)
        .format(`0,0.${_.repeat('0', decimalPlaces)}`) || '';
  }

  /**
   * 無千分位逗號
   * @param num 數字
   * @param decimalPlaces 小數位數
   * @returns {*}
   */
  static formatNoComma(num = 0, decimalPlaces = 0) {
    return numeral(num)
        .format(`0.${_.repeat('0', decimalPlaces)}`) || '';
  }
}
