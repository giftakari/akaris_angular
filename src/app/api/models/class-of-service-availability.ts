/* tslint:disable */
/* eslint-disable */
import { AvailabilityStatusEnum } from '../models/availability-status-enum';

/**
 * The class of service
 */
export interface ClassOfServiceAvailability {

  /**
   * The class of service number value
   */
  number?: number;
  status?: AvailabilityStatusEnum;
  value?: string;
}
