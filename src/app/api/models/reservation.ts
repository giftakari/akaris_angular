/* tslint:disable */
/* eslint-disable */
import { AgencyServiceFee } from '../models/agency-service-fee';
import { FormOfPaymentId } from '../models/form-of-payment-id';
import { Offer } from '../models/offer';
import { OfferLink } from '../models/offer-link';
import { OrganizationLoyaltyProgram } from '../models/organization-loyalty-program';
import { Payment } from '../models/payment';
import { Preference } from '../models/preference';
import { PrimaryContact } from '../models/primary-contact';
import { Receipt } from '../models/receipt';
import { ReservationComment } from '../models/reservation-comment';
import { ReservationDisplaySequence } from '../models/reservation-display-sequence';
import { ReservationId } from '../models/reservation-id';
import { ShoppingCart } from '../models/shopping-cart';
import { SpecialService } from '../models/special-service';
import { TravelAgency } from '../models/travel-agency';
import { Traveler } from '../models/traveler';
import { TravelerProduct } from '../models/traveler-product';
export type Reservation = ReservationId & {
'Offer'?: Array<Offer>;
'Traveler'?: Array<Traveler>;
'TravelerProduct'?: Array<TravelerProduct>;
'FormOfPayment'?: Array<FormOfPaymentId>;
'Payment'?: Array<Payment>;
'Receipt'?: Array<Receipt>;
'OfferLink'?: Array<OfferLink>;
'ReservationComment'?: Array<ReservationComment>;
'PrimaryContact'?: Array<PrimaryContact>;
'TravelAgency'?: TravelAgency;

/**
 * A name assigned to a Reservation containing an offer with Passengerflight/Flight Quantity equal to or greater than 10
 */
'GroupName'?: string;
'SpecialService'?: Array<SpecialService>;
'Preference'?: Preference;
'OrganizationLoyaltyProgram'?: Array<OrganizationLoyaltyProgram>;
'ShoppingCart'?: ShoppingCart;
'ReservationDisplaySequence'?: ReservationDisplaySequence;
'AgencyServiceFee'?: Array<AgencyServiceFee>;

/**
 * The auto delete date represents the date that the Reservation will be kept active. Also known as retention segment or retention date.
 */
'autoDeleteDate'?: string;

/**
 * The notification date represents the date that the Reservation should be reviewed. Also known as ticket time limit date.
 */
'notificationDate'?: string;
};
