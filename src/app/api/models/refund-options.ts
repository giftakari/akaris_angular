/* tslint:disable */
/* eslint-disable */
import { RefundPenaltyRange } from '../models/refund-penalty-range';
import { RefundTypeEnum } from '../models/refund-type-enum';
export interface RefundOptions {
  '@type'?: string;
  RefundPenaltyRange?: RefundPenaltyRange;
  refundTypes: Array<RefundTypeEnum>;
}
