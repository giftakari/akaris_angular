/* tslint:disable */
/* eslint-disable */
import { PaymentCriteria } from '../models/payment-criteria';
import { PricingModifiersAir } from '../models/pricing-modifiers-air';
import { ProductId } from '../models/product-id';
export interface OfferQueryBuildFromShoppingCartProducts {
  '@type': string;
  PaymentCriteria?: PaymentCriteria;
  PricingModifiersAir?: PricingModifiersAir;
  ProductIdentifier?: Array<ProductId>;
}
