/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { SpecialServiceId } from '../models/special-service-id';
export type SpecialServiceResponse = BaseResponse & {
'@type'?: string;
'SpecialService'?: SpecialServiceId;
};
