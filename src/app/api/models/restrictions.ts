/* tslint:disable */
/* eslint-disable */
import { DocumentTypeEnum } from '../models/document-type-enum';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export interface Restrictions {
  '@type'?: string;
  DocumentType?: DocumentTypeEnum;
  Restriction: Array<string>;
  TravelerIdentifierRef?: Array<TravelerIdentifierRef>;
}
