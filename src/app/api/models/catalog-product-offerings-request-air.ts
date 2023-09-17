/* tslint:disable */
/* eslint-disable */
import { CatalogProductOfferingsRequest } from '../models/catalog-product-offerings-request';
import { ContentSourceEnum } from '../models/content-source-enum';
import { CustomResponseModifiersAir } from '../models/custom-response-modifiers-air';
import { PassengerCriteria } from '../models/passenger-criteria';
import { PaymentCriteria } from '../models/payment-criteria';
import { PricingModifiersAir } from '../models/pricing-modifiers-air';
import { PseudoCityInfo } from '../models/pseudo-city-info';
import { SearchCriteriaFlight } from '../models/search-criteria-flight';
import { SearchModifiersAir } from '../models/search-modifiers-air';
import { SearchTypeEnum } from '../models/search-type-enum';
export type CatalogProductOfferingsRequestAir = CatalogProductOfferingsRequest & {

/**
 * This attribute is deprecated and not validated if sent
 */
'maxNumberOfOffersToReturn'?: number;

/**
 * Number of offers per page
 */
'offersPerPage'?: number;
'contentSourceList'?: Array<ContentSourceEnum>;

/**
 * The maximum number of upsells to return
 */
'maxNumberOfUpsellsToReturn'?: number;

/**
 * The number of downsells to return
 */
'numberOfDownsellsToReturn'?: number;
'PassengerCriteria'?: Array<PassengerCriteria>;
'SearchCriteriaFlight'?: Array<SearchCriteriaFlight>;
'SearchModifiersAir'?: SearchModifiersAir;
'PaymentCriteria'?: PaymentCriteria;
'PricingModifiersAir'?: PricingModifiersAir;

/**
 * This field is obsolete. For pricing and ticketing PCC overrides use PricingModifiersAir
 */
'PseudoCityInfo'?: PseudoCityInfo;
'CustomResponseModifiersAir'?: CustomResponseModifiersAir;
'SearchType'?: SearchTypeEnum;

/**
 * if true, brand infromation will be supressed.
 */
'inhibitBrandContentInd'?: boolean;

/**
 * if true, detail view should be returned
 */
'detailViewInd'?: boolean;

/**
 * If true, mixed brands will be inhibited from the response
 */
'excludeMixedBrandsInd'?: boolean;
};
