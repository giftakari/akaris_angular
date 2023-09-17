/* tslint:disable */
/* eslint-disable */
import { AvailabilitySourceCodeEnum } from '../models/availability-source-code-enum';
import { CabinAirEnum } from '../models/cabin-air-enum';
import { ContentSourceEnum } from '../models/content-source-enum';
export interface SpecificFlightCriteria {
  '@type'?: string;
  AvailabilitySourceCode?: AvailabilitySourceCodeEnum;
  ContentSource?: ContentSourceEnum;

  /**
   * Arrival date
   */
  arrivalDate?: string;

  /**
   * The arrival time in local timezone
   */
  arrivalTime?: string;

  /**
   * if true indicates that the flight availability was polled (availability check) using connecting segments. If false, flights were polled as point to point segments.
   */
  boundFlightsInd?: boolean;

  /**
   * Brand tier
   */
  brandTier?: number;
  cabin?: CabinAirEnum;

  /**
   * Carrier
   */
  carrier: string;

  /**
   * The class of service
   */
  classOfService?: string;

  /**
   * date of departure
   */
  departureDate: string;

  /**
   * The departure time in local timezone
   */
  departureTime?: string;

  /**
   * Flight Number
   */
  flightNumber: string;

  /**
   * From Airport Code IATA
   */
  from: string;

  /**
   * Segment sequence
   */
  segmentSequence: number;

  /**
   * to Airpor Code IATA
   */
  to: string;
}
