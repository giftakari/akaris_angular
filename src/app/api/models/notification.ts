/* tslint:disable */
/* eslint-disable */
import { QueueNumber } from '../models/queue-number';
export interface Notification {

  /**
   * The notification date is equivalent to ticket time limit and will place the Reservation on the defined queue for the date specified. Sending a new notificiation date at commit step will update the existing notificationDate. Sending 000/00/00 will delete an existing notificationDate.
   */
  Date?: string;
  QueueNumber?: Array<QueueNumber>;
}
