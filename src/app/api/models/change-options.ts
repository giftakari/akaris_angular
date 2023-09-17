/* tslint:disable */
/* eslint-disable */
import { ChangePenaltyRange } from '../models/change-penalty-range';
import { ChangeTypeEnum } from '../models/change-type-enum';
export interface ChangeOptions {
  ChangePenaltyRange?: ChangePenaltyRange;
  changeTypes: Array<ChangeTypeEnum>;
}
