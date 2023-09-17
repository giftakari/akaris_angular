/* tslint:disable */
/* eslint-disable */
import { BestCombinablePriceDetail } from '../models/best-combinable-price-detail';
import { BrandId } from '../models/brand-id';
import { BrandStatusEnum } from '../models/brand-status-enum';
import { Co2EmissionsData } from '../models/co-2-emissions-data';
import { Identifier } from '../models/identifier';
import { PriceDetail } from '../models/price-detail';
import { ProductId } from '../models/product-id';
import { TermsAndConditionsId } from '../models/terms-and-conditions-id';
export interface ProductBrandOffering {
  '@type'?: string;
  BestCombinablePrice?: BestCombinablePriceDetail;
  Brand?: BrandId;
  BrandStatus?: BrandStatusEnum;
  CO2EmissionsData?: Co2EmissionsData;
  CombinabilityCode?: Array<string>;

  /**
   * The desirability of the offering expressed as a percentage. The higher the percentage the more desirable the offering.
   */
  Desirability?: number;
  Identifier?: Identifier;

  /**
   * The number of matched attributes according to the request modifiers
   */
  MatchedAttributes?: number;
  Price?: PriceDetail;
  Product?: Array<ProductId>;
  TermsAndConditions?: TermsAndConditionsId;

  /**
   * If true, this Offering is the best match according to the request modifiers
   */
  bestMatchInd?: boolean;
}
