import { getPlayName, i18nOrderInfo, i18n } from './lott-translator';

module.exports = {
  translatePlayName(playId, playCode, bettingContent = '') {
    return getPlayName({ playId, playCode, bettingContent });
  },
  translateBallContentText(playId, bettingContent, lang) {
    return i18nOrderInfo({ playId, bettingContent, lang });
  },
  translatePrizeType(key) {
    if (!key || key.length === 0) {
      return '';
    }
    return i18n(`prizeListPrizeType.${key}`);
  },
  translateGameCode(key) {
    if (!key || key.length === 0) {
      return '';
    }
    return i18n(`gameCode.${key}`);
  },
  translateGameGroupCode(key) {
    if (!key || key.length === 0) {
      return '';
    }
    return i18n(`gameGroupCode.${key}`);
  },
};
