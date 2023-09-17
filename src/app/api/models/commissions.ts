/* tslint:disable */
/* eslint-disable */
import { Commission } from '../models/commission';
import { CommissionApplyEnum } from '../models/commission-apply-enum';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export interface Commissions {
  '@type'?: string;
  ApplyTo?: CommissionApplyEnum;
  Commission: Commission;
  TravelerIdentifierRef?: Array<TravelerIdentifierRef>;
}
