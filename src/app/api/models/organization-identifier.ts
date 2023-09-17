/* tslint:disable */
/* eslint-disable */
import { OrganizationCodeTypeEnum } from '../models/organization-code-type-enum';

/**
 * The organization identifier
 */
export interface OrganizationIdentifier {

  /**
   * If true, account code only fares will be returned
   */
  accountCodeFaresOnlyInd?: boolean;
  organizationCodeType?: OrganizationCodeTypeEnum;

  /**
   * The productRef which the OrganizationIdentifier applies to
   */
  productRef?: Array<string>;

  /**
   * SegmentSequenceList
   */
  segmentSequenceList?: Array<number>;

  /**
   * Supplier code
   */
  supplier?: string;
  value?: string;
}
