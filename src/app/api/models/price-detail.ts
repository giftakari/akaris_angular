/* tslint:disable */
/* eslint-disable */
import { Price } from '../models/price';
import { PriceBreakdown } from '../models/price-breakdown';
export type PriceDetail = Price & {
'PriceBreakdown'?: Array<PriceBreakdown>;
};
