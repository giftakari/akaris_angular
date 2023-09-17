/* tslint:disable */
/* eslint-disable */
import { AppliesTo } from '../models/applies-to';
import { SpecialServiceId } from '../models/special-service-id';
import { Status } from '../models/status';
import { TravelerIdentifier } from '../models/traveler-identifier';
export type SpecialService = SpecialServiceId & {
'AppliesTo'?: AppliesTo;
'Status'?: Status;

/**
 * The type of service animal accompanying the Traveler. If no service animal leave blank.
 */
'ServiceAnimalType'?: string;
'TravelerIdentifier'?: TravelerIdentifier;
};
