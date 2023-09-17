/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CatalogProductOfferingsQueryBuildOptions } from '../../models/catalog-product-offerings-query-build-options';
import { CatalogProductOfferingsResponseWrapper } from '../../models/catalog-product-offerings-response-wrapper';

export interface BuildOptionsAirSearch$Params {

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
      body: CatalogProductOfferingsQueryBuildOptions
}

export function buildOptionsAirSearch(http: HttpClient, rootUrl: string, params: BuildOptionsAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, buildOptionsAirSearch.PATH, 'post');
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
      return r as StrictHttpResponse<CatalogProductOfferingsResponseWrapper>;
    })
  );
}

buildOptionsAirSearch.PATH = '/catalog/search/catalogproductofferings/buildoptions';
