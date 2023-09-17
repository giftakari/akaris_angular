/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getTicket } from '../fn/ticket/get-ticket';
import { GetTicket$Params } from '../fn/ticket/get-ticket';
import { ticketGetByLocator } from '../fn/ticket/ticket-get-by-locator';
import { TicketGetByLocator$Params } from '../fn/ticket/ticket-get-by-locator';
import { TicketIdResponseWrapper } from '../models/ticket-id-response-wrapper';
import { TicketListResponseWrapper } from '../models/ticket-list-response-wrapper';
import { updateTicket } from '../fn/ticket/update-ticket';
import { UpdateTicket$Params } from '../fn/ticket/update-ticket';

@Injectable({ providedIn: 'root' })
export class TicketService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ticketGetByLocator()` */
  static readonly TicketGetByLocatorPath = '/ticket/tickets/getbylocator';

  /**
   * Retrieve tickets by locator.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ticketGetByLocator()` instead.
   *
   * This method doesn't expect any request body.
   */
  ticketGetByLocator$Response(params?: TicketGetByLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketListResponseWrapper>> {
    return ticketGetByLocator(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve tickets by locator.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ticketGetByLocator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ticketGetByLocator(params?: TicketGetByLocator$Params, context?: HttpContext): Observable<TicketListResponseWrapper> {
    return this.ticketGetByLocator$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketListResponseWrapper>): TicketListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getTicket()` */
  static readonly GetTicketPath = '/ticket/tickets/{Identifier}';

  /**
   * Retrieve a single ticket.
   *
   * TicketDisplay returns details for a single ticket.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicket$Response(params: GetTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketListResponseWrapper>> {
    return getTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a single ticket.
   *
   * TicketDisplay returns details for a single ticket.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicket(params: GetTicket$Params, context?: HttpContext): Observable<TicketListResponseWrapper> {
    return this.getTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketListResponseWrapper>): TicketListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateTicket()` */
  static readonly UpdateTicketPath = '/ticket/tickets/{Identifier}';

  /**
   * Void ticket for GDS.
   *
   * Use the TicketVoid API to void a GDS ticket. Generally a ticket can be voided only within the same day it was issued. See Basic Concepts above for limitations. At this time AirTicketing does not support canceling a GDS itinerary outside the void period.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket$Response(params: UpdateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketIdResponseWrapper>> {
    return updateTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * Void ticket for GDS.
   *
   * Use the TicketVoid API to void a GDS ticket. Generally a ticket can be voided only within the same day it was issued. See Basic Concepts above for limitations. At this time AirTicketing does not support canceling a GDS itinerary outside the void period.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket(params: UpdateTicket$Params, context?: HttpContext): Observable<TicketIdResponseWrapper> {
    return this.updateTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketIdResponseWrapper>): TicketIdResponseWrapper => r.body)
    );
  }

}
