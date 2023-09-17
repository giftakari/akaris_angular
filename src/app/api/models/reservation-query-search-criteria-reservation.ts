/* tslint:disable */
/* eslint-disable */
import { DateRange } from '../models/date-range';
import { PersonName } from '../models/person-name';
export interface ReservationQuerySearchCriteriaReservation {
  '@type': string;

  /**
   * The city or airport code a flight is arriving at in the Reservation
   */
  Arrival?: string;

  /**
   * The city or airport code a flight is departing from in the Reservation
   */
  Departure?: string;

  /**
   * Local date of flight departure
   */
  DepartureDate?: string;
  DepartureDateRange?: DateRange;
  PersonName?: PersonName;

  /**
   * If true, ReservationDetail will be returned
   */
  detailViewInd?: boolean;
}
