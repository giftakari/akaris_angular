/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketListResponseWrapper } from '../../models/ticket-list-response-wrapper';

export interface GetTicket$Params {

/**
 * The ticket number
 */
  Identifier: string;

/**
 * If true, TicketDetail will be returned
 */
  detailViewInd?: boolean;

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
}

export function getTicket(http: HttpClient, rootUrl: string, params: GetTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, getTicket.PATH, 'get');
  if (params) {
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
    rb.query('detailViewInd', params.detailViewInd, {"style":"form","explode":true});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TicketListResponseWrapper>;
    })
  );
}

getTicket.PATH = '/ticket/tickets/{Identifier}';
