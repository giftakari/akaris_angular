/* tslint:disable */
/* eslint-disable */
import { BrandClassificationEnum } from '../models/brand-classification-enum';
export interface BrandAttributeInclusion {
  '@type'?: string;
  AdditionalClassification?: Array<string>;
  Classification?: Array<BrandClassificationEnum>;

  /**
   * the leg sequence
   */
  legSequence?: Array<number>;
}
