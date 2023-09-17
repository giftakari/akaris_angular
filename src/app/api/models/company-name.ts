/* tslint:disable */
/* eslint-disable */

/**
 * Identifies a company by name.
 */
export interface CompanyName {

  /**
   * Identifies a company by the company code
   */
  code?: string;

  /**
   * Identifies the context of the identifying code,such as DUNS,IATA or internal code
   */
  codeContext?: string;

  /**
   * The department name or ID with which the contact is associated
   */
  department?: string;

  /**
   * The division name or ID with which the contact is associated
   */
  division?: string;

  /**
   * Use this id to internally identify this company in NextSteps
   */
  id?: string;

  /**
   * Used to provide the company common name
   */
  shortName?: string;

  /**
   * The system(s) that maintain the data
   */
  systemOfRecord?: Array<string>;
  value?: string;
}
