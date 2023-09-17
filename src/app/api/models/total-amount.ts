/* tslint:disable */
/* eslint-disable */
import { CurrencyCode } from '../models/currency-code';
import { CurrencySourceEnum } from '../models/currency-source-enum';
import { Fees } from '../models/fees';
import { Taxes } from '../models/taxes';
export interface TotalAmount {
  '@type'?: string;

  /**
   * The price prior to all applicable taxes of a product such as the rate for a room or fare for a flight.
   */
  Base?: number;
  CurrencyCode?: CurrencyCode;
  Fees?: Fees;
  Taxes?: Taxes;

  /**
   * Specifies the total price including base + taxes + fees
   */
  Total?: number;

  /**
   * True if this amount has been converted from the original amount
   */
  approximateInd?: boolean;
  currencySource?: CurrencySourceEnum;
}
