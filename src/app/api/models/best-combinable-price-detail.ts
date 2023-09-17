/* tslint:disable */
/* eslint-disable */
import { BestCombinablePrice } from '../models/best-combinable-price';
import { PriceBreakdown } from '../models/price-breakdown';
export type BestCombinablePriceDetail = BestCombinablePrice & {
'PriceBreakdown'?: Array<PriceBreakdown>;
};
