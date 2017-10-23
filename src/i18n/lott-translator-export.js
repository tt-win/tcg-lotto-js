import { getPlayName, i18nOrderInfo } from './lott-translator';

module.exports = {
  translatePlayName(_playId, _playCode, _bettingContent) {
    return getPlayName({ playId: _playId, playCode: _playCode, bettingContent: _bettingContent });
  },
  translateBallContentText(_playId, _bettingContent) {
    return i18nOrderInfo({ playId: _playId, bettingContent: _bettingContent });
  },
};
