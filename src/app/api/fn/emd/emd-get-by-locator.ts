/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmdListResponseWrapper } from '../../models/emd-list-response-wrapper';

export interface EmdGetByLocator$Params {
  Locator: string;

/**
 * Specifies the type of reservation ID (e.g. reservation or cancellation).
 */
  locatorType?: string;

/**
 * Specifies a unique identifier to indicate the source system which generated the resId.
 */
  source?: string;

/**
 * Specifies the context of the source.
 */
  sourceContext?: string;

/**
 * Used for codes in the OpenTravel Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
 */
  otaType?: string;

/**
 * PNR creation Date
 */
  creationDate?: string;

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

export function emdGetByLocator(http: HttpClient, rootUrl: string, params: EmdGetByLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, emdGetByLocator.PATH, 'get');
  if (params) {
    rb.query('Locator', params.Locator, {"style":"form","explode":true});
    rb.query('locatorType', params.locatorType, {"style":"form","explode":true});
    rb.query('source', params.source, {"style":"form","explode":true});
    rb.query('sourceContext', params.sourceContext, {"style":"form","explode":true});
    rb.query('otaType', params.otaType, {"style":"form","explode":true});
    rb.query('creationDate', params.creationDate, {"style":"form","explode":true});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EmdListResponseWrapper>;
    })
  );
}

emdGetByLocator.PATH = '/emds/getbylocator';
