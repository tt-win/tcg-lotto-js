import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';
import { ballConfigurationCategory } from './ball_configuration_config';

const baseK3Props = {
  ballRange: [1, 6],
  ballDigit: 1,
  canShowHotGap: false,
  ballConfigurationCategory: ballConfigurationCategory.K3_BALL_SUM_BSOE,
};

export default {
    // Sum_K3
  1917: BallBoardConfigRecord({
    ...baseK3Props,
    ballRange: [3, 18],
    betDigits: [betDigits.SUM],
    boardClassNames: 'Sum_K3 sum',
    formula: 'oneBallOneNum',
    hasToolbar: false,
    delimiter: ',',
    forceUseDelimiter: true,
  }),
    // Single_Same_3_K3
  1919: BallBoardConfigRecord({
    ...baseK3Props,
    ballI18n: {
      1: 'ball.k3.Single_Same_3_K3_ball_1',
      2: 'ball.k3.Single_Same_3_K3_ball_2',
      3: 'ball.k3.Single_Same_3_K3_ball_3',
      4: 'ball.k3.Single_Same_3_K3_ball_4',
      5: 'ball.k3.Single_Same_3_K3_ball_5',
      6: 'ball.k3.Single_Same_3_K3_ball_6',
    },
    boardClassNames: 'Single_Same_3_K3',
        // betDigits: [betDigits.Single_Same_3_K3],
    betDigits: [betDigits.EMPTY],
    hasToolbar: false,
    formula: 'oneBallOneNum',
    ballShowWithDice: true,
  }),
    // All_Same_3_K3
  1920: BallBoardConfigRecord({
    ...baseK3Props,
    fixedBalls: ['0'],
    ballI18n: {
      0: 'ball.k3.All_Same_3_K3',
    },
    boardClassNames: 'All_Same_3_K3',
        // betDigits: [betDigits.All_Same_3_K3],
    betDigits: [betDigits.EMPTY],
    formula: 'oneNum',
    hasToolbar: false,
  }),
    // Different_3_K3
  1922: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.Different_3_K3],
    formula: 'combineSix',
    ballShowWithDice: true,
    boardClassNames: 'Different_3_K3',
  }),
    // All_Even_3_K3
  1924: BallBoardConfigRecord({
    ...baseK3Props,
    fixedBalls: ['1'],
    ballI18n: {
      1: 'ball.k3.All_Even_3_K3',
    },
    boardClassNames: 'All_Even_3_K3',
        // betDigits: [betDigits.All_Even_3_K3],
    betDigits: [betDigits.EMPTY],
    formula: 'oneNum',
    hasToolbar: false,
  }),
    // Single_Same_2_K3
  1926: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.Single_2_Same, betDigits.Single_2_Not_Same],
    ballI18nDigitExclude: [betDigits.Single_2_Not_Same],
    ballI18n: {
      1: 'ball.k3.Single_2_Same_ball_1',
      2: 'ball.k3.Single_2_Same_ball_2',
      3: 'ball.k3.Single_2_Same_ball_3',
      4: 'ball.k3.Single_2_Same_ball_4',
      5: 'ball.k3.Single_2_Same_ball_5',
      6: 'ball.k3.Single_2_Same_ball_6',
    },
    formula: 'combineChooseOneAndOneAndNotDuplicatedAndByOne',
    rowMulti: false,
    hasToolbar: false,
    ballShowWithDice: true,
    boardClassNames: 'Single_Same_2_K3',
  }),
    // Multi_Same_2_K3
  1927: BallBoardConfigRecord({
    ...baseK3Props,
    boardClassNames: 'Multi_Same_2_K3',
    ballI18n: {
      1: 'ball.k3.Single_2_Same_ball_1',
      2: 'ball.k3.Single_2_Same_ball_2',
      3: 'ball.k3.Single_2_Same_ball_3',
      4: 'ball.k3.Single_2_Same_ball_4',
      5: 'ball.k3.Single_2_Same_ball_5',
      6: 'ball.k3.Single_2_Same_ball_6',
    },
    betDigits: [betDigits.Multi_Same_2_K3],
    formula: 'oneBallOneNum',
    ballShowWithDice: true,
  }),
    // Different_2_K3
  1929: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.Different_2_K3],
    formula: 'combine6',
    ballShowWithDice: true,
    boardClassNames: 'Different_2_K3',
  }),
    // Sum_BS_OE_K3
  1931: BallBoardConfigRecord({
    ...baseK3Props,
    ...baseBSOEProps,
    boardClassNames: 'Sum_BS_OE_K3',
    betDigits: [betDigits.Sum_BS_OE_K3],
    formula: 'oneNum',
    multi: false,
    canShowHotGap: false,
  }),
    // Sum_Com_BS_OE_K3
  2236: BallBoardConfigRecord({
    ...baseK3Props,
    ...baseBSOEProps,
    fixedBalls: ['0_2', '0_3', '1_2', '1_3'],
    boardClassNames: 'sum-com-bsoe',
    ballI18n: {
      '0_2': 'ball.comBSOE.bigOdd',
      '0_3': 'ball.comBSOE.bigEven',
      '1_2': 'ball.comBSOE.smallOdd',
      '1_3': 'ball.comBSOE.smallEven',
    },
    betDigits: [betDigits.EMPTY],
    multi: true, // 可否複選
    formula: 'oneBallOneNum',   // 1球1注
    delimiter: ',',
    forceUseDelimiter: true,
    canShowHotGap: false,
    hasToolbar: true,
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
  }),
  // Any_Code_Win_K3
  2240: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.Any_Code_Win_K3],
    formula: 'oneBallOneNum',
    delimiter: ',',
    forceUseDelimiter: true,
    ballShowWithDice: true,
    boardClassNames: 'Different_3_K3',
  }),
  // Any_Code_Not_Win_K3
  2241: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.Any_Code_Not_Win_K3],
    formula: 'oneBallOneNum',
    delimiter: ',',
    forceUseDelimiter: true,
    ballShowWithDice: true,
    boardClassNames: 'Different_3_K3',
  }),
    // Sum_K3_ENT
  1934: BallBoardConfigRecord({
    ...baseK3Props,
  }),
  // Span
  2266: BallBoardConfigRecord({
    ...baseK3Props,
    betDigits: [betDigits.EMPTY],
    formula: 'oneBallOneNum',
    ballRange: [0, 5],
    delimiter: ',',
    forceUseDelimiter: true,
    displayBallBonus: true,
    boardClassNames: 'Span_K3',
    canHideToolBarBig: true,
    canHideToolBarSmall: true,
    canHideToolBarOdd: true,
    canHideToolBarEven: true,
    prizeTypeMapping: {
      '0': 'K3_Span_0',
      '1': 'K3_Span_1',
      '2': 'K3_Span_2',
      '3': 'K3_Span_3',
      '4': 'K3_Span_4',
      '5': 'K3_Span_5',
    },
  }),
};
