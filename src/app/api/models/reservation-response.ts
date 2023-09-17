/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { Reservation } from '../models/reservation';
export type ReservationResponse = BaseResponse & {
'Reservation'?: Reservation;
};
