/* tslint:disable */
/* eslint-disable */
import { BuildFromOffer } from '../models/build-from-offer';
export interface OfferQueryBuildFromOffer {
  '@type': string;
  BuildFromOffer: BuildFromOffer;

  /**
   * if true, the fees in the new Offer should be priced using the original Offer create date.
   */
  priceHistoricalFeeInd?: boolean;

  /**
   * If true, the new Offer should be priced using the original Offer create date.
   */
  priceHistoricalOfferInd?: boolean;

  /**
   * if true, the taxes in the new Offer should be priced using the original Offer create date.
   */
  priceHistoricalTaxInd?: boolean;
}
