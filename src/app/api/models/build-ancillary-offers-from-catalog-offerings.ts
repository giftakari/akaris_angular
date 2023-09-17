/* tslint:disable */
/* eslint-disable */
import { CatalogOfferingIdentifier } from '../models/catalog-offering-identifier';
import { CatalogOfferingsIdentifier } from '../models/catalog-offerings-identifier';
import { Identifier } from '../models/identifier';
import { ProductIdentifier } from '../models/product-identifier';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export interface BuildAncillaryOffersFromCatalogOfferings {
  '@type': string;
  CatalogOfferingIdentifier: CatalogOfferingIdentifier;
  CatalogOfferingsAncillaryListIdentifier?: Identifier;
  CatalogOfferingsIdentifier: CatalogOfferingsIdentifier;
  ProductIdentifier: ProductIdentifier;

  /**
   * The quantity of ancillaries to be included in the Offer
   */
  Quantity?: number;
  TravelerIdentifierRef?: TravelerIdentifierRef;

  /**
   * If true, the response will include unsellable ancillary options
   */
  includeUnsellableAncillariesInd?: boolean;
}
