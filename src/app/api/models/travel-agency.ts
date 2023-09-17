/* tslint:disable */
/* eslint-disable */
import { CompanyName } from '../models/company-name';
import { OrganizationTypeEnum } from '../models/organization-type-enum';
import { TravelAgencyId } from '../models/travel-agency-id';
export type TravelAgency = TravelAgencyId & {
'organizationType'?: OrganizationTypeEnum;
'OrganizationName': CompanyName;

/**
 * A reference assigned by the Travel Agency to identify the corporate organization
 */
'CorporateCode'?: string;
'ProfileName'?: Array<string>;
};
