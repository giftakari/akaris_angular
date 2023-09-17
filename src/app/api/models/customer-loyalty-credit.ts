/* tslint:disable */
/* eslint-disable */
import { CustomerLoyalty } from '../models/customer-loyalty';
export interface CustomerLoyaltyCredit {
  '@type'?: string;
  CustomerLoyalty: CustomerLoyalty;

  /**
   * Represents the amount of award credit awarded for this offer\/offering. Award credit can be used for purchasing goods and services through a customer loyalty program
   */
  Earned: string;

  /**
   * Represents the amount of status credit awarded for this offer\/offering. Status credit allow a customer to move up the ladder of a customer loyalty program
   */
  Status: string;
}
