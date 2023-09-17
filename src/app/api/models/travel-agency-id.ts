/* tslint:disable */
/* eslint-disable */
import { Identifier } from '../models/identifier';
export interface TravelAgencyId {
  '@type': string;
  Identifier?: Identifier;

  /**
   * An organization that has a name and a structure and members and directly works in the travel industry
   */
  TravelOrganizationRef?: string;

  /**
   * Simple xsd id, not for external use
   */
  id?: string;
}
