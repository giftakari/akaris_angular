/* tslint:disable */
/* eslint-disable */
import { BuildFromProductsRequest } from '../models/build-from-products-request';
import { CabinPreference } from '../models/cabin-preference';
import { FareRuleCategoryEnum } from '../models/fare-rule-category-enum';
import { FareRuleEnum } from '../models/fare-rule-enum';
import { PaymentCriteria } from '../models/payment-criteria';
export interface OfferQueryBuildFromProducts {
  '@type': string;
  BuildFromProductsRequest?: BuildFromProductsRequest;
  CabinPreference?: CabinPreference;
  FareRuleCategory?: Array<FareRuleCategoryEnum>;
  FareRuleType?: FareRuleEnum;
  PaymentCriteria?: PaymentCriteria;

  /**
   * If present and true, this is a low fare finder request
   */
  lowFareFinderInd?: boolean;

  /**
   * If present and true, then the host system will perform a sell inventory check.
   */
  reCheckInventoryInd?: boolean;

  /**
   * If present and true, branded fares are returned
   */
  returnBrandedFaresInd?: boolean;

  /**
   * If true, the flight inventory will be checked during the price step
   */
  validateInventoryInd?: boolean;
}
