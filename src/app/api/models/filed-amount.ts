/* tslint:disable */
/* eslint-disable */

/**
 * The base amount of a ticket price or net price that is filed in local currency
 */
export interface FiledAmount {

  /**
   * Filed amount currency code authority
   */
  codeAuthority: string;

  /**
   * Filed amount currency code
   */
  currencyCode?: string;

  /**
   * ISO 4217 standard decimal authority
   */
  decimalAuthority?: string;

  /**
   * ISO 4217 standard has a different number of decimals
   */
  decimalPlace: number;

  /**
   * Filed amount value
   */
  value?: number;
}
