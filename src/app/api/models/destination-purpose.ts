/* tslint:disable */
/* eslint-disable */
import { DestinationEnum } from '../models/destination-enum';
import { PurposeEnum } from '../models/purpose-enum';
export interface DestinationPurpose {
  '@type'?: string;
  destination: DestinationEnum;
  purpose: PurposeEnum;
}
