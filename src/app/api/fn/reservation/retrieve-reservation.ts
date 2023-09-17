/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DocumentTypeEnum } from '../../models/document-type-enum';
import { IdentifierTypeEnum } from '../../models/identifier-type-enum';
import { ReservationResponseWrapper } from '../../models/reservation-response-wrapper';

export interface RetrieveReservation$Params {

/**
 * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
 */
  Identifier: string;

/**
 * The authorising entity creating the identifier
 */
  authority: string;

/**
 * If true, ReservationDetail will be returned.
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
 * The type of identifier key used to retrieve the reservation
 */
  identifierType?: IdentifierTypeEnum;

/**
 * When document is selected in IdentifierType, use documentType to identify the type of document
 */
  documentType?: DocumentTypeEnum;

/**
 * If true, Unfinished Offers will be returned as ShoppingCartProducts
 */
  viewShoppingCartProductsInd?: boolean;

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

export function retrieveReservation(http: HttpClient, rootUrl: string, params: RetrieveReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, retrieveReservation.PATH, 'get');
  if (params) {
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
    rb.query('authority', params.authority, {"style":"form","explode":true});
    rb.query('detailViewInd', params.detailViewInd, {"style":"form","explode":true});
    rb.query('viewBrandCompleteInfoInd', params.viewBrandCompleteInfoInd, {"style":"form","explode":true});
    rb.query('viewBaggageDetailInd', params.viewBaggageDetailInd, {"style":"form","explode":true});
    rb.query('identifierType', params.identifierType, {"style":"form","explode":true});
    rb.query('documentType', params.documentType, {"style":"form","explode":true});
    rb.query('viewShoppingCartProductsInd', params.viewShoppingCartProductsInd, {"style":"form","explode":true});
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

retrieveReservation.PATH = '/book/reservation/reservations/{Identifier}';
