/* tslint:disable */
/* eslint-disable */
import { AlternateAmount } from '../models/alternate-amount';
import { Commission } from '../models/commission';
import { CurrencyCode } from '../models/currency-code';
import { Fees } from '../models/fees';
import { FiledAmount } from '../models/filed-amount';
import { PaidTaxes } from '../models/paid-taxes';
import { Taxes } from '../models/taxes';
export interface TicketPrice {
  '@type'?: string;
  AdditionalCollection?: FiledAmount;
  Base: number;
  Commission?: Commission;
  CurrencyCode: CurrencyCode;
  Fees?: Fees;
  FiledAmount?: FiledAmount;
  NetAmount?: AlternateAmount;
  PaidTaxes?: Taxes;
  Taxes?: PaidTaxes;
  Total: number;

  /**
   * if true, this is a BT fare and the base amount is not exposed
   */
  bTFareInd?: boolean;

  /**
   * An itineraray used as the start and finish of a particular fare
   */
  fareBreakdown?: string;

  /**
   * Calculation of applicable fare
   */
  fareCalculation?: string;

  /**
   * if true, this is an IT fare and the base amount is not exposed
   */
  iTFareInd?: boolean;
}
