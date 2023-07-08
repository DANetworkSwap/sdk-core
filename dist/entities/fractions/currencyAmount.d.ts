import JSBI from 'jsbi';
import { Currency } from '../currency';
import { Fraction } from './fraction';
import { BigintIsh, Rounding } from '../../constants';
export declare class CurrencyAmount extends Fraction {
    readonly currency: Currency;
    readonly decimalScale: JSBI;
    get raw(): JSBI;
    static ether(amount: BigintIsh): CurrencyAmount;
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    static fromRawAmount(currency: Currency, rawAmount: BigintIsh): CurrencyAmount;
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    static fromFractionalAmount(currency: Currency, numerator: BigintIsh, denominator: BigintIsh): CurrencyAmount;
    protected constructor(currency: Currency, numerator: BigintIsh, denominator?: BigintIsh);
    add(other: CurrencyAmount): CurrencyAmount;
    subtract(other: CurrencyAmount): CurrencyAmount;
    multiply(other: Fraction | BigintIsh): CurrencyAmount;
    divide(other: Fraction | BigintIsh): CurrencyAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    toExact(format?: object): string;
}
