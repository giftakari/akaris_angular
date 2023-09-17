/* tslint:disable */
/* eslint-disable */
import { TravelerGeographicTypeEnum } from '../models/traveler-geographic-type-enum';

/**
 * Specifies which location the Traveler resides in. Used for resident fares
 */
export interface TravelerGeographicLocation {

  /**
   * if true, this request qualifies for general large family resident discount. General large families (up to 3 children) from Spain, from the EU/EEA or of any other nationality, whose residency in Spain is recognised and who are in possession of a large-family certificate issued by the autonomous community in which they live.
   */
  generalLargeFamilyResidentDiscountInd?: boolean;

  /**
   * Resident code, currently used to handle Spanish residency fares for NDC channel where this code is required in addition to the city of residence
   */
  residentGeographicCode?: string;

  /**
   * if true, this request qualifies for special large family resident discount. Special large families (4 or more children) from Spain, from the EU/EEA or of any other nationality, whose residency in Spain is recognised and who are in possession of a large-family certificate issued by the autonomous community in which they live.
   */
  specialLargeFamilyResidentDiscountInd?: boolean;
  travelerGeographicLocationType?: TravelerGeographicTypeEnum;
  value?: string;
}
