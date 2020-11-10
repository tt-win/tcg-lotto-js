import _ from 'lodash';
import { i18n } from 'locales';
import { showBZHName } from '../config/play-menu/ball-board-config/ball_configuration_config';

function getBallFunction(startBall, endBall) {
  const ballShowPositionArray = [];
  for (let a = startBall; a <= endBall; a += 1) {
    ballShowPositionArray.push(a);
  }
  return ballShowPositionArray;
}

function getConfigurationNumber(ballGroup) {
  const uniqNumArray = _.uniq(ballGroup); // array中不一樣元素
  let configurationNumber = 1;
  const numberObject = {};

  // 先判斷球號是否為空
  if (isNaN(_.sum(ballGroup)) || ballGroup.length === 1) {
    return showBZHName.EMPTY;
  }

  // 找出每個球號的個數
  ballGroup.forEach((ball) => {
    if (numberObject[ball]) {
      numberObject[ball] += 1;
    } else {
      numberObject[ball] = 1;
    }
  });

  // 計算組態數
  for (let a = ballGroup.length; a > 1; a -= 1) {
    configurationNumber *= a;
  }
  uniqNumArray.forEach((ball) => {
    for (let a = numberObject[ball]; a > 1; a -= 1) {
      configurationNumber /= a;
    }
  });

  switch (configurationNumber) {
    case 1:
      if (ballGroup.length === 2) return showBZHName.PAIR;
      return showBZHName.BZ;
    case 2:
      return showBZHName.Z2;
    case 3:
      return showBZHName.Z3;
    case 4:
      return showBZHName.Z4;
    case 5:
      return showBZHName.Z5;
    case 6:
      return showBZHName.Z6;
    case 12:
      return showBZHName.Z12;
    case 20:
      return showBZHName.Z20;
    case 24:
      return showBZHName.Z24;
    case 30:
      return showBZHName.Z30;
    case 60:
      return showBZHName.Z60;
    case 120:
      return showBZHName.Z120;
    default:
      return '';
  }
}

function getBallSum(ballGroup) {
  return ballGroup.reduce((sum, curr) => sum + curr, 0);
}

function getK3BSOE(ballGroup) {
  let BSOE = '';
  const ballSum = getBallSum(ballGroup);

  if (ballSum >= 11) {
    BSOE += i18n('ball.BSOE.big');
  } else {
    BSOE += i18n('ball.BSOE.small');
  }

  if (ballSum % 2 === 1) {
    BSOE += i18n('ball.BSOE.odd');
  } else {
    BSOE += i18n('ball.BSOE.even');
  }

  return BSOE;
}


function getK3BallSumBsOE(ballGroup) {
  const sum = getBallSum(ballGroup);
  const bsoe = getK3BSOE(ballGroup);
  return sum + bsoe;
}

function getBallSpan(ballGroup) {
  const ballGroupSort = ballGroup.sort((a, b) => a - b);
  return ballGroupSort[ballGroupSort.length - 1] - ballGroupSort[0];
}

function getSSCBSOE(ballGroup) {
  let BSOE = i18n('sum');
  const ballSum = getBallSum(ballGroup);

  if (ballSum >= 23) {
    BSOE += i18n('ball.BSOE.big');
  } else {
    BSOE += i18n('ball.BSOE.small');
  }

  if (ballSum % 2 === 1) {
    BSOE += i18n('ball.BSOE.odd');
  } else {
    BSOE += i18n('ball.BSOE.even');
  }

  return BSOE;
}

function getSpecialNumber(ballGroup) {
  const ballGroupSort = ballGroup.sort((a, b) => a - b);
  const uniqNumArray = _.uniq(ballGroupSort); // array中不一樣元素
  let isStraight = false; // 判斷是否為順子
  let isHalfStraight = false; // 判斷是否為半順

  // 豹子
  if (uniqNumArray.length === 1) {
    return i18n('ball.GroupENT.0');
  }

  // 順子
  for (let a = 0; a < ballGroupSort.length; a += 1) {
    if (a === ballGroupSort.length - 1) {
      if (ballGroupSort[a] - ballGroupSort[0] === 9) {
        isStraight = true;
      }
    } else if (ballGroupSort[a] - ballGroupSort[a + 1] === -1 || ballGroupSort[a] - ballGroupSort[a + 1] === -8) {
      isStraight = true;
    } else {
      isStraight = false;
      break;
    }
  }
  if (isStraight) {
    return i18n('ball.GroupENT.1');
  }

  // 對子
  if (uniqNumArray.length === 2) {
    return i18n('ball.GroupENT.2');
  }

  // 半順
  for (let a = 0; a < ballGroupSort.length; a += 1) {
    if (a === ballGroupSort.length - 1) {
      if (ballGroupSort[a] - ballGroupSort[0] === 9) {
        isHalfStraight = true;
        break;
      }
    } else if (ballGroupSort[a] - ballGroupSort[a + 1] === -1 || ballGroupSort[a] - ballGroupSort[a + 1] === -8) {
      isHalfStraight = true;
      break;
    }
  }
  if (isHalfStraight) {
    return i18n('ball.GroupENT.4');
  }

  // 雜六
  return i18n('ball.GroupENT.3');
}

function getDragonTigerTie(ballGroup) {
  if (ballGroup[0] > ballGroup[1]) {
    return i18n('ball.dragonTigerTie.dragon');
  } else if (ballGroup[0] < ballGroup[1]) {
    return i18n('ball.dragonTigerTie.tiger');
  } else if (ballGroup[0] === ballGroup[1]) {
    return i18n('ball.dragonTigerTie.tie');
  }
  return '';
}

function getOECount(ballGroup) {
  let odd = 0;
  ballGroup.forEach((ball) => {
    if (ball % 2 === 1) {
      odd += 1;
    }
  });

  return odd + i18n('ball.BSOE.odd') + (ballGroup.length - odd) + i18n('ball.BSOE.even');
}

function getMiddleNumber(ballGroup) {
  const ballGroupSort = ballGroup.sort((a, b) => a - b);
  const middleNumberIndex = Math.ceil(ballGroupSort.length / 2);

  return ballGroupSort[middleNumberIndex - 1];
}

export default class ConfigurationHelper {
  static getBallShowPosition(showPosition, totalBall) {
    let ballShowPositionArray = [];
    switch (showPosition) {
      case 'TWO': {
        ballShowPositionArray = getBallFunction(1, 1);
        break;
      }
      case 'THREE': {
        ballShowPositionArray = getBallFunction(2, 2);
        break;
      }
      case 'FOUR': {
        ballShowPositionArray = getBallFunction(3, 3);
        break;
      }
      case 'FIRST_FIVE': {
        ballShowPositionArray = getBallFunction(0, 4);
        break;
      }
      case 'FIRST_FOUR': {
        ballShowPositionArray = getBallFunction(0, 3);
        break;
      }
      case 'FIRST_THREE': {
        ballShowPositionArray = getBallFunction(0, 2);
        break;
      }
      case 'FIRST_TWO': {
        ballShowPositionArray = getBallFunction(0, 1);
        break;
      }
      case 'FIRST_ONE': {
        ballShowPositionArray.push(0);
        break;
      }
      case 'LAST_FIVE': {
        ballShowPositionArray = getBallFunction(totalBall - 5, totalBall - 1);
        break;
      }
      case 'LAST_FOUR': {
        ballShowPositionArray = getBallFunction(totalBall - 4, totalBall - 1);
        break;
      }
      case 'LAST_THREE': {
        ballShowPositionArray = getBallFunction(totalBall - 3, totalBall - 1);
        break;
      }
      case 'LAST_TWO': {
        ballShowPositionArray = getBallFunction(totalBall - 2, totalBall - 1);
        break;
      }
      case 'LAST_ONE': {
        ballShowPositionArray = getBallFunction(totalBall - 1, totalBall - 1);
        break;
      }
      case 'FIRST_ONE_THREE': {
        ballShowPositionArray.push(0, 2);
        break;
      }
      case 'FIRST_ONE_FOUR': {
        ballShowPositionArray.push(0, 3);
        break;
      }
      case 'FIRST_ONE_FIVE': {
        ballShowPositionArray.push(0, 4);
        break;
      }
      case 'FIRST_ONE_TEN': {
        ballShowPositionArray.push(0, 9);
        break;
      }
      case 'FIRST_TWO_THREE': {
        ballShowPositionArray.push(1, 2);
        break;
      }
      case 'FIRST_TWO_FOUR': {
        ballShowPositionArray.push(1, 3);
        break;
      }
      case 'FIRST_TWO_FIVE': {
        ballShowPositionArray.push(1, 4);
        break;
      }
      case 'FIRST_TWO_NINE': {
        ballShowPositionArray.push(1, 8);
        break;
      }
      case 'FIRST_THREE_FOUR': {
        ballShowPositionArray.push(2, 3);
        break;
      }
      case 'FIRST_THREE_FIVE': {
        ballShowPositionArray.push(2, 4);
        break;
      }
      case 'FIRST_THREE_EIGHT': {
        ballShowPositionArray.push(2, 7);
        break;
      }
      case 'FIRST_FOUR_SEVEN': {
        ballShowPositionArray.push(3, 6);
        break;
      }
      case 'FIRST_FIVE_SIX': {
        ballShowPositionArray.push(4, 5);
        break;
      }
      case 'LAST_TWO_THREE': {
        ballShowPositionArray = getBallFunction(totalBall - 3, totalBall - 2);
        break;
      }
      case 'FIRST_TWO_TO_FOUR': {
        ballShowPositionArray = getBallFunction(1, 3);
        break;
      }
      case 'ALL':
      default:
        ballShowPositionArray = getBallFunction(0, totalBall - 1);
        break;
    }

    return ballShowPositionArray;
  }

  static getConfigurationFunction(category, ballGroup) {
    switch (category) {
      case 'CONFIGURATION_NUMBER': {
        return getConfigurationNumber(ballGroup);
      }
      case 'BALL_SUM': {
        return getBallSum(ballGroup);
      }
      // K3和值大小單雙(特殊)
      case 'K3_BALL_SUM_BSOE': {
        return getK3BallSumBsOE(ballGroup);
      }
      case 'BALL_SPAN': {
        return getBallSpan(ballGroup);
      }
      case 'SSC_BSOE': {
        return getSSCBSOE(ballGroup);
      }
      case 'SPECIAL_NUMBER': {
        return getSpecialNumber(ballGroup);
      }
      case 'DRAGON_TIGER_TIE': {
        return getDragonTigerTie(ballGroup);
      }
      case 'OE_COUNT': {
        return getOECount(ballGroup);
      }
      case 'MIDDLE_NUMBER': {
        return getMiddleNumber(ballGroup);
      }
      case 'K3_BSOE': {
        return getK3BSOE(ballGroup);
      }
      case 'EMPTY':
      default:
        return showBZHName.EMPTY;
    }
  }
}
