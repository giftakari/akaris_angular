/* tslint:disable */
/* eslint-disable */
import { OfferIdentifier } from '../models/offer-identifier';
import { ProductIdentifier } from '../models/product-identifier';
export interface BuildFromOfferList {
  '@type'?: string;
  OfferIdentifier: Array<OfferIdentifier>;

  /**
   * The OfferListIdentifer (GUID) to retrieve the OfferList from cache
   */
  OfferListIdentifier: string;
  ProductIdentifier?: Array<ProductIdentifier>;

  /**
   * The segmentSequence within the product the action is being requested for. Used when multiple exist within a product
   */
  SegmentSequence?: number;
}
