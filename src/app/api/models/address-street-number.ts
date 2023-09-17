/* tslint:disable */
/* eslint-disable */

/**
 * The street number alone is the numerical number that precedes the street name in the address
 */
export interface AddressStreetNumber {

  /**
   * PO Box Number
   */
  po_Box?: string;

  /**
   * RuralRoute Number
   */
  ruralRouteNmbr?: string;

  /**
   * Dircetion of the Street
   */
  streetDirection?: string;

  /**
   * Street Number Suffix
   */
  streetNmbrSuffix?: string;
  value?: string;
}
