/* tslint:disable */
/* eslint-disable */
import { SpecificFlightCriteria } from '../models/specific-flight-criteria';
export interface ProductCriteriaAir {
  '@type'?: string;
  SpecificFlightCriteria: Array<SpecificFlightCriteria>;

  /**
   * Product criteria air sequence
   */
  sequence: number;
}
