/* tslint:disable */
/* eslint-disable */
import { FlightSegment } from '../models/flight-segment';
import { PassengerFlight } from '../models/passenger-flight';
import { Product } from '../models/product';
export type ProductAir = Product & {

/**
 * Total duration of all Segments that are part of this ProductAir
 */
'totalDuration'?: string;
'FlightSegment': Array<FlightSegment>;
'PassengerFlight': Array<PassengerFlight>;
};
