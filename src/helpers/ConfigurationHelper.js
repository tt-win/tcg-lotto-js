export default class ConfigurationHelper {
  static getBallShowPosition(showPosition, totalBall) {
    const ballShowPositionArray = [];
    switch (showPosition) {
      case 'FIRST_FIVE': {
        ballShowPositionArray.push(0, 1, 2, 3, 4);
        break;
      }
      case 'FIRST_FOUR': {
        ballShowPositionArray.push(0, 1, 2, 3);
        break;
      }
      case 'FIRST_THREE': {
        ballShowPositionArray.push(0, 1, 2);
        break;
      }
      case 'FIRST_TWO': {
        ballShowPositionArray.push(0, 1);
        break;
      }
      case 'LAST_FIVE': {
        for (let a = totalBall - 1; a >= totalBall - 5; a -= 1) {
          ballShowPositionArray.push(a);
        }
        break;
      }
      case 'LAST_FOUR': {
        for (let a = totalBall - 1; a >= totalBall - 4; a -= 1) {
          ballShowPositionArray.push(a);
        }
        break;
      }
      case 'LAST_THREE': {
        for (let a = totalBall - 1; a >= totalBall - 3; a -= 1) {
          ballShowPositionArray.push(a);
        }
        break;
      }
      case 'LAST_TWO': {
        for (let a = totalBall - 1; a >= totalBall - 2; a -= 1) {
          ballShowPositionArray.push(a);
        }
        break;
      }
      case 'LAST_ONE': {
        for (let a = totalBall - 1; a >= totalBall - 1; a -= 1) {
          ballShowPositionArray.push(a);
        }
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
      case 'FIRST_TWO_THREE_FOUR': {
        ballShowPositionArray.push(1, 2, 3);
        break;
      }
      case 'ALL':
      default:
        for (let a = 0; a < totalBall; a += 1) {
          ballShowPositionArray.push(a);
        }
        break;
    }

    return ballShowPositionArray;
  }
}
