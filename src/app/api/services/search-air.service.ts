/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buildNextAirSearch } from '../fn/search-air/build-next-air-search';
import { BuildNextAirSearch$Params } from '../fn/search-air/build-next-air-search';
import { buildOptionsAirSearch } from '../fn/search-air/build-options-air-search';
import { BuildOptionsAirSearch$Params } from '../fn/search-air/build-options-air-search';
import { CatalogProductOfferingsResponseWrapper } from '../models/catalog-product-offerings-response-wrapper';
import { createAirSearch } from '../fn/search-air/create-air-search';
import { CreateAirSearch$Params } from '../fn/search-air/create-air-search';
import { getPageAirSearch } from '../fn/search-air/get-page-air-search';
import { GetPageAirSearch$Params } from '../fn/search-air/get-page-air-search';

@Injectable({ providedIn: 'root' })
export class SearchAirService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPageAirSearch()` */
  static readonly GetPageAirSearchPath = '/catalog/search/catalogproductofferings';

  /**
   * Return additional search results (pagination).
   *
   * The optional pagination feature is supported for Search and Next Leg Search. Pagination allows you to control the number of offers returned in the initial response, which can affect response time. To request pagination, send offersPerPage in the initial Search request payload. All offers are cached on the server, but only the number sent in offersPerPage is returned in the initial response. For example, if offersPerPage is set to 5, only the first 5 offers are returned in the initial response. (An offer is a set of products that are each available at the same unique price point and same terms and conditions.) To retrieve the second and subsequent pages of search results, send the POST request above to the endpoint used for the initial Search or Next Leg Search request with the transaction identifier from that response.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPageAirSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPageAirSearch$Response(params?: GetPageAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
    return getPageAirSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Return additional search results (pagination).
   *
   * The optional pagination feature is supported for Search and Next Leg Search. Pagination allows you to control the number of offers returned in the initial response, which can affect response time. To request pagination, send offersPerPage in the initial Search request payload. All offers are cached on the server, but only the number sent in offersPerPage is returned in the initial response. For example, if offersPerPage is set to 5, only the first 5 offers are returned in the initial response. (An offer is a set of products that are each available at the same unique price point and same terms and conditions.) To retrieve the second and subsequent pages of search results, send the POST request above to the endpoint used for the initial Search or Next Leg Search request with the transaction identifier from that response.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPageAirSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPageAirSearch(params?: GetPageAirSearch$Params, context?: HttpContext): Observable<CatalogProductOfferingsResponseWrapper> {
    return this.getPageAirSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<CatalogProductOfferingsResponseWrapper>): CatalogProductOfferingsResponseWrapper => r.body)
    );
  }

  /** Path part for operation `createAirSearch()` */
  static readonly CreateAirSearchPath = '/catalog/search/catalogproductofferings';

  /**
   * Initial flight search.
   *
   * The Search API is the first step in the travel booking workflow. Send a Search request to return offers for flights between the selected cities
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAirSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAirSearch$Response(params: CreateAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
    return createAirSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Initial flight search.
   *
   * The Search API is the first step in the travel booking workflow. Send a Search request to return offers for flights between the selected cities
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAirSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAirSearch(params: CreateAirSearch$Params, context?: HttpContext): Observable<CatalogProductOfferingsResponseWrapper> {
    return this.createAirSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<CatalogProductOfferingsResponseWrapper>): CatalogProductOfferingsResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildNextAirSearch()` */
  static readonly BuildNextAirSearchPath = '/catalog/search/catalogproductofferings/buildnext';

  /**
   * Search for flights on next leg.
   *
   * Use the Next Leg Search API to return offers for the remaining leg/s of an itinerary after a leg-based Search. A leg-based Search response returns offers for only the outbound leg of your itinerary, and you must send Next Leg Search to return offers for the remaining leg or legs of the trip. If pagination was requested in the initial Search request it is applied to the Next Leg Search response as well.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildNextAirSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildNextAirSearch$Response(params: BuildNextAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
    return buildNextAirSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Search for flights on next leg.
   *
   * Use the Next Leg Search API to return offers for the remaining leg/s of an itinerary after a leg-based Search. A leg-based Search response returns offers for only the outbound leg of your itinerary, and you must send Next Leg Search to return offers for the remaining leg or legs of the trip. If pagination was requested in the initial Search request it is applied to the Next Leg Search response as well.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildNextAirSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildNextAirSearch(params: BuildNextAirSearch$Params, context?: HttpContext): Observable<CatalogProductOfferingsResponseWrapper> {
    return this.buildNextAirSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<CatalogProductOfferingsResponseWrapper>): CatalogProductOfferingsResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildOptionsAirSearch()` */
  static readonly BuildOptionsAirSearchPath = '/catalog/search/catalogproductofferings/buildoptions';

  /**
   * Return all upsells on a specific flight.
   *
   * Use the Flight Specific Search API reference payload request to return additional upsells (you can set up to 99) for any product or products returned by a Search or Next Leg Search. The reference payload sends an identifier referencing a previous response and is supported for both GDS and NDC. Full payload is not supported for NDC; use the reference payload instead. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildOptionsAirSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildOptionsAirSearch$Response(params: BuildOptionsAirSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<CatalogProductOfferingsResponseWrapper>> {
    return buildOptionsAirSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Return all upsells on a specific flight.
   *
   * Use the Flight Specific Search API reference payload request to return additional upsells (you can set up to 99) for any product or products returned by a Search or Next Leg Search. The reference payload sends an identifier referencing a previous response and is supported for both GDS and NDC. Full payload is not supported for NDC; use the reference payload instead. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildOptionsAirSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildOptionsAirSearch(params: BuildOptionsAirSearch$Params, context?: HttpContext): Observable<CatalogProductOfferingsResponseWrapper> {
    return this.buildOptionsAirSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<CatalogProductOfferingsResponseWrapper>): CatalogProductOfferingsResponseWrapper => r.body)
    );
  }

}
