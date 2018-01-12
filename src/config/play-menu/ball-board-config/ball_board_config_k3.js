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
        formula: 'oneNum',
    }),
    //Single_3_Same_K3
    1919: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Single_3_Same],
        formula: 'oneNum',
    }),
    //All_3_Same_K3
    1920: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['0'],
        betDigits: [betDigits.All_3_Same],
        formula: 'oneNum',
    }),
    //3_Different_Number_K3
    1922: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Three_Different_Number, betDigits.Three_Different_Number, betDigits.Three_Different_Number],
        formula: 'combineSix',
    }),
    //All_3_Even_K3
    1924: BallBoardConfigRecord({
        ...baseK3Props,
        fixedBalls: ['1'],
        betDigits: [betDigits.All_3_Even],
        formula: 'oneNum',
    }),
    //Single_2_Same_K3
    1926: BallBoardConfigRecord({
        ...baseK3Props,
        betDigits: [betDigits.Single_2_Same],
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