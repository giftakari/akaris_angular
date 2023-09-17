/* tslint:disable */
/* eslint-disable */
import { ReservationIdentifier } from '../models/reservation-identifier';
import { TravelerIdentifier } from '../models/traveler-identifier';
export interface ReservationQueryDivide {
  ReservationIdentifier: ReservationIdentifier;
  TravelerIdentifier: Array<TravelerIdentifier>;
}
