/* tslint:disable */
/* eslint-disable */
import { AgencyServiceFeeId } from '../models/agency-service-fee-id';
import { CurrencyAmount } from '../models/currency-amount';
import { DocumentNumber } from '../models/document-number';
import { Tax } from '../models/tax';
export type AgencyServiceFee = AgencyServiceFeeId & {

/**
 * The service fee expiry date. Once expiry date has been reached, the service fee information will only be stored in the ReservationReceipt
 */
'ExpiryDate'?: string;

/**
 * The description of the service fee
 */
'Description'?: string;
'Amount': CurrencyAmount;
'Tax'?: Array<Tax>;
'RelatedDocumentNumber'?: DocumentNumber;

/**
 * Reference to a Traveler within the Reservation that this service fee applies to
 */
'TravelerRef'?: string;

/**
 * Reference to an Offer within the Reservation that this service fee applies to
 */
'OfferRef'?: string;
};
