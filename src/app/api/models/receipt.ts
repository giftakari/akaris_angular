/* tslint:disable */
/* eslint-disable */
import { ReceiptId } from '../models/receipt-id';
export type Receipt = ReceiptId & {

/**
 * Receipt date time
 */
'dateTime'?: string;

/**
 * List of offers which links with the receipt
 */
'OfferRef'?: Array<string>;

/**
 * Reference of product
 */
'ProductRef'?: string;
};
