/* tslint:disable */
/* eslint-disable */
import { CatalogProductOfferingIdentifier } from '../models/catalog-product-offering-identifier';
import { Identifier } from '../models/identifier';
import { ProductIdentifier } from '../models/product-identifier';
export interface CatalogProductOfferingSelection {
  '@type'?: string;
  CatalogProductOfferingIdentifier: CatalogProductOfferingIdentifier;
  ProductBrandOfferingIdentifier: Identifier;
  ProductIdentifier?: Array<ProductIdentifier>;
  SegmentSequence?: Array<number>;
}
