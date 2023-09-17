/* tslint:disable */
/* eslint-disable */
import { FareRule } from '../models/fare-rule';
import { Identifier } from '../models/identifier';
import { ReferenceList } from '../models/reference-list';
import { Result } from '../models/result';
export interface FareRuleListResponse {
  '@type'?: string;
  FareRule?: Array<FareRule>;
  Identifier?: Identifier;
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
