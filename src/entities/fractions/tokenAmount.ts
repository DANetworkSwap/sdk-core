import JSBI from 'jsbi'
import invariant from 'tiny-invariant'
import { CurrencyAmount, Fraction } from '.'
import { Token } from '..'
import { BigintIsh } from '../..'

export class TokenAmount extends CurrencyAmount {
  public readonly token: Token

  constructor(token: Token, amount: BigintIsh, denominator?: BigintIsh) {
    super(token, amount, denominator)
    this.token = token
  }

  public add(other: TokenAmount): TokenAmount {
    invariant(this.token.equals(other.token), 'TOKEN')
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw))
  }

  public subtract(other: TokenAmount): TokenAmount {
    invariant(this.token.equals(other.token), 'TOKEN')
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw))
  }

  public multiply(other: Fraction | BigintIsh): TokenAmount {
    const multiplied = super.multiply(other)
    return TokenAmount.fromFractionalAmount(this.token, multiplied.numerator, multiplied.denominator)
  }

  public divide(other: Fraction | BigintIsh): TokenAmount {
    const divided = super.divide(other)
    return TokenAmount.fromFractionalAmount(this.token, divided.numerator, divided.denominator)
  }

  /**
   * fromRawAmount
   * @param token the token
   * @param rawAmount the numerator of the fractional token amount
   */
  public static fromRawAmount(token: Token, rawAmount: BigintIsh): TokenAmount {
    return new TokenAmount(token, rawAmount)
  }

  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param token the token
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  public static fromFractionalAmount(token: Token, numerator: BigintIsh, denominator: BigintIsh): TokenAmount {
    return new TokenAmount(token, numerator, denominator)
  }
}
