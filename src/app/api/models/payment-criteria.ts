/* tslint:disable */
/* eslint-disable */
import { DocumentNumber } from '../models/document-number';
export interface PaymentCriteria {
  '@type'?: string;
  DocumentNumber?: Array<DocumentNumber>;

  /**
   * This the BIN/IIN
   */
  IssuerIdentificationNumber?: string;

  /**
   * A two character code for a credit card, like MC, AX
   */
  PaymentCardCode?: string;

  /**
   * If true, payment will be made by agency account
   */
  agencyAccountInd?: boolean;

  /**
   * If true, payment will be made by BSP
   */
  bspInd?: boolean;

  /**
   * If true, payment will be made by cash
   */
  cashInd?: boolean;

  /**
   * If true, payment will be made by invoice
   */
  invoiceInd?: boolean;
}
