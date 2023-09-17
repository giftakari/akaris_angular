/* tslint:disable */
/* eslint-disable */
import { ConnectionPointPreferenceTypeEnum } from '../models/connection-point-preference-type-enum';
export interface ConnectionPreferences {
  '@type'?: string;
  ConnectionPoint?: Array<string>;

  /**
   * Leg sequence
   */
  legSequence?: Array<number>;

  /**
   * The maximum acceptable duration of the connection ISO8601
   */
  maxConnectionDuration?: string;

  /**
   * The maximum acceptable overnight duration of the connection ISO8601
   */
  maxOvernightDuration?: string;
  preferenceType?: ConnectionPointPreferenceTypeEnum;
}
