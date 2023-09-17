/* tslint:disable */
/* eslint-disable */
export interface AlternateAmount {

  /**
   * The base amount
   */
  amount: number;

  /**
   * Amount currency code
   */
  currencyCode: string;

  /**
   * ISO 4217 decimal standard
   */
  decimalPlace: number;

  /**
   * the fare calculation string
   */
  fareCalculation?: string;

  /**
   * The rate of exchange used to convert the fare calculation
   */
  rateOfExchange?: number;
}
