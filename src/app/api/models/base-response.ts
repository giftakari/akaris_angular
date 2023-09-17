/* tslint:disable */
/* eslint-disable */
import { CurrencyRateConversion } from '../models/currency-rate-conversion';
import { Identifier } from '../models/identifier';
import { NextSteps } from '../models/next-steps';
import { ReferenceList } from '../models/reference-list';
import { Result } from '../models/result';
export interface BaseResponse {
  CurrencyRateConversion?: Array<CurrencyRateConversion>;
  Identifier?: Identifier;
  NextSteps?: NextSteps;
  ReferenceList?: Array<ReferenceList>;
  Result?: Result;

  /**
   * Optional ID for internal child transactions created for processing a single request (single transaction). Should be a 128 bit GUID format. Also known as ChildTrackingId.
   */
  traceId?: string;

  /**
   * Unique transaction, correlation or tracking id for a single request and reply i.e. for a single transaction. Should be a 128 bit GUID format. Also know as E2ETrackingId.
   */
  transactionId?: string;
}
