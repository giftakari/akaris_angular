/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buildFromOffer } from '../fn/workbench-manage-offers/build-from-offer';
import { BuildFromOffer$Params } from '../fn/workbench-manage-offers/build-from-offer';
import { buildFromOfferList } from '../fn/workbench-manage-offers/build-from-offer-list';
import { BuildFromOfferList$Params } from '../fn/workbench-manage-offers/build-from-offer-list';
import { buildFromShoppingCartProducts } from '../fn/workbench-manage-offers/build-from-shopping-cart-products';
import { BuildFromShoppingCartProducts$Params } from '../fn/workbench-manage-offers/build-from-shopping-cart-products';
import { cancelWorkbenchOffer } from '../fn/workbench-manage-offers/cancel-workbench-offer';
import { CancelWorkbenchOffer$Params } from '../fn/workbench-manage-offers/cancel-workbench-offer';
import { cancelWorkbenchOffers } from '../fn/workbench-manage-offers/cancel-workbench-offers';
import { CancelWorkbenchOffers$Params } from '../fn/workbench-manage-offers/cancel-workbench-offers';
import { createManualOffer } from '../fn/workbench-manage-offers/create-manual-offer';
import { CreateManualOffer$Params } from '../fn/workbench-manage-offers/create-manual-offer';
import { OfferListResponseWrapper } from '../models/offer-list-response-wrapper';
import { OfferResponseWrapper } from '../models/offer-response-wrapper';
import { workbenchBuildAncillaryOffersFromCatalogOfferings } from '../fn/workbench-manage-offers/workbench-build-ancillary-offers-from-catalog-offerings';
import { WorkbenchBuildAncillaryOffersFromCatalogOfferings$Params } from '../fn/workbench-manage-offers/workbench-build-ancillary-offers-from-catalog-offerings';
import { workbenchBuildFromCatalogOfferings } from '../fn/workbench-manage-offers/workbench-build-from-catalog-offerings';
import { WorkbenchBuildFromCatalogOfferings$Params } from '../fn/workbench-manage-offers/workbench-build-from-catalog-offerings';
import { workbenchBuildFromCatalogProductOfferings } from '../fn/workbench-manage-offers/workbench-build-from-catalog-product-offerings';
import { WorkbenchBuildFromCatalogProductOfferings$Params } from '../fn/workbench-manage-offers/workbench-build-from-catalog-product-offerings';
import { workbenchBuildFromProducts } from '../fn/workbench-manage-offers/workbench-build-from-products';
import { WorkbenchBuildFromProducts$Params } from '../fn/workbench-manage-offers/workbench-build-from-products';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageOffersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `buildFromShoppingCartProducts()` */
  static readonly BuildFromShoppingCartProductsPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromshoppingcartproducts';

  /**
   * Create offer from unpriced products in the shopping cart.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildFromShoppingCartProducts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromShoppingCartProducts$Response(params: BuildFromShoppingCartProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return buildFromShoppingCartProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * Create offer from unpriced products in the shopping cart.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildFromShoppingCartProducts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromShoppingCartProducts(params: BuildFromShoppingCartProducts$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.buildFromShoppingCartProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `workbenchBuildFromCatalogProductOfferings()` */
  static readonly WorkbenchBuildFromCatalogProductOfferingsPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromcatalogproductofferings';

  /**
   * Add offer to booking - reference payload.
   *
   * Use the Add Offer reference payload request to add an offer to the reservation workbench as part of the booking workflow. The reference payload request sends identifiers from the Search response instead of full itinerary details. NDC supports only the reference payload. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workbenchBuildFromCatalogProductOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromCatalogProductOfferings$Response(params: WorkbenchBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return workbenchBuildFromCatalogProductOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Add offer to booking - reference payload.
   *
   * Use the Add Offer reference payload request to add an offer to the reservation workbench as part of the booking workflow. The reference payload request sends identifiers from the Search response instead of full itinerary details. NDC supports only the reference payload. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workbenchBuildFromCatalogProductOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromCatalogProductOfferings(params: WorkbenchBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.workbenchBuildFromCatalogProductOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildFromOffer()` */
  static readonly BuildFromOfferPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromoffer';

  /**
   * Reprice and existing offer in the workbench.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildFromOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromOffer$Response(params: BuildFromOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferResponseWrapper>> {
    return buildFromOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * Reprice and existing offer in the workbench.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildFromOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromOffer(params: BuildFromOffer$Params, context?: HttpContext): Observable<OfferResponseWrapper> {
    return this.buildFromOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferResponseWrapper>): OfferResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildFromOfferList()` */
  static readonly BuildFromOfferListPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromofferlist';

  /**
   * Add an offer with reference to a Price response.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildFromOfferList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromOfferList$Response(params: BuildFromOfferList$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return buildFromOfferList(this.http, this.rootUrl, params, context);
  }

  /**
   * Add an offer with reference to a Price response.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildFromOfferList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromOfferList(params: BuildFromOfferList$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.buildFromOfferList$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `cancelWorkbenchOffer()` */
  static readonly CancelWorkbenchOfferPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/canceloffer';

  /**
   * Create a cancel offer quote.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelWorkbenchOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelWorkbenchOffer$Response(params: CancelWorkbenchOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return cancelWorkbenchOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a cancel offer quote.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelWorkbenchOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelWorkbenchOffer(params: CancelWorkbenchOffer$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.cancelWorkbenchOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `cancelWorkbenchOffers()` */
  static readonly CancelWorkbenchOffersPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/canceloffers';

  /**
   * Cancel one or more offers within the workbench without refund quote.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelWorkbenchOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelWorkbenchOffers$Response(params: CancelWorkbenchOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return cancelWorkbenchOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * Cancel one or more offers within the workbench without refund quote.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelWorkbenchOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelWorkbenchOffers(params: CancelWorkbenchOffers$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.cancelWorkbenchOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `workbenchBuildAncillaryOffersFromCatalogOfferings()` */
  static readonly WorkbenchBuildAncillaryOffersFromCatalogOfferingsPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildancillaryoffersfromcatalogofferings';

  /**
   * Add ancillary offer (ancillary book).
   *
   * The Ancillary Book request adds a selected ancillary or a paid seat to the new or post-commit workbench. For ancillaries, first send an Ancillary Shop request and an Ancillary Price request (NDC only). After adding an ancillary to the workbench, you must also issue an EMD for the selected ancillary per the Ancillary and EMD Guide. For paid seats, you must first create a workbench and send a Seat Map request.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workbenchBuildAncillaryOffersFromCatalogOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildAncillaryOffersFromCatalogOfferings$Response(params: WorkbenchBuildAncillaryOffersFromCatalogOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return workbenchBuildAncillaryOffersFromCatalogOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Add ancillary offer (ancillary book).
   *
   * The Ancillary Book request adds a selected ancillary or a paid seat to the new or post-commit workbench. For ancillaries, first send an Ancillary Shop request and an Ancillary Price request (NDC only). After adding an ancillary to the workbench, you must also issue an EMD for the selected ancillary per the Ancillary and EMD Guide. For paid seats, you must first create a workbench and send a Seat Map request.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workbenchBuildAncillaryOffersFromCatalogOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildAncillaryOffersFromCatalogOfferings(params: WorkbenchBuildAncillaryOffersFromCatalogOfferings$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.workbenchBuildAncillaryOffersFromCatalogOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `workbenchBuildFromProducts()` */
  static readonly WorkbenchBuildFromProductsPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromproducts';

  /**
   * Add offer to booking - full payload.
   *
   * Use the Add Offer full payload request to add an offer to the reservation workbench as part of the booking workflow. The full payload request sends full itinerary details instead of identifiers from the Search response as in the reference payload request. Full payload is not supported for NDC; use the reference payload instead. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workbenchBuildFromProducts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromProducts$Response(params: WorkbenchBuildFromProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return workbenchBuildFromProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * Add offer to booking - full payload.
   *
   * Use the Add Offer full payload request to add an offer to the reservation workbench as part of the booking workflow. The full payload request sends full itinerary details instead of identifiers from the Search response as in the reference payload request. Full payload is not supported for NDC; use the reference payload instead. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workbenchBuildFromProducts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromProducts(params: WorkbenchBuildFromProducts$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.workbenchBuildFromProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `workbenchBuildFromCatalogOfferings()` */
  static readonly WorkbenchBuildFromCatalogOfferingsPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers/buildfromcatalogofferings';

  /**
   * Add offer to booking - reference payload.
   *
   * Use the Add Offer reference payload request to add an offer to the reservation workbench as part of the booking workflow. The reference payload request sends identifiers from the Search response instead of full itinerary details. NDC supports only the reference payload. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workbenchBuildFromCatalogOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromCatalogOfferings$Response(params: WorkbenchBuildFromCatalogOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return workbenchBuildFromCatalogOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Add offer to booking - reference payload.
   *
   * Use the Add Offer reference payload request to add an offer to the reservation workbench as part of the booking workflow. The reference payload request sends identifiers from the Search response instead of full itinerary details. NDC supports only the reference payload. For GDS, you can send either a reference payload or a full payload.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workbenchBuildFromCatalogOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workbenchBuildFromCatalogOfferings(params: WorkbenchBuildFromCatalogOfferings$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.workbenchBuildFromCatalogOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `createManualOffer()` */
  static readonly CreateManualOfferPath = '/book/airoffer/reservationworkbench/{ReservationResource_Identifier}/offers';

  /**
   * Create refund or passive offer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createManualOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createManualOffer$Response(params: CreateManualOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferListResponseWrapper>> {
    return createManualOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * Create refund or passive offer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createManualOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createManualOffer(params: CreateManualOffer$Params, context?: HttpContext): Observable<OfferListResponseWrapper> {
    return this.createManualOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferListResponseWrapper>): OfferListResponseWrapper => r.body)
    );
  }

}
