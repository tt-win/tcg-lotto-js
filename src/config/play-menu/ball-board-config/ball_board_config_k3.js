import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseK3Props = {
    ballRange: [1, 6],
    ballDigit: 1,
    canShowHotGap: false,
    isShowHotGapTabs: false,
};

export default {
    //Sum_K3
    1917: BallBoardConfigRecord({
        ...baseK3Props,
        ballRange: [3, 18],
        betDigits: [betDigits.SUM],
        formula: 'oneBallOneNum',
        hasToolbar: false,
    }),
    //Single_Same_3_K3
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
    //All_Same_3_K3
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
    //Different_3_K3
    1922: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Different_3_K3],
        formula: 'combineSix',
        ballShowWithDice: true,
        boardClassNames: 'Different_3_K3',
    }),
    //All_Even_3_K3
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
    //Single_Same_2_K3
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
    //Multi_Same_2_K3
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
    //Different_2_K3
    1929: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Different_2_K3],
        formula: 'combine6',
      ballShowWithDice: true,
      boardClassNames: 'Different_2_K3',
    }),
    //Sum_BS_OE_K3
    1931: BallBoardConfigRecord({
        ...baseBSOEProps,
        boardClassNames: 'Sum_BS_OE_K3',
        betDigits: [betDigits.Sum_BS_OE_K3],
        formula: 'oneNum',
        multi: false,
        canShowHotGap: false,
        isShowHotGapTabs: false,
    }),
    //Sum_K3_ENT
    1934: BallBoardConfigRecord({
        ...baseK3Props,
    }),
};