/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationResponseWrapper } from '../../models/reservation-response-wrapper';

export interface CreateReservationWorkbenchFromLocator$Params {
  Locator?: string;

/**
 * Specifies a unique identifier to indicate the source system which generated the resId.
 */
  source?: string;

/**
 * If true, ReservationDetail will be returned
 */
  detailViewInd?: boolean;

/**
 * If true, Brand complete information will be returned in Reservation Response
 */
  viewBrandCompleteInfoInd?: boolean;

/**
 * if true, full baggage information will be returned in Reservation Response
 */
  viewBaggageDetailInd?: boolean;

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

export function createReservationWorkbenchFromLocator(http: HttpClient, rootUrl: string, params?: CreateReservationWorkbenchFromLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, createReservationWorkbenchFromLocator.PATH, 'post');
  if (params) {
    rb.query('Locator', params.Locator, {"style":"form","explode":true});
    rb.query('source', params.source, {"style":"form","explode":true});
    rb.query('detailViewInd', params.detailViewInd, {"style":"form","explode":true});
    rb.query('viewBrandCompleteInfoInd', params.viewBrandCompleteInfoInd, {"style":"form","explode":true});
    rb.query('viewBaggageDetailInd', params.viewBaggageDetailInd, {"style":"form","explode":true});
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

createReservationWorkbenchFromLocator.PATH = '/book/session/reservationworkbench/buildfromlocator';
