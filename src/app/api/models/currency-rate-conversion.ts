/* tslint:disable */
/* eslint-disable */
import { ConversionRate } from '../models/conversion-rate';
import { CurrencyCode } from '../models/currency-code';
export interface CurrencyRateConversion {
  '@type'?: string;
  ConversionRate: ConversionRate;
  SourceCurrency: CurrencyCode;
  TargetCurrency: CurrencyCode;
}
