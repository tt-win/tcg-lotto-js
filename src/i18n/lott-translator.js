import _isNumber from 'lodash/isNumber';
import _findIndex from 'lodash/findIndex';
import _reverse from 'lodash/reverse';
import _padStart from 'lodash/padStart';
import { i18n, lang } from './lang/i18n-key-finder';
import { orderDigitsI18n, PlayMenu } from './configs/basic_play_menu';
import OrderInfoTranslator from './lang/OrderInfoTranslator';

/**
 * Get play menu name with digits, using in shopping cart and order logs query.
 * @param playMenu
 * @param startDigit
 * @return {string}
 */
export const getPlayMenuNameWithDigit = ({ playMenu, startDigit }) => {
  const { playCode, playId } = playMenu;
  const { digitsI18n } = orderDigitsI18n[playCode] || {};


  // startDigit 存在才有可能需要顯示
  const startDigitI18n = _isNumber(startDigit) && digitsI18n ? i18n(digitsI18n[startDigit]) : '';
  // 娛樂城龍虎鬥要多加個抬頭
  // 1843: '第一球vs第二球',
  // 1844: '第一球vs第三球',
  // 1845: '第一球vs第四球',
  // 1846: '第一球vs第五球',
  // 1847: '第二球vs第三球',
  // 1848: '第二球vs第四球',
  // 1849: '第二球vs第五球',
  // 1850: '第三球vs第四球',
  // 1851: '第三球vs第五球',
  // 1852: '第四球vs第五球',
  if (playId >= 1843 && playId <= 1852) {
    return `${i18n('playId.1841')}:${i18n(`playId.${playId}`)}${startDigitI18n}`;
  }

  if (playId >= 2231 && playId <= 2234) {
    return `${i18n('playId.2231')}:${i18n(`playId.${playId}`)}${startDigitI18n}`;
  }
  // 任二. 任三組選和值需要走這個規則. 把重複顯示的內容拔掉
  if ([PlayMenu.Any2Sum_SSC, PlayMenu.Any3Sum_SSC].indexOf(playId) >= 0) {
    return i18n(`playId.${playId}`);
  }
  return `${i18n(`playId.${playId}`)}${startDigitI18n}`;
};

export const getPlayName = ({ playId, playCode, bettingContent }) => {
  const parameter = {
    playMenu: { playCode, playId },
    startDigit: '',
  };
  if (bettingContent) {
    const contents = bettingContent.split('');

    switch (playId) {
      case PlayMenu.FixedPlace:
      case PlayMenu.FixedPlace_Last_4:
      case PlayMenu.FixedPlace_Last_3:
      case PlayMenu.FixedPlace_Last_2:
      case PlayMenu.FixedPlace_ZY:
      case PlayMenu.FixedPlace_LF_FC3D:
      case PlayMenu.FixedPlace_LF_P3P5:
      case PlayMenu.FixedPlace_11X5:
        parameter.startDigit = _findIndex(_reverse(contents), (v) => !isNaN(v));
        break;

      case PlayMenu.First5Fixed_PK10:
      case PlayMenu.First5BSOE_PK10:
        parameter.startDigit = _findIndex(contents, (v) => !isNaN(v));
        break;

      case PlayMenu.Last5Fixed_PK10:
      case PlayMenu.Last5BSOE_PK10:
        parameter.startDigit = _findIndex(contents, (v) => !isNaN(v)) + 5;
        break;

      default:
              // do nothing
        break;
    }
  }

  return getPlayMenuNameWithDigit(parameter);
};


/**
 * Trunc ball text for showing, shopping cart and order logs query.
 * @param ballText
 * @return {string}
 */
export const truncBallText = (ballText) => {
  const digitsStrLength = 4;
  const totalLength = 10;
  const truncText = ballText
    .substr(0, totalLength); // .replace(/ \| /g, '|')

  const replacePattern = (str) => str.replace(/\|/g, ' | ');

  // for manual digit trunc
  if (ballText.indexOf('(') >= 0 && ballText.indexOf(')') >= 0) {
    const digitsStr = ballText.substr(0, ballText.indexOf(')') + 1);
    if (digitsStr.length > digitsStrLength) {
      // 長度4, (萬千百...
      return `${digitsStr.substr(0, digitsStrLength)}...`;
    } else if (truncText.length === (digitsStrLength + 1)) {
      // 長度5, (百十)1
      return `${truncText.substr(0, digitsStrLength + 1)}`;
    }

    // 長度5, (百十)1...
    return `${truncText.substr(0, digitsStrLength + 1)}...`;
  }

  if (truncText.length > (totalLength - 1)) {
    return `${replacePattern(truncText.substr(0, totalLength - 1))}...`;
  }
  return replacePattern(truncText);
};


/**
 * 產生 投注記錄 / 訂單編號 欄位的顯示內容
 *
 * @param orderNumber 原始訂單編號
 * @param chasing 是否有追號
 * @param chasingOrder 追的第幾期
 *
 * @returns {string} 投注記錄 / 訂單編號 欄位的顯示內容
 */
export const genOrderNumberText = ({ orderNumber = '', chasing = false, chasingOrder = 0 }) => {
  const orderNoText = orderNumber.slice(-6);
  if (chasing) {
    const chaseOrdText = _padStart(chasingOrder, 3, '0');
    return `${orderNoText}-${chaseOrdText}`;
  }
  return orderNoText;
};

/**
 * 產生 投注記錄 / 追號 欄位的顯示內容
 *
 * @param chasing 是否有追號
 * @param chasingOrder 追的第幾期
 * @param chasingPhase 追幾期
 *
 * @returns {string} 投注記錄 / 追號 欄位的顯示內容
 */
export const genChasingOrderText = ({ chasing, chasingOrder, chasingPhase }) => {
  if (chasing) {
    if (chasingOrder === 1) { // 第一期
      return i18n('chasingPhaseAmount', chasingPhase);
    }
    return i18n('chasingChildOrder');
  }
  return '-';
};

/**
 * 產生 訂單詳情 / 投注內容 欄位的顯示內容
 *
 * @param playId 玩法ID
 * @param bettingContent 投注原始內容
 *
 * @returns {string} 訂單詳情 / 投注內容 欄位的顯示內容
 */
export const i18nOrderInfo = ({ playId, bettingContent }) => OrderInfoTranslator.getText(playId, bettingContent);

export { i18n } from './lang/i18n-key-finder';

/** genBallContentText , old name used by ods console */
export default {
  getPlayMenuNameWithDigit,
  truncBallText,
  getPlayName,
  i18nOrderInfo,
  genOrderNumberText,
  genChasingOrderText,
  genBallContentText: i18nOrderInfo,
  i18n,
  lang,
};
