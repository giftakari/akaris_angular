/* tslint:disable */
/* eslint-disable */
import { DocTypeCodeEnum } from '../models/doc-type-code-enum';
import { GenderEnum } from '../models/gender-enum';
import { PersonName } from '../models/person-name';
export interface TravelDocument {
  '@type': string;
  Gender: GenderEnum;

  /**
   * Specifies a 2 character country code as defined in ISO3166.
   */
  Nationality?: string;
  PersonName: PersonName;

  /**
   * Birth country on Country Code ISO value
   */
  birthCountry?: string;

  /**
   * The date of birth of the document holder
   */
  birthDate?: string;

  /**
   * Birth place value
   */
  birthPlace?: string;

  /**
   * Document number value
   */
  docNumber: string;
  docType?: DocTypeCodeEnum;

  /**
   * Date of expiration
   */
  expireDate?: string;

  /**
   * Locally referenced id
   */
  id?: string;

  /**
   * Issue country on Country Code ISO
   */
  issueCountry?: string;

  /**
   * Date of Issue
   */
  issueDate?: string;

  /**
   * Place of issue value
   */
  placeOfIssue?: string;

  /**
   * Residence value
   */
  residence?: string;

  /**
   * State Province Code value
   */
  stateProvCode?: string;
}
