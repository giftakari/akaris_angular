/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface BrandId {
  '@type': string;

  /**
   * Used to reference another instance of this object in the same message
   */
  BrandRef?: string;
  Identifier?: Identifier;

  /**
   * Local indentifier within a given message for this object.
   */
  id?: string;
}
