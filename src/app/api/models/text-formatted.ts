/* tslint:disable */
/* eslint-disable */
import { TextFormatEnum } from '../models/text-format-enum';

/**
 * Provides text and indicates whether it is formatted or not.
 */
export interface TextFormatted {

  /**
   * The language in which the text is provided.
   */
  language?: string;
  textFormat?: TextFormatEnum;
  value?: string;
}
