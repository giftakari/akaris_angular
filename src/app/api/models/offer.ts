/* tslint:disable */
/* eslint-disable */
import { OfferId } from '../models/offer-id';
import { Price } from '../models/price';
import { ProductId } from '../models/product-id';
import { TermsAndConditionsFull } from '../models/terms-and-conditions-full';
export type Offer = OfferId & {

/**
 * A reference to the Offer this offer is sold in conjunction with
 */
'parentOfferRef'?: string;
'Product': Array<ProductId>;
'Price': Price;
'TermsAndConditionsFull': Array<TermsAndConditionsFull>;

/**
 * If true, the Offer is passive for booking purposes.
 */
'passiveOfferInd'?: boolean;
};
