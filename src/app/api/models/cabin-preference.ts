/* tslint:disable */
/* eslint-disable */
import { CabinAirEnum } from '../models/cabin-air-enum';
import { CabinPreferenceTypeEnum } from '../models/cabin-preference-type-enum';
export interface CabinPreference {
  '@type'?: string;
  cabins?: Array<CabinAirEnum>;

  /**
   * Leg sequence
   */
  legSequence?: Array<number>;
  preferenceType?: CabinPreferenceTypeEnum;
}
