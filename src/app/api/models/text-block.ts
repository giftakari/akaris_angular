/* tslint:disable */
/* eslint-disable */
import { TextFormatted } from '../models/text-formatted';
export interface TextBlock {
  '@type': string;
  TextFormatted: Array<TextFormatted>;

  /**
   * Internally referenced id
   */
  id?: string;

  /**
   * Title
   */
  title?: string;
}
