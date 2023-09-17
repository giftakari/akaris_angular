/* tslint:disable */
/* eslint-disable */
import { ChangeOptions } from '../models/change-options';
import { FareQualifierEnum } from '../models/fare-qualifier-enum';
import { FaresFilterEnum } from '../models/fares-filter-enum';
import { RefundOptions } from '../models/refund-options';
export interface FareSelection {
  '@type': string;
  ChangeOptions?: ChangeOptions;
  FareQualifier?: FareQualifierEnum;
  RefundOptions?: RefundOptions;
  fareType?: FaresFilterEnum;
}
