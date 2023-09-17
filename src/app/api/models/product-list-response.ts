/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { Product } from '../models/product';
export type ProductListResponse = BaseResponse & {
'Product'?: Array<Product>;
};
