/* tslint:disable */
/* eslint-disable */
import { Measurement } from '../models/measurement';
export interface Co2EmissionsData {
  '@type'?: string;
  Actual?: Measurement;
  Typical?: Measurement;

  /**
   * The variance of CO2 emission from the typical emission value represented as a percentage. If positive the CO2 emission is higher than the industry average. If negative it is lower than the industry average
   */
  Variance?: number;
}
