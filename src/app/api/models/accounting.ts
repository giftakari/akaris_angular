/* tslint:disable */
/* eslint-disable */
import { AccountingId } from '../models/accounting-id';
import { NameValuePair } from '../models/name-value-pair';
export type Accounting = AccountingId & {

/**
 * Accounting data type
 */
'dataType'?: string;

/**
 * Accounting template
 */
'template'?: string;
'NameValuePair'?: Array<NameValuePair>;
};
