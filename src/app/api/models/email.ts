/* tslint:disable */
/* eslint-disable */
import { OptInStatusEnum } from '../models/opt-in-status-enum';
import { YesNoInheritEnum } from '../models/yes-no-inherit-enum';

/**
 * Electronic email addresses, in IETF specified format.
 */
export interface Email {

  /**
   * Assigned Type: c-1100:StringText
   */
  comment?: string;

  /**
   * Type of the e-mail
   */
  emailType?: string;

  /**
   * Electronic email addresses, in IETF specified format.
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

  /**
   * Mime media type
   */
  preferredFormat?: string;

  /**
   * If true then the email address came from the provisioning process
   */
  provisionedInd?: boolean;
  shareMarketing?: YesNoInheritEnum;
  shareSync?: YesNoInheritEnum;

  /**
   * If true, this is a valid email address that has been system verified via a successful email transmission.
   */
  validInd?: boolean;
  value?: string;
}
