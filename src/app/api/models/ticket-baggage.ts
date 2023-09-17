/* tslint:disable */
/* eslint-disable */
import { Measurement } from '../models/measurement';
export interface TicketBaggage {
  '@type'?: string;

  /**
   * The total dimensions  of baggage
   */
  Measurement?: Array<Measurement>;

  /**
   * How many baggage allowed
   */
  quantity?: number;
}
