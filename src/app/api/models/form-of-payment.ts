/* tslint:disable */
/* eslint-disable */
import { DocumentTypeEnum } from '../models/document-type-enum';
import { FormOfPaymentTypeEnum } from '../models/form-of-payment-type-enum';
export interface FormOfPayment {

  /**
   * Document issuer
   */
  documentIssuer?: string;

  /**
   * Payment document number
   */
  documentNumber?: string;
  documentType?: DocumentTypeEnum;

  /**
   * Encrypted value
   */
  encryptedValue?: string;
  value?: FormOfPaymentTypeEnum;
}
