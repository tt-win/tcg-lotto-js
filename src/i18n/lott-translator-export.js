import { getPlayName, i18nOrderInfo, i18n, i18nWithLang } from './lott-translator';

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
  // key: i18nkey, args[]: option insert value
  translateLottJsi18n(key, ...args) {
    return i18n(key, ...args);
  },
  // lang: lotto language key ,key: i18nkey, args[]: option insert value
  translateLottJsi18nWithLang(lang, key, ...args) {
    return i18nWithLang(lang, key, ...args);
  },
};
