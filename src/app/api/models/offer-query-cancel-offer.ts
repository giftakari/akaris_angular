/* tslint:disable */
/* eslint-disable */
import { BuildFromOffer } from '../models/build-from-offer';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export interface OfferQueryCancelOffer {
  '@type': string;
  BuildFromOffer: BuildFromOffer;
  TravelerIdentifier?: Array<TravelerIdentifierRef>;
}
