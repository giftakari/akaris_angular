/* tslint:disable */
/* eslint-disable */
import { CurrencyCode } from '../models/currency-code';
export interface TaxBreakdown {

  /**
   * The airport location the tax applies to
   */
  AirportCode: string;

  /**
   * The amount of the tax applied
   */
  Amount?: number;
  CurrencyCode?: CurrencyCode;
}
