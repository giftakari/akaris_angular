/* tslint:disable */
/* eslint-disable */
import { BaseResponse } from '../models/base-response';
import { Ticket } from '../models/ticket';
export type TicketListResponse = BaseResponse & {
'TicketID'?: Array<Ticket>;
'SettlementAuthorizationCode'?: string;
};
