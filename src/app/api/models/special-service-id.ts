/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface SpecialServiceId {
  '@type': string;
  Identifier?: Identifier;

  /**
   * Internal Id
   */
  id?: string;
}
