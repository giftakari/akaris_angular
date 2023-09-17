/* tslint:disable */
/* eslint-disable */
import { Brand } from '../models/brand';
import { BrandText } from '../models/brand-text';
export type BrandCompleteInfo = Brand & {
'BrandText': Array<BrandText>;
};
