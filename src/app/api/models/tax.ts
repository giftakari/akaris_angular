/* tslint:disable */
/* eslint-disable */
import { YesNoUnknownEnum } from '../models/yes-no-unknown-enum';
export interface Tax {

  /**
   * Code Authority
   */
  codeAuthority?: string;

  /**
   * Currency code of the city.
   */
  currencyCode?: string;

  /**
   * Decimal Authority
   */
  decimalAuthority?: string;

  /**
   * Allowed number of decimals.
   */
  decimalPlace?: number;

  /**
   * additional information
   */
  description?: string;

  /**
   * If true, this tax is exempt
   */
  exemptInd?: boolean;
  includedInBase?: YesNoUnknownEnum;

  /**
   * purpose
   */
  purpose?: string;

  /**
   * Identifies the reporting authority such as airport code for XF taxes.
   */
  reportingAuthority?: string;

  /**
   * Tax code of the city
   */
  taxCode?: string;
  value?: number;
}
