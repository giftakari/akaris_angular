/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { SpecialServiceId } from '../models/special-service-id';
export type SpecialServiceListResponse = BaseResponse & {
'@type'?: string;
'SpecialServiceID'?: Array<SpecialServiceId>;
};
