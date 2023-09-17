/* tslint:disable */
/* eslint-disable */
import { ClassOfServicePreferenceTypeEnum } from '../models/class-of-service-preference-type-enum';
export interface ClassOfServicePreference {
  '@type'?: string;

  /**
   * Allows user to specify which class(s) of service they want returned in CatalogOfferings
   */
  ClassesOfService: Array<string>;
  PreferenceType?: ClassOfServicePreferenceTypeEnum;

  /**
   * The legSequence value
   */
  legSequence?: Array<number>;
}
