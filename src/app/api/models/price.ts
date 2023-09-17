/* tslint:disable */
/* eslint-disable */
import { CurrencyCode } from '../models/currency-code';
import { VendorCurrencyTotal } from '../models/vendor-currency-total';
export interface Price {
  '@type': string;

  /**
   * The total amount not including taxes and\/or fees
   */
  Base?: number;
  CurrencyCode?: CurrencyCode;

  /**
   * The total of the fees included in the total price
   */
  TotalFees?: number;

  /**
   * The total price of the product in the currency indicated
   */
  TotalPrice?: number;

  /**
   * The total of the taxes included in the total price
   */
  TotalTaxes?: number;
  VendorCurrencyTotal?: VendorCurrencyTotal;

  /**
   * Internally referenced id
   */
  id?: string;
}
