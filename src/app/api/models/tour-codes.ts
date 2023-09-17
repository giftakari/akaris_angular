/* tslint:disable */
/* eslint-disable */
import { TourCode } from '../models/tour-code';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export interface TourCodes {
  '@type'?: string;
  TourCode: TourCode;
  TravelerIdentifierRef?: Array<TravelerIdentifierRef>;
}
