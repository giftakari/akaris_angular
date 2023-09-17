/* tslint:disable */
/* eslint-disable */
import { Email } from '../models/email';
import { PrimaryContactId } from '../models/primary-contact-id';
import { ShareWithEnum } from '../models/share-with-enum';
import { Telephone } from '../models/telephone';
import { TravelerIdentifier } from '../models/traveler-identifier';
export type PrimaryContact = PrimaryContactId & {
'shareWith'?: ShareWithEnum;

/**
 * Primary contact shared with supplier
 */
'shareWithSupplier'?: Array<string>;
'Email'?: Email;
'Telephone'?: Telephone;
'TravelerIdentifier'?: TravelerIdentifier;

/**
 * If true, the passenger has refused to provide emergency contact details
 */
'contactInformationRefusedInd'?: boolean;
};
