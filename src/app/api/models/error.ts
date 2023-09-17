/* tslint:disable */
/* eslint-disable */
import { NameValuePair } from '../models/name-value-pair';
export interface Error {
  '@type': string;

  /**
   * The Travelport standardized error or warning message
   */
  Message?: string;
  NameValuePair?: Array<NameValuePair>;

  /**
   * Http standard response code
   */
  StatusCode?: number;
}
