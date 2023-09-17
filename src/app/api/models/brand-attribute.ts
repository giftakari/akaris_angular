/* tslint:disable */
/* eslint-disable */
import { BrandClassificationEnum } from '../models/brand-classification-enum';
import { BrandInclusionEnum } from '../models/brand-inclusion-enum';
export interface BrandAttribute {
  '@type': string;
  ImageURL?: Array<string>;
  classification: BrandClassificationEnum;
  groupCode?: string;
  inclusion: BrandInclusionEnum;

  /**
   * if true, this is a matched attribute.
   */
  matchedAttributeInd?: boolean;
  subCode?: string;
  subGroupCode?: string;
}
