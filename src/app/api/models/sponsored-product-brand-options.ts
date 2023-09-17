/* tslint:disable */
/* eslint-disable */
import { ProductBrandOffering } from '../models/product-brand-offering';
export interface SponsoredProductBrandOptions {
  '@type'?: string;
  ProductBrandOffering: Array<ProductBrandOffering>;

  /**
   * Reference to the Flights that are used within  SponsoredProductBrandOptions
   */
  flightRefs?: Array<string>;
}
