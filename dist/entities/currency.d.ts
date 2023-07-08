export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    static readonly ETHER: Currency;
    protected constructor(decimals: number, symbol?: string, name?: string);
    equals(other: Currency): boolean;
}
export declare const ETHER: Currency;
