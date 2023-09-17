/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface PaymentId {
  '@type': string;
  Identifier?: Identifier;
  PaymentRef?: string;
  id?: string;
}
