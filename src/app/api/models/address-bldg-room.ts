/* tslint:disable */
/* eslint-disable */

/**
 * Address with building and room number
 */
export interface AddressBldgRoom {

  /**
   * When true, the information is a building name. When false, it is an apartment or room #
   */
  buldingInd?: boolean;
  value?: string;
}
