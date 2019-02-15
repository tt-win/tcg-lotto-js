import _ from 'lodash';
import { showBZHName } from 'configs/draw_history_config';

function getBallFunction(startBall, endBall) {
  const ballShowPositionArray = [];
  for (let a = startBall; a <= endBall; a += 1) {
    ballShowPositionArray.push(a);
  }
  return ballShowPositionArray;
}

export default class ConfigurationHelper {
  static getBallShowPosition(showPosition, totalBall) {
    let ballShowPositionArray = [];
    switch (showPosition) {
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

  static getConfigurationFunction(category) {

  }

  static getConfigurationNumber(ballGroup) {
    const uniqNumArray = _.uniq(ballGroup); // array中不一樣元素
    let configurationNumber = 1;
    let numberObject = {};

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
    // console.log('numberObject', numberObject);

    // 計算組態數
    for (let a = ballGroup.length; a > 1; a -= 1) {
      configurationNumber *= a;
    }
    uniqNumArray.forEach((ball) => {
      for (let a = numberObject[ball]; a > 1; a -= 1) {
        configurationNumber /= a;
      }
    });
    // console.log('configurationNumber', configurationNumber);

    switch(configurationNumber) {
      case 1:
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
    }
  }
}
