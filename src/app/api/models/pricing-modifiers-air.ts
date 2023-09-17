/* tslint:disable */
/* eslint-disable */
import { FareSelectionDetail } from '../models/fare-selection-detail';
import { OrganizationInformation } from '../models/organization-information';
import { PromotionalCode } from '../models/promotional-code';
import { TaxExemption } from '../models/tax-exemption';
export interface PricingModifiersAir {
  '@type': string;
  FareSelection?: FareSelectionDetail;
  OrganizationInformation?: OrganizationInformation;
  PricingPCC?: string;
  PromotionalCode?: Array<PromotionalCode>;

  /**
   * Overrides the sell city of the requestor.
   */
  SellCity?: string;
  TaxExemption?: TaxExemption;

  /**
   * Overrides the ticket city of the requestor.
   */
  TicketCity?: string;
  TicketingPCC?: string;

  /**
   * Currency Code ISO
   */
  currencyCode?: string;

  /**
   * If true, split payment (split ticket) offerings\/offers will be returned
   */
  includeSplitPaymentInd?: boolean;

  /**
   * if true, the most restrictive brand will be returned in the response when there are different brands present in the Offering
   */
  returnMostRestrictiveBrandInd?: boolean;

  /**
   * The percentage, between 0 and 99, of round trip offerings the user would like returned in the result set.
   */
  splitPaymentOfferings?: number;
}
