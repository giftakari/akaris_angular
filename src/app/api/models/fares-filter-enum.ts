/* tslint:disable */
/* eslint-disable */

/**
 * Defines the type of fares to return (Only public fares, Only private fares, Only agency private fares, Only
 */
export enum FaresFilterEnum {
  PublicFaresOnly = 'PublicFaresOnly',
  PrivateFaresOnly = 'PrivateFaresOnly',
  AgencyPrivateFaresOnly = 'AgencyPrivateFaresOnly',
  AirlinePrivateFaresOnly = 'AirlinePrivateFaresOnly',
  PublicAndPrivateFares = 'PublicAndPrivateFares',
  NetFaresOnly = 'NetFaresOnly',
  AllFares = 'AllFares'
}
