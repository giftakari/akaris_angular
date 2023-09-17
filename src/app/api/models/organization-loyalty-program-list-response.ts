/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { OrganizationLoyaltyProgramId } from '../models/organization-loyalty-program-id';
export type OrganizationLoyaltyProgramListResponse = BaseResponse & {
'OrganizationLoyaltyProgram'?: Array<OrganizationLoyaltyProgramId>;
};
