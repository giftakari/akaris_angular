/* tslint:disable */
/* eslint-disable */
import { FlightProduct } from '../models/flight-product';
export interface PassengerFlight {
  '@type'?: string;
  FlightProduct?: Array<FlightProduct>;

  /**
   * Number of passengers of the specified passenger type code
   */
  passengerQuantity?: number;

  /**
   * Passenger type code
   */
  passengerTypeCode?: string;
}
