/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { Receipt } from '../models/receipt';
export type ReceiptListResponse = BaseResponse & {
'ReceiptID'?: Array<Receipt>;
};
