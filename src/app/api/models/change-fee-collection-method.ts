/* tslint:disable */
/* eslint-disable */
import { ChangeFeeMethodEnum } from '../models/change-fee-method-enum';
export interface ChangeFeeCollectionMethod {

  /**
   * if true, the change fee will be issued as a separate transaction to the residual amount
   */
  changeFeeIssuedSeparatelyInd?: boolean;

  /**
   * The code value
   */
  code: string;

  /**
   * The description value
   */
  description?: string;

  /**
   * The subcode value
   */
  subCode?: string;

  /**
   * If true, the tax  on the fee will be included in the base fee amount and sent as a single value to the supplier for fulfilment
   */
  taxIncludedInBaseAmountInd?: boolean;
  value?: ChangeFeeMethodEnum;
}
