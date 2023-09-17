/* tslint:disable */
/* eslint-disable */
import { Amount } from '../models/amount';
import { EmdDescription } from '../models/emd-description';
import { EmdStatusEnum } from '../models/emd-status-enum';
export interface EmdSegment {
  '@type'?: string;
  Amount?: Amount;

  /**
   * The date of service the service is available for
   */
  DateOfService?: string;
  EMDDescription?: EmdDescription;

  /**
   * The location the EMD should be presented to to supply the service
   */
  PresentAt?: string;

  /**
   * The airline the EMD should be presented to to supply the service
   */
  PresentTo?: string;

  /**
   * The routing the service is valid on
   */
  Routing?: string;
  Status?: EmdStatusEnum;

  /**
   * The quantity of the ancillary available on this EMDSegment
   */
  quantity?: number;

  /**
   * Sequence of EMDSegment
   */
  sequence: number;
}
