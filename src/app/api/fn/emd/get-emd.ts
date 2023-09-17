/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmdListResponseWrapper } from '../../models/emd-list-response-wrapper';

export interface GetEmd$Params {
  Identifier: string;

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

export function getEmd(http: HttpClient, rootUrl: string, params: GetEmd$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, getEmd.PATH, 'get');
  if (params) {
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
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

getEmd.PATH = '/emds/{Identifier}';
