/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface ReceiptId {
  '@type': string;
  Identifier?: Identifier;
  ReceiptRef?: string;

  /**
   * The verification number.
   */
  id?: string;
}
