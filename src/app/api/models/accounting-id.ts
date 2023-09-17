/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface AccountingId {
  '@type': string;

  /**
   * Accounting reference
   */
  AccountingRef?: string;
  Identifier?: Identifier;
  id?: string;
}
