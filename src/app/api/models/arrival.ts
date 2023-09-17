/* tslint:disable */
/* eslint-disable */
export interface Arrival {
  '@type': string;

  /**
   * Local date of for arrival or departure
   */
  date: string;

  /**
   * Location of departure or arrival
   */
  location: string;

  /**
   * Local time Date of for arrival or departure
   */
  time: string;
}
