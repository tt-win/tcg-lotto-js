import { getPlayName, i18nOrderInfo } from './lott-translator';

module.exports = {
  translatePlayName(playId, playCode, bettingContent = '') {
    return getPlayName({ playId, playCode, bettingContent });
  },
  translateBallContentText(playId, bettingContent) {
    return i18nOrderInfo({ playId, bettingContent });
  },
};
