/* tslint:disable */
/* eslint-disable */
import { FareRuleCategoryEnum } from '../models/fare-rule-category-enum';
import { FareRuleEnum } from '../models/fare-rule-enum';
import { PaymentCriteria } from '../models/payment-criteria';
export interface BuildOptions {
  '@type': string;
  FareRuleCategory?: Array<FareRuleCategoryEnum>;
  FareRuleType?: FareRuleEnum;
  PaymentCriteria?: PaymentCriteria;

  /**
   * NonnegativeInteger
   */
  maxNumberOfUpsellsToReturn?: number;
  returnBrandedFaresInd?: boolean;
}
