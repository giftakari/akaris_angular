/* tslint:disable */
/* eslint-disable */
import { OptInStatusEnum } from '../models/opt-in-status-enum';
import { YesNoInheritEnum } from '../models/yes-no-inherit-enum';

/**
 * Confidential details for marketing purpose
 */
export interface Privacy {

  /**
   * Optional internally referenced id
   */
  id?: string;

  /**
   * The datetime of receiving the opt in notice
   */
  optInDate?: string;
  optInStatus?: OptInStatusEnum;

  /**
   * The datetime the opt out notice was received
   */
  optOutDate?: string;
  optOutInd?: YesNoInheritEnum;
  shareMarketing?: YesNoInheritEnum;
  shareSync?: YesNoInheritEnum;
}
