/* tslint:disable */
/* eslint-disable */
import { TaxInfo } from '../models/tax-info';
export interface Taxes {
  '@type': string;
  TaxInfo?: Array<TaxInfo>;

  /**
   * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
   */
  TotalTaxes?: number;
}
