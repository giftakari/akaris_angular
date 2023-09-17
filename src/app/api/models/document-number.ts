/* tslint:disable */
/* eslint-disable */
import { DocumentTypeEnum } from '../models/document-type-enum';
export interface DocumentNumber {

  /**
   * Document issuer
   */
  documentIssuer?: string;
  documentType?: DocumentTypeEnum;
  value?: string;
}
