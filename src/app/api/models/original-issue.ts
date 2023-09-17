/* tslint:disable */
/* eslint-disable */
import { DocumentTypeEnum } from '../models/document-type-enum';
export interface OriginalIssue {

  /**
   * Agency code
   */
  agencyCodeIATA: string;
  documentType?: DocumentTypeEnum;

  /**
   * Issue date
   */
  issueDate: string;

  /**
   * Original Issuing city
   */
  issuingCity: string;
  value?: string;
}
