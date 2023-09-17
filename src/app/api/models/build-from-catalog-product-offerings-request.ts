/* tslint:disable */
/* eslint-disable */
import { CatalogProductOfferingSelection } from '../models/catalog-product-offering-selection';
import { CatalogProductOfferingsIdentifier } from '../models/catalog-product-offerings-identifier';
import { UpsellOfferingIdentifier } from '../models/upsell-offering-identifier';
export interface BuildFromCatalogProductOfferingsRequest {
  '@type'?: string;
  CatalogProductOfferingSelection: Array<CatalogProductOfferingSelection>;
  CatalogProductOfferingsIdentifier: CatalogProductOfferingsIdentifier;
  UpsellOfferingIdentifier?: Array<UpsellOfferingIdentifier>;
}
