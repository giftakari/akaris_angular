/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FareRuleListResponseWrapper } from '../../models/fare-rule-list-response-wrapper';

export interface GetRulesFromReservation$Params {
  reservationIdentifier: string;
  offerIDs: Array<string>;
  productIDs?: Array<string>;
  flightIDs?: Array<string>;

/**
 * Space separated list of fare rule categories required
 */
  fareRuleCategories?: Array<string>;

/**
 * The type of fare rule structure required
 */
  fareRuleType: string;

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
}

export function getRulesFromReservation(http: HttpClient, rootUrl: string, params: GetRulesFromReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, getRulesFromReservation.PATH, 'get');
  if (params) {
    rb.query('reservationIdentifier', params.reservationIdentifier, {"style":"form","explode":true});
    rb.query('offerIDs', params.offerIDs, {"style":"form","explode":true});
    rb.query('productIDs', params.productIDs, {"style":"form","explode":true});
    rb.query('flightIDs', params.flightIDs, {"style":"form","explode":true});
    rb.query('fareRuleCategories', params.fareRuleCategories, {"style":"form","explode":true});
    rb.query('fareRuleType', params.fareRuleType, {"style":"form","explode":true});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FareRuleListResponseWrapper>;
    })
  );
}

getRulesFromReservation.PATH = '/farerule/farerules/fromreservation';
