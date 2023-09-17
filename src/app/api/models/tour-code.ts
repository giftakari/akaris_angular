/* tslint:disable */
/* eslint-disable */
import { TourCodeTypeEnum } from '../models/tour-code-type-enum';

/**
 * Tour code
 */
export interface TourCode {
  tourCodeType?: TourCodeTypeEnum;
  value?: string;
}
