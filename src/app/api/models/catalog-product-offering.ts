/* tslint:disable */
/* eslint-disable */
import { BrandId } from '../models/brand-id';
import { CatalogProductOfferingId } from '../models/catalog-product-offering-id';
import { ProductBrandOptions } from '../models/product-brand-options';
import { SponsoredProductBrandOptions } from '../models/sponsored-product-brand-options';
export type CatalogProductOffering = CatalogProductOfferingId & {

/**
 * NumberDoubleDigit
 */
'sequence'?: number;

/**
 * Departure location
 */
'Departure'?: string;

/**
 * Arrival location
 */
'Arrival'?: string;
'Brand'?: Array<BrandId>;
'ProductBrandOptions': Array<ProductBrandOptions>;
'SponsoredProductBrandOptions'?: Array<SponsoredProductBrandOptions>;
};
