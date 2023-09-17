/* tslint:disable */
/* eslint-disable */
import { Error } from '../models/error';
import { ResultStatusEnum } from '../models/result-status-enum';
import { Warning } from '../models/warning';
export interface Result {
  '@type'?: string;
  Error?: Array<Error>;
  Warning?: Array<Warning>;
  status?: ResultStatusEnum;
}
