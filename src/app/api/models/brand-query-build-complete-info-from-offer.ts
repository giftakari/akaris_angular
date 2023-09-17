/* tslint:disable */
/* eslint-disable */
import { OfferIdentifier } from '../models/offer-identifier';
import { ProductIdentifier } from '../models/product-identifier';
export interface BrandQueryBuildCompleteInfoFromOffer {
  '@type': string;
  OfferIdentifier: OfferIdentifier;
  ProductIdentifier?: Array<ProductIdentifier>;
}
