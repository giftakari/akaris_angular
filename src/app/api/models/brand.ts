/* tslint:disable */
/* eslint-disable */
import { AdditionalBrandAttribute } from '../models/additional-brand-attribute';
import { BrandAttribute } from '../models/brand-attribute';
import { BrandId } from '../models/brand-id';
export type Brand = BrandId & {

/**
 * Assigned Type: ctbr-1100:BrandName
 */
'name': string;

/**
 * Assigned Type: c-1100:NumberSingleDigit
 */
'tier'?: number;

/**
 * Assigned Type: ctbr-1100:ShelfNumbers
 */
'shelfNumbers'?: Array<number>;
'BrandAttribute'?: Array<BrandAttribute>;
'AdditionalBrandAttribute'?: Array<AdditionalBrandAttribute>;
'ImageURL'?: Array<string>;
};
