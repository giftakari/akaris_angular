/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buildReservation } from '../fn/reservation/build-reservation';
import { BuildReservation$Params } from '../fn/reservation/build-reservation';
import { cancelReservationOffer } from '../fn/reservation/cancel-reservation-offer';
import { CancelReservationOffer$Params } from '../fn/reservation/cancel-reservation-offer';
import { commitReservation } from '../fn/reservation/commit-reservation';
import { CommitReservation$Params } from '../fn/reservation/commit-reservation';
import { createReservation } from '../fn/reservation/create-reservation';
import { CreateReservation$Params } from '../fn/reservation/create-reservation';
import { divide } from '../fn/reservation/divide';
import { Divide$Params } from '../fn/reservation/divide';
import { findReservation } from '../fn/reservation/find-reservation';
import { FindReservation$Params } from '../fn/reservation/find-reservation';
import { getReservationByLocator } from '../fn/reservation/get-reservation-by-locator';
import { GetReservationByLocator$Params } from '../fn/reservation/get-reservation-by-locator';
import { ReservationListResponseWrapper } from '../models/reservation-list-response-wrapper';
import { ReservationResponseWrapper } from '../models/reservation-response-wrapper';
import { retrieveReservation } from '../fn/reservation/retrieve-reservation';
import { RetrieveReservation$Params } from '../fn/reservation/retrieve-reservation';
import { updateReservation } from '../fn/reservation/update-reservation';
import { UpdateReservation$Params } from '../fn/reservation/update-reservation';

@Injectable({ providedIn: 'root' })
export class ReservationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `retrieveReservation()` */
  static readonly RetrieveReservationPath = '/book/reservation/reservations/{Identifier}';

  /**
   * Retrieve a Reservation.
   *
   * Retrieve details about a held booking, or PNR. While a PNR refers to a held booking that has not been ticketed, the PNR code persists after ticketing to provide the booking records. Once a PNR has been ticketed, you can still use PNR Retrieve to return both booking and ticketing details. A Ticket Display request can also be used to retrieve any ticketed itinerary.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReservation$Response(params: RetrieveReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return retrieveReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a Reservation.
   *
   * Retrieve details about a held booking, or PNR. While a PNR refers to a held booking that has not been ticketed, the PNR code persists after ticketing to provide the booking records. Once a PNR has been ticketed, you can still use PNR Retrieve to return both booking and ticketing details. A Ticket Display request can also be used to retrieve any ticketed itinerary.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReservation(params: RetrieveReservation$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.retrieveReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateReservation()` */
  static readonly UpdateReservationPath = '/book/reservation/reservations/{Identifier}';

  /**
   * Update a reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservation$Response(params: UpdateReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return updateReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a reservation.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservation(params: UpdateReservation$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.updateReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `commitReservation()` */
  static readonly CommitReservationPath = '/book/reservation/reservations/{Identifier}';

  /**
   * Commit workbench.
   *
   * After all required and any optional steps in a booking workbench session, send a POST request with the workbench identifier to commit the workbench. The resulting actions depend on whether payment is present in the workbench. If no Add Payment request has been sent, committing the workbench books the itinerary and generates a PNR. If an Add Payment request has not been sent, committing the workbench tickets the itinerary and generates ticket number/s.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commitReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commitReservation$Response(params: CommitReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return commitReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Commit workbench.
   *
   * After all required and any optional steps in a booking workbench session, send a POST request with the workbench identifier to commit the workbench. The resulting actions depend on whether payment is present in the workbench. If no Add Payment request has been sent, committing the workbench books the itinerary and generates a PNR. If an Add Payment request has not been sent, committing the workbench tickets the itinerary and generates ticket number/s.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `commitReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commitReservation(params: CommitReservation$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.commitReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `cancelReservationOffer()` */
  static readonly CancelReservationOfferPath = '/book/reservation/reservations/{reservationIdentifier}/canceloffer';

  /**
   * Cancel an Offer within a Reservation.
   *
   * Cancel an Offer by modifying the Reservation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelReservationOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelReservationOffer$Response(params: CancelReservationOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return cancelReservationOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * Cancel an Offer within a Reservation.
   *
   * Cancel an Offer by modifying the Reservation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelReservationOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelReservationOffer(params: CancelReservationOffer$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.cancelReservationOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `divide()` */
  static readonly DividePath = '/book/reservation/reservations/divide';

  /**
   * Divide a reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `divide()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  divide$Response(params: Divide$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationListResponseWrapper>> {
    return divide(this.http, this.rootUrl, params, context);
  }

  /**
   * Divide a reservation.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `divide$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  divide(params: Divide$Params, context?: HttpContext): Observable<ReservationListResponseWrapper> {
    return this.divide$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationListResponseWrapper>): ReservationListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildReservation()` */
  static readonly BuildReservationPath = '/book/reservation/reservations/build';

  /**
   * Single payload booking request.
   *
   * As an alternative to the booking workflow that takes place in a workbench session, you can send all booking details and commit a single payload to create a booking. The single payload book request does not support any of the optional steps in the booking workflow, such as adding seats or ancillaries.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildReservation$Response(params: BuildReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return buildReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Single payload booking request.
   *
   * As an alternative to the booking workflow that takes place in a workbench session, you can send all booking details and commit a single payload to create a booking. The single payload book request does not support any of the optional steps in the booking workflow, such as adding seats or ancillaries.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildReservation(params: BuildReservation$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.buildReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `findReservation()` */
  static readonly FindReservationPath = '/book/reservation/reservations/find';

  /**
   * Find a reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  findReservation$Response(params: FindReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationListResponseWrapper>> {
    return findReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a reservation.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  findReservation(params: FindReservation$Params, context?: HttpContext): Observable<ReservationListResponseWrapper> {
    return this.findReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationListResponseWrapper>): ReservationListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getReservationByLocator()` */
  static readonly GetReservationByLocatorPath = '/book/reservation/reservations/getbylocator';

  /**
   * Retrieve a reservation by locator.
   *
   * To be deprecated and replaced by Get by Identifier using identifier Type "Locator"
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationByLocator()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByLocator$Response(params?: GetReservationByLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return getReservationByLocator(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a reservation by locator.
   *
   * To be deprecated and replaced by Get by Identifier using identifier Type "Locator"
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationByLocator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByLocator(params?: GetReservationByLocator$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.getReservationByLocator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `createReservation()` */
  static readonly CreateReservationPath = '/book/reservation/reservations';

  /**
   * Create a reservation.
   *
   * Create a reservation on the core or with the vendor/provider.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation$Response(params: CreateReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return createReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a reservation.
   *
   * Create a reservation on the core or with the vendor/provider.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservation(params: CreateReservation$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.createReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

}
