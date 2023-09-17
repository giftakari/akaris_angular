/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { Email } from '../models/email';
import { PersonName } from '../models/person-name';
import { Telephone } from '../models/telephone';
export interface AlternateContact {
  '@type'?: string;
  Address?: Array<Address>;
  Email?: Array<Email>;
  PersonName: PersonName;
  Telephone?: Array<Telephone>;

  /**
   * Contact type value
   */
  contactType?: string;

  /**
   * This is the default contact
   */
  defaultInd?: boolean;

  /**
   * This is the contact in case of an emergency
   */
  emergencyInd?: boolean;
  id?: string;

  /**
   * Relation value
   */
  relation?: string;
}
