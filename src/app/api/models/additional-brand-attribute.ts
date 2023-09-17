/* tslint:disable */
/* eslint-disable */
import { BrandInclusionEnum } from '../models/brand-inclusion-enum';
export interface AdditionalBrandAttribute {
  '@type': string;

  /**
   * The Travelport classification used for categories of ancillaries
   */
  Classification: string;
  ImageURL?: Array<string>;
  Inclusion: BrandInclusionEnum;
  groupCode?: string;

  /**
   * If true, this is a matched attribute
   */
  matchedAttributeInd?: boolean;
  subCode?: string;
  subGroupCode?: string;
}
