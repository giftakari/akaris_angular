/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface OfferId {
  '@type': string;
  Identifier?: Identifier;

  /**
   * Local indentifier within a given message for this object.
   */
  id?: string;

  /**
   * Used to reference another instance of this object in the same message
   */
  offerRef?: string;
}
