/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReceiptListResponseWrapper } from '../../models/receipt-list-response-wrapper';

export interface BuildReceiptsFromLocator$Params {

/**
 * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
 */
  ReservationResource_Identifier: string;

/**
 * The view. Either detail or summary
 */
  view?: string;
  ReservationLocator?: string;
  Issuance?: 'Ticket' | 'BackOffice' | 'All' | 'Invoice';

/**
 * Identifier used to correlate API invocations across long-running or multi-call business flows.
 */
  TraceId?: string;

/**
 * Identifies the Travelport access group with which the caller is associated
 */
  XAUTH_TRAVELPORT_ACCESSGROUP?: string;

/**
 * Travelport Plus Session ID used to maintain an established agency session
 */
  TravelportPlusSessionID?: string;
}

export function buildReceiptsFromLocator(http: HttpClient, rootUrl: string, params: BuildReceiptsFromLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<ReceiptListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, buildReceiptsFromLocator.PATH, 'post');
  if (params) {
    rb.path('ReservationResource_Identifier', params.ReservationResource_Identifier, {"style":"simple","explode":false});
    rb.query('view', params.view, {"style":"form","explode":true});
    rb.query('ReservationLocator', params.ReservationLocator, {"style":"form","explode":true});
    rb.query('Issuance', params.Issuance, {"style":"form","explode":true});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReceiptListResponseWrapper>;
    })
  );
}

buildReceiptsFromLocator.PATH = '/receipt/reservations/{ReservationResource_Identifier}/receipts/buildfromlocator';
