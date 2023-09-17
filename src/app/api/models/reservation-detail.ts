/* tslint:disable */
/* eslint-disable */
import { Accounting } from '../models/accounting';
import { DocumentOverrides } from '../models/document-overrides';
import { Reservation } from '../models/reservation';
export type ReservationDetail = Reservation & {
'Accounting'?: Accounting;
'DocumentOverrides'?: Array<DocumentOverrides>;
};
