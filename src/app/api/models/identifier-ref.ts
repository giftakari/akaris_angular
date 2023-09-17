/* tslint:disable */
/* eslint-disable */
export interface IdentifierRef {

  /**
   * Descriptive text used to identify the contents of a target object
   */
  description?: string;

  /**
   * A locally referenced ID
   */
  id?: string;

  /**
   * Uniform Resource Identifier
   */
  uris?: Array<string>;
  value?: string;
}
