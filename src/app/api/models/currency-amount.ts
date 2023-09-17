/* tslint:disable */
/* eslint-disable */
import { CurrencySourceEnum } from '../models/currency-source-enum';

/**
 * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
 */
export interface CurrencyAmount {

  /**
   * True if the currency amount has been converted from the original amount
   */
  approximateInd?: boolean;

  /**
   * An ISO 4217 alpha character code that specifies a money unit
   */
  code?: string;
  currencySource?: CurrencySourceEnum;

  /**
   * Minor units are a mechanism for expressing the relationship between a major currency unit and its corresponding minor currency unit.
   */
  minorUnit?: number;
  value?: number;
}
