/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { OfferId } from '../models/offer-id';
export type OfferListResponse = BaseResponse & {
'OfferID'?: Array<OfferId>;
};
