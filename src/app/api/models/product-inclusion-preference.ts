/* tslint:disable */
/* eslint-disable */
import { BrandClassificationEnum } from '../models/brand-classification-enum';
export interface ProductInclusionPreference {
  '@type'?: string;
  AdditionalClassification?: Array<string>;
  Classification: Array<BrandClassificationEnum>;

  /**
   * If true, the bestMatch will be returned according to the select product inclusions
   */
  bestMatchInd?: boolean;

  /**
   * This indicator is deprecated. The default behavior will be to provide an exact match to the product inclusion preferences
   */
  exactMatchInd?: boolean;

  /**
   * The legSequence value
   */
  legSequence?: Array<number>;
}
