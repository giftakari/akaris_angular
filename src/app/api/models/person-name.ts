/* tslint:disable */
/* eslint-disable */
export interface PersonName {
  '@type': string;

  /**
   * Given name, first name or names.
   */
  Given?: string;

  /**
   * The middle name of the person name.
   */
  Middle?: string;

  /**
   * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
   */
  Prefix?: string;

  /**
   * Family name, last name.
   */
  Surname: string;
}
