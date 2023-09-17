/* tslint:disable */
/* eslint-disable */
import { CustomerLoyalty } from '../models/customer-loyalty';
import { TravelerGeographicLocation } from '../models/traveler-geographic-location';
export interface PassengerCriteria {
  '@type'?: string;
  CustomerLoyalty?: Array<CustomerLoyalty>;
  TravelerGeographicLocation?: TravelerGeographicLocation;

  /**
   * Age
   */
  age?: number;

  /**
   * Number
   */
  number?: number;

  /**
   * Passenger Type Code
   */
  passengerTypeCode?: string;

  /**
   * If true then the Offering\/Offer will only be returned for the specific passengerTypeCode
   */
  specifiedPassengerTypeCodeOnlyInd?: boolean;
}
