/* tslint:disable */
/* eslint-disable */
import { CustomerLoyalty } from '../models/customer-loyalty';
import { TermsAndConditionsFullId } from '../models/terms-and-conditions-full-id';
import { TextBlock } from '../models/text-block';
export type TermsAndConditionsFull = TermsAndConditionsFullId & {

/**
 * The data and time the offer will expire
 */
'ExpiryDate'?: string;
'CustomerLoyalty'?: Array<CustomerLoyalty>;
'TextBlock'?: Array<TextBlock>;
};
