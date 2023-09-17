/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface ReservationId {
  '@type': string;
  Identifier?: Identifier;

  /**
   * Internal ID
   */
  id?: string;
}
