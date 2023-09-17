/* tslint:disable */
/* eslint-disable */
import { Notification } from '../models/notification';
import { ScheduleChangeRepriceEnum } from '../models/schedule-change-reprice-enum';
export interface ReservationQueryCommitReservation {
  Notification?: Array<Notification>;

  /**
   * If true, and the OfferPrice is invalidated, error will be returned and Reservation commit will not be processed
   */
  errorWhenOfferPriceCancelledInd?: boolean;

  /**
   * if true, the schedule change is accepted by the consumer
   */
  scheduleChangeAcceptedInd?: boolean;
  scheduleChangeReprice?: ScheduleChangeRepriceEnum;
}
