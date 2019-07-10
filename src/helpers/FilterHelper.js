const THAI_GROUP_ID_FILTER = [9, 10, 11];

export default class FilterHelper {
  static combineBall(ballRows1, ballRows2) {
    const combineBallArray = [];
    for (let a = 0; a < ballRows1.length; a += 1) {
      for (let b = 0; b < ballRows2.length; b += 1) {
        combineBallArray.push(`${ballRows1[a]}${ballRows2[b]}`);
      }
    }
    return combineBallArray;
  }

  static transformArrayToString(combineBallArray) {
    let combineBallText = '';
    combineBallArray.forEach((combineBall) => {
      combineBallText += `${combineBall},`;
    });
    return combineBallText;
  }

  static pair(subFilterArray, ballRows, combineBallArray) {
    const findSameBall = () => {
      let finalPairArray = []; // ['1', '2', ....]
      const sameBallArray = []; // ['111', '222', ...]
      for (let a = 0; a < ballRows.length - 1; a += 1) { // 第一行 ballRow
        let pairArray = [];
        for (let b = a + 1; b < ballRows.length; b += 1) { // 第二行 ballRow
          for (let c = 0; c < ballRows[a].length; c += 1) { // 第一行 ballRow 的 ball
            pairArray = ballRows[a].filter((ball) => ballRows[b].indexOf(ball) > -1);
          }
        }

        if (finalPairArray.length === 0 && a === 0) { // 第一次尚未有ball時，直接加入
          finalPairArray = pairArray;
        } else { // 比較這次結果，將符合條件的ball加入
          finalPairArray = finalPairArray.filter((ball) => pairArray.indexOf(ball) > -1);
        }
      }

      for (let a = 0; a < finalPairArray.length; a += 1) {
        let ballText = '';
        for (let b = 0; b < ballRows.length; b += 1) {
          ballText += `${finalPairArray[a]}`;
        }
        sameBallArray.push(ballText);
      }

      return sameBallArray;
    };

    const findDifferentBall = (sameBallArray) => {
      const differentBallArray = []; // ['121', '122', ...]
      combineBallArray.forEach((combineBall) => {
        if (sameBallArray.indexOf(combineBall) < 0) {
          differentBallArray.push(combineBall);
        }
      });

      return differentBallArray;
    };


    let finalCombineBallArray = []; // ['111', '234', ...]
    subFilterArray.forEach((subFilter) => {
      switch (subFilter) {
        case 'pair': {
          finalCombineBallArray = findSameBall();
          break;
        }
        case 'nonPair': {
          const sameBallArray = findSameBall();
          finalCombineBallArray = findDifferentBall(sameBallArray);
          break;
        }
        default:
          break;
      }
    });

    return finalCombineBallArray;
  }

  // 彩種過濾
  static thaiGameFilter(games) {
    if (!games || games.length === 0) {
      return [];
    }

    const gameList = games
      .filter(({ gameGroupId }) => THAI_GROUP_ID_FILTER.indexOf(gameGroupId) >= 0);

    return gameList;
  }

  static excludeThaiGameFilter(games) {
    if (!games || games.length === 0) {
      return [];
    }

    const gameList = games
      .filter(({ gameGroupId }) => THAI_GROUP_ID_FILTER.indexOf(gameGroupId) < 0);

    return gameList;
  }

  static excludeSoutheastAsiaFilter(games) {
    if (!games || games.length === 0) {
      return [];
    }

    return games.filter((game) => (game.gameMenus && game.gameMenus.length !== 0) && THAI_GROUP_ID_FILTER.indexOf(game.gameMenus[0].gameGroupId) < 0);
  }
}
