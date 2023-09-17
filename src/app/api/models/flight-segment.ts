/* tslint:disable */
/* eslint-disable */
import { FlightId } from '../models/flight-id';
import { Measurement } from '../models/measurement';
import { OperationalStatusEnum } from '../models/operational-status-enum';
export interface FlightSegment {
  '@type'?: string;
  CO2Actual?: Measurement;
  Flight: FlightId;
  OperationalStatus?: OperationalStatusEnum;

  /**
   * If present and true, the Segments in this Connection must be sold and cancelled together.
   */
  boundFlightsInd?: boolean;

  /**
   * The actual duration (in minutes) between
   */
  connectionDuration?: string;

  /**
   * Local indentifier within a given message for this object.
   */
  id?: string;

  /**
   * Segment sequence
   */
  sequence: number;
}
