/* tslint:disable */
/* eslint-disable */
import { DisplaySequence } from '../models/display-sequence';
export interface ReservationDisplaySequence {
  '@type': string;
  DisplaySequence?: Array<DisplaySequence>;

  /**
   * The sequence of the autoDeleteDate (retention segment) within the Reservation
   */
  autoDeleteDateSequence?: number;
}
