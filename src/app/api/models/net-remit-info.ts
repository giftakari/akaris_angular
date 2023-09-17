/* tslint:disable */
/* eslint-disable */
import { FiledAmount } from '../models/filed-amount';
export interface NetRemitInfo {
  '@type'?: string;

  /**
   * The actual selling fare which will override the Offer base fare on the document
   */
  ActualSellingFare?: number;

  /**
   * The CAR code applied to this product for use in net remit
   */
  CarCode?: string;
  NetBaseAmount?: FiledAmount;

  /**
   * The Value code applied to this product for use in net remit
   */
  ValueCode?: string;
}
