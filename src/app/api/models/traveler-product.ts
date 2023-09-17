/* tslint:disable */
/* eslint-disable */
import { ConfirmationStatusEnum } from '../models/confirmation-status-enum';
import { TravelerProductId } from '../models/traveler-product-id';
export type TravelerProduct = TravelerProductId & {

/**
 * A pointer to the traveler id
 */
'TravelerRef'?: string;

/**
 * A pointer to the Offer id
 */
'OfferRef'?: string;

/**
 * A pointer to the product id
 */
'ProductRef'?: string;
'ConfirmationStatusEnum'?: ConfirmationStatusEnum;
};
