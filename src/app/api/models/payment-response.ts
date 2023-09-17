/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { PaymentId } from '../models/payment-id';
export type PaymentResponse = BaseResponse & {
'Payment'?: PaymentId;
};
