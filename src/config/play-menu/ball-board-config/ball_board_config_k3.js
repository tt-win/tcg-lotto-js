import { BallBoardConfigRecord, baseBSOEProps } from './ball_board_config_record';
import { betDigits } from './bet_digits';

const baseK3Props = {
    ballRange: [1, 6],
    ballDigit: 1,
};

export default {
    //Sum_Number_K3
    1917: BallBoardConfigRecord({
        ...baseK3Props,
        ballRange: [3, 18],
        betDigits: [betDigits.SUM],
        formula: 'oneBallOneNum',
    }),
    //Single_3_Same_K3
    1919: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Single_3_Same],
        formula: 'oneBallOneNum',
    }),
    //All_3_Same_K3
    1920: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['0'],
        ballI18n: {
            0: 'ball.k3.All_3_Same_K3',
        },
        betDigits: [betDigits.All_3_Same],
        formula: 'oneNum',
        hasToolbar: false,
    }),
    //3_Different_Number_K3
    1922: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Three_Different_Number],
        formula: 'combineSix',
    }),
    //All_3_Even_K3
    1924: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['1'],
        ballI18n: {
            1: 'ball.k3.All_3_Same_K3',
        },
        betDigits: [betDigits.All_3_Even],
        formula: 'oneNum',
        hasToolbar: false,
    }),
    //Single_2_Same_K3
    1926: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Single_2_Same, betDigits.Single_2_Not_Same],
        formula: 'oneNum',
    }),
    //Multi_2_Same_K3
    1927: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Multi_2_Same],
        formula: 'oneNum',
    }),
    //2_Different_Number_K3
    1929: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Two_Different_Number],
        formula: 'twoDifferent',
    }),
    //Sum_BS_OE_K3
    1931: BallBoardConfigRecord({
        ...baseBSOEProps,
        betDigits: [betDigits.Sum_BS_OE],
        formula: 'oneNum',
    }),
};