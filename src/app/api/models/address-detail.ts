/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { Comment } from '../models/comment';
import { Privacy } from '../models/privacy';
export type AddressDetail = Address & {

/**
 * OTA code for address type
 */
'addressType'?: string;

/**
 * OTA code for address use
 */
'use'?: string;
'Comment'?: Comment;
'Privacy'?: Privacy;

/**
 * The priority ranking within the group
 */
'Priority'?: number;

/**
 * If true, this is a valid and complete mailing address that has been verified through an address verification service or previously mailed materials have not been returned.
 */
'validInd'?: boolean;

/**
 * If true, this address came into the system through provisioning
 */
'provisionedInd'?: boolean;
};
