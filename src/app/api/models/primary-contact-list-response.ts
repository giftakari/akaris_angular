/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { PrimaryContactId } from '../models/primary-contact-id';
export type PrimaryContactListResponse = BaseResponse & {
'PrimaryContactID'?: Array<PrimaryContactId>;
};
