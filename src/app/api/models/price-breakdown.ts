/* tslint:disable */
/* eslint-disable */
import { Amount } from '../models/amount';
import { Commission } from '../models/commission';
export interface PriceBreakdown {
  '@type': string;
  Amount?: Amount;
  Commission?: Commission;
}
