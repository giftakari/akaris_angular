/* tslint:disable */
/* eslint-disable */

/**
 * Detail of the travel agency that issues the ticket
 */
export interface AgencyInfo {

  /**
   * Agency code
   */
  code?: string;

  /**
   * Name of the Agency
   */
  name: string;

  /**
   * Place of the agency
   */
  place: string;

  /**
   * Sales type
   */
  salesType?: string;

  /**
   * Ticketed date
   */
  ticketedDate?: string;

  /**
   * Ticketing city
   */
  ticketingCity: string;

  /**
   * Ticketing country
   */
  ticketingCountry: string;

  /**
   * Ticketing PCC
   */
  ticketingPCC?: string;
}
