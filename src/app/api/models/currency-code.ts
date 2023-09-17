/* tslint:disable */
/* eslint-disable */

/**
 * Currency codes are the three-letter alphabetic codes that represent the various currencies used throughout the world.
 */
export interface CurrencyCode {

  /**
   * Currency code authority
   */
  codeAuthority?: string;

  /**
   * Currency code decimal authority
   */
  decimalAuthority?: string;

  /**
   * Currency code decimal place
   */
  decimalPlace?: number;
  value?: string;
}
