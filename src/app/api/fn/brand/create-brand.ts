/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BrandListResponseWrapper } from '../../models/brand-list-response-wrapper';
import { BrandQueryBuildCompleteInfoFromOffer } from '../../models/brand-query-build-complete-info-from-offer';

export interface CreateBrand$Params {

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
      body: BrandQueryBuildCompleteInfoFromOffer
}

export function createBrand(http: HttpClient, rootUrl: string, params: CreateBrand$Params, context?: HttpContext): Observable<StrictHttpResponse<BrandListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, createBrand.PATH, 'post');
  if (params) {
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
      return r as StrictHttpResponse<BrandListResponseWrapper>;
    })
  );
}

createBrand.PATH = '/brandfullinfo/brands/buildcompleteinfofromoffer';
