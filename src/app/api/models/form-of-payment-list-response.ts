/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { FormOfPaymentId } from '../models/form-of-payment-id';
export type FormOfPaymentListResponse = BaseResponse & {
'FormOfPaymentID'?: Array<FormOfPaymentId>;
};
