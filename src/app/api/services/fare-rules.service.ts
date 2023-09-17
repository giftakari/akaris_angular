/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { FareRuleListResponseWrapper } from '../models/fare-rule-list-response-wrapper';
import { getRulesFromCatalogOfferings } from '../fn/fare-rules/get-rules-from-catalog-offerings';
import { GetRulesFromCatalogOfferings$Params } from '../fn/fare-rules/get-rules-from-catalog-offerings';
import { getRulesFromCatalogProductOfferings } from '../fn/fare-rules/get-rules-from-catalog-product-offerings';
import { GetRulesFromCatalogProductOfferings$Params } from '../fn/fare-rules/get-rules-from-catalog-product-offerings';
import { getRulesFromOffer } from '../fn/fare-rules/get-rules-from-offer';
import { GetRulesFromOffer$Params } from '../fn/fare-rules/get-rules-from-offer';
import { getRulesFromReservation } from '../fn/fare-rules/get-rules-from-reservation';
import { GetRulesFromReservation$Params } from '../fn/fare-rules/get-rules-from-reservation';
import { getRulesFromReservationWorkbench } from '../fn/fare-rules/get-rules-from-reservation-workbench';
import { GetRulesFromReservationWorkbench$Params } from '../fn/fare-rules/get-rules-from-reservation-workbench';

@Injectable({ providedIn: 'root' })
export class FareRulesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRulesFromReservationWorkbench()` */
  static readonly GetRulesFromReservationWorkbenchPath = '/farerule/farerules/fromreservationworkbench';

  /**
   * Return standalone fare rules with reference to a Reservation workbench.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRulesFromReservationWorkbench()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromReservationWorkbench$Response(params: GetRulesFromReservationWorkbench$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
    return getRulesFromReservationWorkbench(this.http, this.rootUrl, params, context);
  }

  /**
   * Return standalone fare rules with reference to a Reservation workbench.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRulesFromReservationWorkbench$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromReservationWorkbench(params: GetRulesFromReservationWorkbench$Params, context?: HttpContext): Observable<FareRuleListResponseWrapper> {
    return this.getRulesFromReservationWorkbench$Response(params, context).pipe(
      map((r: StrictHttpResponse<FareRuleListResponseWrapper>): FareRuleListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getRulesFromReservation()` */
  static readonly GetRulesFromReservationPath = '/farerule/farerules/fromreservation';

  /**
   * Return standalone fare rules with reference to a Reservation.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRulesFromReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromReservation$Response(params: GetRulesFromReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
    return getRulesFromReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Return standalone fare rules with reference to a Reservation.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRulesFromReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromReservation(params: GetRulesFromReservation$Params, context?: HttpContext): Observable<FareRuleListResponseWrapper> {
    return this.getRulesFromReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<FareRuleListResponseWrapper>): FareRuleListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getRulesFromOffer()` */
  static readonly GetRulesFromOfferPath = '/farerule/farerules/fromoffer';

  /**
   * Return standalone fare rules with reference to an Offer.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRulesFromOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromOffer$Response(params: GetRulesFromOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
    return getRulesFromOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * Return standalone fare rules with reference to an Offer.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRulesFromOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromOffer(params: GetRulesFromOffer$Params, context?: HttpContext): Observable<FareRuleListResponseWrapper> {
    return this.getRulesFromOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<FareRuleListResponseWrapper>): FareRuleListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getRulesFromCatalogProductOfferings()` */
  static readonly GetRulesFromCatalogProductOfferingsPath = '/farerule/farerules/fromcatalogproductofferings';

  /**
   * Return standalone fare rules with reference to CatalogProductOfferings.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRulesFromCatalogProductOfferings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromCatalogProductOfferings$Response(params: GetRulesFromCatalogProductOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
    return getRulesFromCatalogProductOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Return standalone fare rules with reference to CatalogProductOfferings.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRulesFromCatalogProductOfferings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromCatalogProductOfferings(params: GetRulesFromCatalogProductOfferings$Params, context?: HttpContext): Observable<FareRuleListResponseWrapper> {
    return this.getRulesFromCatalogProductOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<FareRuleListResponseWrapper>): FareRuleListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getRulesFromCatalogOfferings()` */
  static readonly GetRulesFromCatalogOfferingsPath = '/farerule/farerules/fromcatalogofferings';

  /**
   * Return standalone fare rules with reference to CatalogOfferings.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRulesFromCatalogOfferings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromCatalogOfferings$Response(params: GetRulesFromCatalogOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<FareRuleListResponseWrapper>> {
    return getRulesFromCatalogOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Return standalone fare rules with reference to CatalogOfferings.
   *
   * Fare rules are the conditions and restrictions that apply to any booking based on its fare type. These determine the price of the fare. Generally, less expensive fares have more restrictions and more expensive fares have fewer restrictions. Fare rules can include blackout dates, advanced reservation requirements, minimum and maximum stay requirements, and cancellation and change penalties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRulesFromCatalogOfferings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRulesFromCatalogOfferings(params: GetRulesFromCatalogOfferings$Params, context?: HttpContext): Observable<FareRuleListResponseWrapper> {
    return this.getRulesFromCatalogOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<FareRuleListResponseWrapper>): FareRuleListResponseWrapper => r.body)
    );
  }

}
