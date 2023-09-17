/* tslint:disable */
/* eslint-disable */
import { FromTo } from '../models/from-to';
import { TimeRange } from '../models/time-range';
export interface SearchCriteriaFlight {
  DepartureTimeRange?: TimeRange;
  From: FromTo;
  To: FromTo;

  /**
   * Preferred local arrival date. Cannot be used in conjunction with departure date.
   */
  arrivalDate?: string;

  /**
   * Preferred local arrival time. Cannot be used in conjunction with departure time.
   */
  arrivalTime?: string;

  /**
   * Preferred local departure date. Cannot be used in conjunction with arrival date
   */
  departureDate: string;

  /**
   * Preferred local departure time. Cannot be used in conjunction with arrival time
   */
  departureTime?: string;

  /**
   * Leg sequence
   */
  legSequence?: number;
}
