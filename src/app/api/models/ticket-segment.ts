/* tslint:disable */
/* eslint-disable */
import { Arrival } from '../models/arrival';
import { DateRange } from '../models/date-range';
import { Departure } from '../models/departure';
import { TicketBaggage } from '../models/ticket-baggage';
import { TicketStatusEnum } from '../models/ticket-status-enum';
export interface TicketSegment {
  '@type'?: string;
  Arrival: Arrival;

  /**
   * The marketing carrier of the flight on this ticket segment.
   */
  Carrier: string;

  /**
   * The booking class of service fare bases code assigned to this ticket segment example :F - First Class, J - Business Class, W - Premium Economy, Y - Economy/Coach
   */
  ClassOfService?: string;
  Departure: Departure;

  /**
   * The Fare Basis is the code that appears on the ticket in the Fare Basis box
   */
  FareBasisCode?: string;

  /**
   * A status code indicates the status of an air segment
   */
  FlightStatusCode: string;

  /**
   * The flight number.
   */
  Number: string;
  Status?: TicketStatusEnum;
  TicketBaggage: TicketBaggage;
  ValidDateRange: DateRange;

  /**
   * If true, the ticketSegment is a connecting segment
   */
  connectionInd?: boolean;

  /**
   * The order in which you checked in to your flight
   */
  sequence?: number;
}
