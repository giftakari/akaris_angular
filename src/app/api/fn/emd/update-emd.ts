/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmdListResponseWrapper } from '../../models/emd-list-response-wrapper';
import { EmdQueryUpdateEmd } from '../../models/emd-query-update-emd';

export interface UpdateEmd$Params {
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
      body: EmdQueryUpdateEmd
}

export function updateEmd(http: HttpClient, rootUrl: string, params: UpdateEmd$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, updateEmd.PATH, 'put');
  if (params) {
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.body(params.body, 'application/json');
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

updateEmd.PATH = '/emds/{Identifier}';
