/* tslint:disable */
/* eslint-disable */
import { CarrierPreferenceTypeEnum } from '../models/carrier-preference-type-enum';
export interface CarrierPreference {
  '@type'?: string;

  /**
   * Carrier airline codes
   */
  carriers: Array<string>;

  /**
   * Leg sequence
   */
  legSequence?: Array<number>;
  preferenceType: CarrierPreferenceTypeEnum;
}
