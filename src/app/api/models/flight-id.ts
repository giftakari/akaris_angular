/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface FlightId {
  '@type': string;

  /**
   * Reference to a Flight object eslewhere in the message
   */
  FlightRef?: string;
  Identifier?: Identifier;

  /**
   * Internal ID
   */
  id?: string;
}
