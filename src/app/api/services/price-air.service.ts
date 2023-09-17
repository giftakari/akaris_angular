/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { offerBuildFromCatalogOfferings } from '../fn/price-air/offer-build-from-catalog-offerings';
import { OfferBuildFromCatalogOfferings$Params } from '../fn/price-air/offer-build-from-catalog-offerings';
import { offerBuildFromCatalogProductOfferings } from '../fn/price-air/offer-build-from-catalog-product-offerings';
import { OfferBuildFromCatalogProductOfferings$Params } from '../fn/price-air/offer-build-from-catalog-product-offerings';
import { offerBuildFromProducts } from '../fn/price-air/offer-build-from-products';
import { OfferBuildFromProducts$Params } from '../fn/price-air/offer-build-from-products';
import { OfferListResponseWrapper } from '../models/offer-list-response-wrapper';

@Injectable({ providedIn: 'root' })
export class PriceAirService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `offerBuildFromCatalogProductOfferings()` */
  static readonly OfferBuildFromCatalogProductOfferingsPath = '/price/offers/buildfromcatalogproductofferings';

  /**
   * Price request with reference payload.
   *
   * The AirPrice API confirms pricing on air search results. While air pricing is generally an optional but recommended step, it is required for low cost carriers and some NDC carriers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offerBuildFromCatalogProductOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromCatalogProductOfferings$Response(params: OfferBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return offerBuildFromCatalogProductOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Price request with reference payload.
   *
   * The AirPrice API confirms pricing on air search results. While air pricing is generally an optional but recommended step, it is required for low cost carriers and some NDC carriers.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offerBuildFromCatalogProductOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromCatalogProductOfferings(params: OfferBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.offerBuildFromCatalogProductOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `offerBuildFromProducts()` */
  static readonly OfferBuildFromProductsPath = '/price/offers/buildfromproducts';

  /**
   * Price request with full payload.
   *
   * The AirPrice API confirms pricing on air search results. While air pricing is generally an optional but recommended step, it is required for low cost carriers and some NDC carriers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offerBuildFromProducts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromProducts$Response(params: OfferBuildFromProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return offerBuildFromProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * Price request with full payload.
   *
   * The AirPrice API confirms pricing on air search results. While air pricing is generally an optional but recommended step, it is required for low cost carriers and some NDC carriers.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offerBuildFromProducts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromProducts(params: OfferBuildFromProducts$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.offerBuildFromProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `offerBuildFromCatalogOfferings()` */
  static readonly OfferBuildFromCatalogOfferingsPath = '/price/offers/buildfromcatalogofferings';

  /**
   * Price by reference to a low fare search response.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offerBuildFromCatalogOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromCatalogOfferings$Response(params: OfferBuildFromCatalogOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return offerBuildFromCatalogOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Price by reference to a low fare search response.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offerBuildFromCatalogOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offerBuildFromCatalogOfferings(params: OfferBuildFromCatalogOfferings$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.offerBuildFromCatalogOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

}
