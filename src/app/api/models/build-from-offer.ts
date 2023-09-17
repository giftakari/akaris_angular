/* tslint:disable */
/* eslint-disable */
import { OfferIdentifier } from '../models/offer-identifier';
import { PaymentCriteria } from '../models/payment-criteria';
import { ProductIdentifier } from '../models/product-identifier';
export interface BuildFromOffer {
  '@type': string;
  OfferIdentifier: OfferIdentifier;
  PaymentCriteria?: PaymentCriteria;
  ProductIdentifier?: Array<ProductIdentifier>;
}
