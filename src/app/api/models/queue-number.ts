/* tslint:disable */
/* eslint-disable */

/**
 * The queue number
 */
export interface QueueNumber {

  /**
   * The Queue Category
   */
  category?: string;

  /**
   * Use PCC to override to queue the Reservation to another PCC
   */
  overridePCC?: string;

  /**
   * Date range subCategory
   */
  subCategory?: string;
  value?: number;
}
