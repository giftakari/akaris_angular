/* tslint:disable */
/* eslint-disable */
import { GstRegistrationNumber } from '../models/gst-registration-number';
import { OrganizationIdentifier } from '../models/organization-identifier';
export interface OrganizationInformation {
  '@type'?: string;
  GSTRegistrationNumber?: Array<GstRegistrationNumber>;
  OrganizationIdentifier?: Array<OrganizationIdentifier>;
}
