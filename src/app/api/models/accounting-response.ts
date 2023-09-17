/* tslint:disable */
/* eslint-disable */
import { AccountingId } from '../models/accounting-id';
import { BaseResponse } from '../models/base-response';
export type AccountingResponse = BaseResponse & {
'Accounting'?: AccountingId;
};
