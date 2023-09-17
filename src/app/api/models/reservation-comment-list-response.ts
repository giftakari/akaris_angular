/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { ReservationCommentId } from '../models/reservation-comment-id';
export type ReservationCommentListResponse = BaseResponse & {
'ReservationCommentID'?: Array<ReservationCommentId>;
};
