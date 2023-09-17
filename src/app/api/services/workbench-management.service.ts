/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createReservationWorkbench } from '../fn/workbench-management/create-reservation-workbench';
import { CreateReservationWorkbench$Params } from '../fn/workbench-management/create-reservation-workbench';
import { createReservationWorkbenchFromIdentifier } from '../fn/workbench-management/create-reservation-workbench-from-identifier';
import { CreateReservationWorkbenchFromIdentifier$Params } from '../fn/workbench-management/create-reservation-workbench-from-identifier';
import { createReservationWorkbenchFromLocator } from '../fn/workbench-management/create-reservation-workbench-from-locator';
import { CreateReservationWorkbenchFromLocator$Params } from '../fn/workbench-management/create-reservation-workbench-from-locator';
import { ignoreReservationWorkbench } from '../fn/workbench-management/ignore-reservation-workbench';
import { IgnoreReservationWorkbench$Params } from '../fn/workbench-management/ignore-reservation-workbench';
import { ReservationResponseWrapper } from '../models/reservation-response-wrapper';
import { retrieveReservationWorkbench } from '../fn/workbench-management/retrieve-reservation-workbench';
import { RetrieveReservationWorkbench$Params } from '../fn/workbench-management/retrieve-reservation-workbench';

@Injectable({ providedIn: 'root' })
export class WorkbenchManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createReservationWorkbenchFromLocator()` */
  static readonly CreateReservationWorkbenchFromLocatorPath = '/book/session/reservationworkbench/buildfromlocator';

  /**
   * Create a workbench for existing booking.
   *
   * Initiate a post-commit workbench to create a session for ticketing or updating an existing reservation. This is a prerequisite step for any transaction that modifies, updates, or tickets any PNR.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservationWorkbenchFromLocator()` instead.
   *
   * This method doesn't expect any request body.
   */
  createReservationWorkbenchFromLocator$Response(params?: CreateReservationWorkbenchFromLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return createReservationWorkbenchFromLocator(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a workbench for existing booking.
   *
   * Initiate a post-commit workbench to create a session for ticketing or updating an existing reservation. This is a prerequisite step for any transaction that modifies, updates, or tickets any PNR.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReservationWorkbenchFromLocator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createReservationWorkbenchFromLocator(params?: CreateReservationWorkbenchFromLocator$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.createReservationWorkbenchFromLocator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `retrieveReservationWorkbench()` */
  static readonly RetrieveReservationWorkbenchPath = '/book/session/reservationworkbench/{Identifier}';

  /**
   * Retrieve workbench details.
   *
   * At any point in the booking session, you can retrieve the workbench. The response returns all details added to the workbench at that point.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveReservationWorkbench()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReservationWorkbench$Response(params: RetrieveReservationWorkbench$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return retrieveReservationWorkbench(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve workbench details.
   *
   * At any point in the booking session, you can retrieve the workbench. The response returns all details added to the workbench at that point.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveReservationWorkbench$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReservationWorkbench(params: RetrieveReservationWorkbench$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.retrieveReservationWorkbench$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `ignoreReservationWorkbench()` */
  static readonly IgnoreReservationWorkbenchPath = '/book/session/reservationworkbench/{Identifier}';

  /**
   * Discard workbench.
   *
   * At any point in a booking or ticketing workflow, if necessary, you can discard the workbench and any information in it.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ignoreReservationWorkbench()` instead.
   *
   * This method doesn't expect any request body.
   */
  ignoreReservationWorkbench$Response(params: IgnoreReservationWorkbench$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return ignoreReservationWorkbench(this.http, this.rootUrl, params, context);
  }

  /**
   * Discard workbench.
   *
   * At any point in a booking or ticketing workflow, if necessary, you can discard the workbench and any information in it.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ignoreReservationWorkbench$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ignoreReservationWorkbench(params: IgnoreReservationWorkbench$Params, context?: HttpContext): Observable<void> {
    return this.ignoreReservationWorkbench$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createReservationWorkbench()` */
  static readonly CreateReservationWorkbenchPath = '/book/session/reservationworkbench';

  /**
   * Create a workbench for new booking.
   *
   * Use this request to initiate a workbench for a new reservation. This prerequisite step for booking creates the workbench session in which all booking details are added together to create a PNR at commit.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservationWorkbench()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservationWorkbench$Response(params: CreateReservationWorkbench$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return createReservationWorkbench(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a workbench for new booking.
   *
   * Use this request to initiate a workbench for a new reservation. This prerequisite step for booking creates the workbench session in which all booking details are added together to create a PNR at commit.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReservationWorkbench$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReservationWorkbench(params: CreateReservationWorkbench$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.createReservationWorkbench$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

  /** Path part for operation `createReservationWorkbenchFromIdentifier()` */
  static readonly CreateReservationWorkbenchFromIdentifierPath = '/book/session/reservationworkbench/buildfromidentifier/{Identifier}';

  /**
   * Create a workbench for existing booking.
   *
   * Initiate a post-commit workbench to create a session for ticketing or updating an existing reservation. This is a prerequisite step for any transaction that modifies, updates, or tickets any PNR.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReservationWorkbenchFromIdentifier()` instead.
   *
   * This method doesn't expect any request body.
   */
  createReservationWorkbenchFromIdentifier$Response(params: CreateReservationWorkbenchFromIdentifier$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
    return createReservationWorkbenchFromIdentifier(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a workbench for existing booking.
   *
   * Initiate a post-commit workbench to create a session for ticketing or updating an existing reservation. This is a prerequisite step for any transaction that modifies, updates, or tickets any PNR.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReservationWorkbenchFromIdentifier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createReservationWorkbenchFromIdentifier(params: CreateReservationWorkbenchFromIdentifier$Params, context?: HttpContext): Observable<ReservationResponseWrapper> {
    return this.createReservationWorkbenchFromIdentifier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponseWrapper>): ReservationResponseWrapper => r.body)
    );
  }

}
