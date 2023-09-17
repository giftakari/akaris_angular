/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketIdResponseWrapper } from '../../models/ticket-id-response-wrapper';
import { TicketQueryUpdateTicket } from '../../models/ticket-query-update-ticket';

export interface UpdateTicket$Params {

/**
 * The ticket number
 */
  Identifier: string;

/**
 * Travelport Plus Session ID used to maintain an established agency session
 */
  TravelportPlusSessionID?: string;

/**
 * Identifier used to correlate API invocations across long-running or multi-call business flows.
 */
  TraceId?: string;

/**
 * Identifies the Travelport access group with which the caller is associated
 */
  XAUTH_TRAVELPORT_ACCESSGROUP?: string;
      body: TicketQueryUpdateTicket
}

export function updateTicket(http: HttpClient, rootUrl: string, params: UpdateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketIdResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, updateTicket.PATH, 'put');
  if (params) {
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TicketIdResponseWrapper>;
    })
  );
}

updateTicket.PATH = '/ticket/tickets/{Identifier}';
