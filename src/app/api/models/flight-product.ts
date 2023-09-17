/* tslint:disable */
/* eslint-disable */
import { BrandId } from '../models/brand-id';
import { CabinAirEnum } from '../models/cabin-air-enum';
import { ClassOfServiceAvailability } from '../models/class-of-service-availability';
import { CustomerLoyaltyCredit } from '../models/customer-loyalty-credit';
import { FareQualifierEnum } from '../models/fare-qualifier-enum';
import { FareTypeEnum } from '../models/fare-type-enum';
import { YesNoUnknownEnum } from '../models/yes-no-unknown-enum';
export interface FlightProduct {
  '@type'?: string;
  Brand?: BrandId;
  ClassOfServiceAvailability?: Array<ClassOfServiceAvailability>;
  CustomerLoyaltyCredit?: Array<CustomerLoyaltyCredit>;
  FareQualifier?: FareQualifierEnum;
  cabin?: CabinAirEnum;

  /**
   * The car code
   */
  carCode?: string;

  /**
   * The class of service
   */
  classOfService?: string;

  /**
   * Fare basis code
   */
  fareBasisCode?: string;
  fareType?: FareTypeEnum;

  /**
   * The ATPCO fare type code
   */
  fareTypeCode?: string;

  /**
   * The Segment sequence
   */
  segmentSequence: Array<number>;
  stopoverPriced?: YesNoUnknownEnum;

  /**
   * The ticket designator
   */
  ticketDesignator?: string;

  /**
   * The value code
   */
  valueCode?: string;
}
