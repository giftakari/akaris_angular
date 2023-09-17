/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { TravelerUpdatableItemsId } from '../models/traveler-updatable-items-id';
export type TravelerUpdatableItemsListResponse = BaseResponse & {
'TravelerUpdatableItemsID'?: Array<TravelerUpdatableItemsId>;
};
