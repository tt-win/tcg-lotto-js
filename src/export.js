import { getPlayName, genBallContentText } from './lott-translator';

module.exports = {
  translatePlayName(_playId, _playCode, _bettingContent) {
    return getPlayName({ playId: _playId, playCode: _playCode, bettingContent: _bettingContent });
  },
  translateBallContentText(_playId, _bettingContent) {
    return genBallContentText({ playId: _playId, bettingContent: _bettingContent });
  },
};
