/* tslint:disable */
/* eslint-disable */
export interface TaxExemption {
  '@type'?: string;

  /**
   * If true, the Offer/Offering is exempt from all taxes
   */
  allTaxesExemptInd?: boolean;

  /**
   * ISO country code
   */
  countries?: Array<string>;

  /**
   * Tax codes
   */
  taxCodes?: Array<string>;
}
