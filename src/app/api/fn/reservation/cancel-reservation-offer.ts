/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationResponseWrapper } from '../../models/reservation-response-wrapper';

export interface CancelReservationOffer$Params {
  reservationIdentifier: string;
  supplierLocator?: string;
  offerID?: string;

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

export function cancelReservationOffer(http: HttpClient, rootUrl: string, params: CancelReservationOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, cancelReservationOffer.PATH, 'put');
  if (params) {
    rb.path('reservationIdentifier', params.reservationIdentifier, {"style":"simple","explode":false});
    rb.query('supplierLocator', params.supplierLocator, {"style":"form","explode":true});
    rb.query('offerID', params.offerID, {"style":"form","explode":true});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReservationResponseWrapper>;
    })
  );
}

cancelReservationOffer.PATH = '/book/reservation/reservations/{reservationIdentifier}/canceloffer';
