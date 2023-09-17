/* tslint:disable */
/* eslint-disable */
import { BrandTargetEnum } from '../models/brand-target-enum';
import { TextFormatted } from '../models/text-formatted';
export interface BrandText {
  '@type': string;
  TextFormatted: Array<TextFormatted>;

  /**
   * Internally referenced id
   */
  id?: string;
  target?: BrandTargetEnum;
}
