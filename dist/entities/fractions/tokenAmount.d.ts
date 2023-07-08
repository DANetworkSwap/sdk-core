import { CurrencyAmount, Fraction } from '.';
import { Token } from '..';
import { BigintIsh } from '../..';
export declare class TokenAmount extends CurrencyAmount {
    readonly token: Token;
    constructor(token: Token, amount: BigintIsh, denominator?: BigintIsh);
    add(other: TokenAmount): TokenAmount;
    subtract(other: TokenAmount): TokenAmount;
    multiply(other: Fraction | BigintIsh): TokenAmount;
    divide(other: Fraction | BigintIsh): TokenAmount;
    /**
     * fromRawAmount
     * @param token the token
     * @param rawAmount the numerator of the fractional token amount
     */
    static fromRawAmount(token: Token, rawAmount: BigintIsh): TokenAmount;
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param token the token
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    static fromFractionalAmount(token: Token, numerator: BigintIsh, denominator: BigintIsh): TokenAmount;
}
