/* tslint:disable */
/* eslint-disable */
import { CatalogProductOffering } from '../models/catalog-product-offering';
import { CatalogProductOfferingsId } from '../models/catalog-product-offerings-id';
import { UpsellOffering } from '../models/upsell-offering';
export type CatalogProductOfferings = CatalogProductOfferingsId & {
'CatalogProductOffering'?: Array<CatalogProductOffering>;
'UpsellOffering'?: Array<UpsellOffering>;
};
