/* tslint:disable */
/* eslint-disable */
import { AncillaryOfferingIdentifier } from '../models/ancillary-offering-identifier';
import { CatalogOfferingIdentifier } from '../models/catalog-offering-identifier';
import { CatalogOfferingsIdentifier } from '../models/catalog-offerings-identifier';
import { ProductIdentifier } from '../models/product-identifier';
export interface BuildFromCatalogOfferingsRequest {
  '@type': string;
  AncillaryOfferingIdentifier?: Array<AncillaryOfferingIdentifier>;
  CatalogOfferingIdentifier: CatalogOfferingIdentifier;
  CatalogOfferingsIdentifier: CatalogOfferingsIdentifier;
  ProductIdentifier: Array<ProductIdentifier>;
}
