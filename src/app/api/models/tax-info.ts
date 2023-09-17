/* tslint:disable */
/* eslint-disable */
import { CurrencyCode } from '../models/currency-code';
import { TaxBreakdown } from '../models/tax-breakdown';
export interface TaxInfo {

  /**
   * The amount of the tax applied
   */
  Amount: number;
  CurrencyCode?: CurrencyCode;

  /**
   * The breakdown of the tax for this tax code
   */
  TaxBreakdown: Array<TaxBreakdown>;

  /**
   * The tax code
   */
  TaxCode: string;
}
