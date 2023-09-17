/* tslint:disable */
/* eslint-disable */
import { AppliesTo } from '../models/applies-to';
import { PreferenceId } from '../models/preference-id';
import { TravelerIdentifier } from '../models/traveler-identifier';
export type Preference = PreferenceId & {
'AppliesTo'?: AppliesTo;
'TravelerIdentifier'?: TravelerIdentifier;
};
