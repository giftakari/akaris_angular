/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { TravelerId } from '../models/traveler-id';
export type TravelerListResponse = BaseResponse & {
'TravelerID'?: Array<TravelerId>;
};
