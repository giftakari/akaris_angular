/* tslint:disable */
/* eslint-disable */

/**
 * ISO 3166 code for a country with optional name
 */
export interface Country {

  /**
   * The source of a code
   */
  codeContext?: string;

  /**
   * Use this id to internally identify this country in NextSteps
   */
  id?: string;

  /**
   * The name or code of a country
   */
  name?: string;
  value?: string;
}
