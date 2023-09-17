/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OfferListResponseWrapper } from '../../models/offer-list-response-wrapper';
import { OfferQueryBuildFromCatalogOfferings } from '../../models/offer-query-build-from-catalog-offerings';

export interface OfferBuildFromCatalogOfferings$Params {

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
      body: OfferQueryBuildFromCatalogOfferings
}

export function offerBuildFromCatalogOfferings(http: HttpClient, rootUrl: string, params: OfferBuildFromCatalogOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, offerBuildFromCatalogOfferings.PATH, 'post');
  if (params) {
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
      return r as StrictHttpResponse<OfferListResponseWrapper>;
    })
  );
}

offerBuildFromCatalogOfferings.PATH = '/price/offers/buildfromcatalogofferings';