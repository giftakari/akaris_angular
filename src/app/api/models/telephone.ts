/* tslint:disable */
/* eslint-disable */
import { EnumTelephoneRole } from '../models/enum-telephone-role';
export interface Telephone {
  '@type': string;

  /**
   * Telephone Area CityCode
   */
  areaCityCode?: string;

  /**
   * City Code
   */
  cityCode?: string;

  /**
   * TelephoneCountry AccessCode
   */
  countryAccessCode?: string;

  /**
   * Telephone extension number
   */
  extension?: string;

  /**
   * UOptional internally referenced id
   */
  id?: string;

  /**
   * Mobile/Telephone Number
   */
  phoneNumber: string;
  role?: EnumTelephoneRole;
}
