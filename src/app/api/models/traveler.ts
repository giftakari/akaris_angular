/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { AlternateContact } from '../models/alternate-contact';
import { Comments } from '../models/comments';
import { CustomerLoyalty } from '../models/customer-loyalty';
import { Email } from '../models/email';
import { GenderEnum } from '../models/gender-enum';
import { PersonName } from '../models/person-name';
import { RailDiscountCard } from '../models/rail-discount-card';
import { Telephone } from '../models/telephone';
import { TravelDocument } from '../models/travel-document';
import { TravelerId } from '../models/traveler-id';
export type Traveler = TravelerId & {

/**
 * Date of Birth YYYY-MM-DD
 */
'birthDate'?: string;
'gender'?: GenderEnum;
'PersonName': PersonName;
'Address'?: Array<Address>;
'Telephone'?: Array<Telephone>;
'Email'?: Array<Email>;

/**
 * Passenger type code
 */
'passengerTypeCode'?: string;

/**
 * Nationality on country code ISO
 */
'nationality'?: string;
'CustomerLoyalty'?: Array<CustomerLoyalty>;
'AlternateContact'?: Array<AlternateContact>;
'TravelDocument'?: Array<TravelDocument>;
'Comments'?: Comments;
'RailDiscountCard'?: Array<RailDiscountCard>;
'accompaniedByInfantInd'?: boolean;
};
