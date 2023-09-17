/* tslint:disable */
/* eslint-disable */
import { AddressBldgRoom } from '../models/address-bldg-room';
import { AddressStreetNumber } from '../models/address-street-number';
import { Country } from '../models/country';
import { EnumAddressRole } from '../models/enum-address-role';
import { StateProv } from '../models/state-prov';
export interface Address {
  '@type': string;

  /**
   * Additional address line details
   */
  AddressLine?: Array<string>;

  /**
   * The name of the company or person to be addressed
   */
  Addressee?: string;
  BldgRoom?: AddressBldgRoom;

  /**
   * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
   */
  City: string;
  Country?: Country;

  /**
   * County or Region Name (e.g., Fairfax).
   */
  County?: string;
  Number?: AddressStreetNumber;

  /**
   * Post Office Code number.
   */
  PostalCode?: string;
  StateProv?: StateProv;

  /**
   * May contain the street number when the Street number element is missing.
   */
  Street?: string;

  /**
   * Internally referenced id
   */
  id?: string;
  role?: EnumAddressRole;
}
