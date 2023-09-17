/* tslint:disable */
/* eslint-disable */

/**
 * A conversion metric from standard to another with the contextual authority such as IATA, OAG, ISO, etc.
 */
export interface ConversionRate {

  /**
   * Rate as of
   */
  rateAsOf?: string;

  /**
   * Rate authority
   */
  rateAuthority?: string;
  value?: number;
}
