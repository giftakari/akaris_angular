/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { PaymentId } from '../models/payment-id';
export type PaymentListResponse = BaseResponse & {
'PaymentID'?: Array<PaymentId>;
};
