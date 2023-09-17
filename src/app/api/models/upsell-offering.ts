/* tslint:disable */
/* eslint-disable */
import { CatalogProductOffering } from '../models/catalog-product-offering';
import { UpsellOfferingId } from '../models/upsell-offering-id';
export type UpsellOffering = UpsellOfferingId & CatalogProductOffering & {

/**
 * An unsolicited Offering, offered in conjunction with specified product(s)
 */
'productRefs'?: Array<string>;
};
