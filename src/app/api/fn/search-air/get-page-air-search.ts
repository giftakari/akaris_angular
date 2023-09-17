/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CatalogProductOfferingsResponseWrapper } from '../../models/catalog-product-offerings-response-wrapper';

export interface GetPageAirSearch$Params {

/**
 * The Identifier of the Offerings from which a page is to be returned
 */
  identifier?: string;

/**
 * The page number to be returned
 */
  pageNumber?: string;

/**
 * The view.  Either detail or summary.
 */
  view?: string;

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

export function getPageAirSearch(http: HttpClient, rootUrl: string, params?: GetPageAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, getPageAirSearch.PATH, 'get');
  if (params) {
    rb.query('identifier', params.identifier, {"style":"form","explode":true});
    rb.query('pageNumber', params.pageNumber, {"style":"form","explode":true});
    rb.query('view', params.view, {"style":"form","explode":true});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
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

getPageAirSearch.PATH = '/catalog/search/catalogproductofferings';
