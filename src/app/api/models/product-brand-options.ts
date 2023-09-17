/* tslint:disable */
/* eslint-disable */
import { ProductBrandOffering } from '../models/product-brand-offering';
export interface ProductBrandOptions {
  '@type'?: string;
  ProductBrandOffering: Array<ProductBrandOffering>;

  /**
   * Reference to the Flights that are used within ProductBrandOptions
   */
  flightRefs?: Array<string>;
}
