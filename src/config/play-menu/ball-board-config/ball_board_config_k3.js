import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseK3Props = {
    ballRange: [1, 6],
    ballDigit: 1,
    canShowHotGap: false,
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
        boardClassNames: 'Single_Same_3_K3',
        betDigits: [betDigits.Single_Same_3_K3],
        formula: 'oneBallOneNum',
    }),
    //All_Same_3_K3
    1920: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['0'],
        ballI18n: {
            0: 'ball.k3.All_Same_3_K3',
        },
        boardClassNames: 'All_Same_3_K3',
        betDigits: [betDigits.All_Same_3_K3],
        formula: 'oneNum',
        hasToolbar: false,
    }),
    //Different_3_K3
    1922: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Different_3_K3],
        formula: 'combineSix',
    }),
    //All_Even_3_K3
    1924: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['1'],
        ballI18n: {
            1: 'ball.k3.All_Even_3_K3',
        },
        boardClassNames: 'All_Even_3_K3',
        betDigits: [betDigits.All_Even_3_K3],
        formula: 'oneNum',
        hasToolbar: false,
    }),
    //Single_Same_2_K3
    1926: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Single_2_Same, betDigits.Single_2_Not_Same],
        formula: 'combineChooseOneAndOneAndNotDuplicatedAndByOne',
        rowMulti: false,
        hasToolbar: false,
    }),
    //Multi_Same_2_K3
    1927: BallBoardConfigRecord({
        ...baseK3Props,
        boardClassNames: 'Multi_Same_2_K3',
        betDigits: [betDigits.Multi_Same_2_K3],
        formula: 'oneBallOneNum',
    }),
    //Different_2_K3
    1929: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Different_2_K3],
        formula: 'combine6',
    }),
    //Sum_BS_OE_K3
    1931: BallBoardConfigRecord({
        ...baseBSOEProps,
        boardClassNames: 'Sum_BS_OE_K3',
        betDigits: [betDigits.Sum_BS_OE_K3],
        formula: 'oneNum',
        multi: false,
        canShowHotGap: false,
    }),
};