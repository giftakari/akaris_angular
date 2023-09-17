/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { BrandCompleteInfo } from '../models/brand-complete-info';
export type BrandListResponse = BaseResponse & {
'BrandID'?: Array<BrandCompleteInfo>;
};
