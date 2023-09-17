/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { TicketId } from '../models/ticket-id';
export type TicketIdResponse = BaseResponse & {
'@type'?: string;
'Ticket'?: TicketId;
'SettlementAuthorizationCode': string;
};
