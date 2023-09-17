/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addTraveler } from '../fn/workbench-manage-travelers/add-traveler';
import { AddTraveler$Params } from '../fn/workbench-manage-travelers/add-traveler';
import { addTravelers } from '../fn/workbench-manage-travelers/add-travelers';
import { AddTravelers$Params } from '../fn/workbench-manage-travelers/add-travelers';
import { deleteTraveler } from '../fn/workbench-manage-travelers/delete-traveler';
import { DeleteTraveler$Params } from '../fn/workbench-manage-travelers/delete-traveler';
import { getTraveler } from '../fn/workbench-manage-travelers/get-traveler';
import { GetTraveler$Params } from '../fn/workbench-manage-travelers/get-traveler';
import { getTravelers } from '../fn/workbench-manage-travelers/get-travelers';
import { GetTravelers$Params } from '../fn/workbench-manage-travelers/get-travelers';
import { TravelerListResponseWrapper } from '../models/traveler-list-response-wrapper';
import { TravelerResponseWrapper } from '../models/traveler-response-wrapper';
import { updateFromTravelerUpdatedItems } from '../fn/workbench-manage-travelers/update-from-traveler-updated-items';
import { UpdateFromTravelerUpdatedItems$Params } from '../fn/workbench-manage-travelers/update-from-traveler-updated-items';
import { updateTraveler } from '../fn/workbench-manage-travelers/update-traveler';
import { UpdateTraveler$Params } from '../fn/workbench-manage-travelers/update-traveler';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageTravelersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTraveler()` */
  static readonly GetTravelerPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers/{id}';

  /**
   * Retrieve Traveler.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTraveler()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTraveler$Response(params: GetTraveler$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerResponseWrapper>> {
    return getTraveler(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve Traveler.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTraveler$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTraveler(params: GetTraveler$Params, context?: HttpContext): Observable<TravelerResponseWrapper> {
    return this.getTraveler$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerResponseWrapper>): TravelerResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateTraveler()` */
  static readonly UpdateTravelerPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers/{id}';

  /**
   * Update traveler.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTraveler()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTraveler$Response(params: UpdateTraveler$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerResponseWrapper>> {
    return updateTraveler(this.http, this.rootUrl, params, context);
  }

  /**
   * Update traveler.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTraveler$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTraveler(params: UpdateTraveler$Params, context?: HttpContext): Observable<TravelerResponseWrapper> {
    return this.updateTraveler$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerResponseWrapper>): TravelerResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteTraveler()` */
  static readonly DeleteTravelerPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers/{id}';

  /**
   * Delete traveler.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTraveler()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTraveler$Response(params: DeleteTraveler$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTraveler(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete traveler.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTraveler$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTraveler(params: DeleteTraveler$Params, context?: HttpContext): Observable<void> {
    return this.deleteTraveler$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addTravelers()` */
  static readonly AddTravelersPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers/list';

  /**
   * Add multiple travelers.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTravelers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTravelers$Response(params: AddTravelers$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerListResponseWrapper>> {
    return addTravelers(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple travelers.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTravelers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTravelers(params: AddTravelers$Params, context?: HttpContext): Observable<TravelerListResponseWrapper> {
    return this.addTravelers$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerListResponseWrapper>): TravelerListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateFromTravelerUpdatedItems()` */
  static readonly UpdateFromTravelerUpdatedItemsPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers/updatefromtravelerupdateditems/{id}';

  /**
   * Modify traveler information after Updatable Items.
   *
   * The Traveler Update request follows an Updatable Items request and makes a change to one or more items returned in that Updatable Items response. Sent as part of a workbench session, either during the initial booking workflow (workbench not committed, PNR not issued yet) or a post-commit workbench for an existing PNR. It is followed by a workbench commit.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFromTravelerUpdatedItems()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFromTravelerUpdatedItems$Response(params: UpdateFromTravelerUpdatedItems$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateFromTravelerUpdatedItems(this.http, this.rootUrl, params, context);
  }

  /**
   * Modify traveler information after Updatable Items.
   *
   * The Traveler Update request follows an Updatable Items request and makes a change to one or more items returned in that Updatable Items response. Sent as part of a workbench session, either during the initial booking workflow (workbench not committed, PNR not issued yet) or a post-commit workbench for an existing PNR. It is followed by a workbench commit.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFromTravelerUpdatedItems$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFromTravelerUpdatedItems(params: UpdateFromTravelerUpdatedItems$Params, context?: HttpContext): Observable<void> {
    return this.updateFromTravelerUpdatedItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTravelers()` */
  static readonly GetTravelersPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers';

  /**
   * retrieve multiple travelers.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTravelers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTravelers$Response(params: GetTravelers$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerListResponseWrapper>> {
    return getTravelers(this.http, this.rootUrl, params, context);
  }

  /**
   * retrieve multiple travelers.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTravelers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTravelers(params: GetTravelers$Params, context?: HttpContext): Observable<TravelerListResponseWrapper> {
    return this.getTravelers$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerListResponseWrapper>): TravelerListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `addTraveler()` */
  static readonly AddTravelerPath = '/book/traveler/reservationworkbench/{ReservationResource_Identifier}/travelers';

  /**
   * Add traveler and traveler remarks to booking.
   *
   * Send the Add Traveler request to add a traveler to the reservation workbench. You must add each traveler to the workbench in a separate POST request. Traveler information can include traveler name and contact details, add traveler-specific remarks including certain SSRs and travel documents such as a passport.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTraveler()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTraveler$Response(params: AddTraveler$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerResponseWrapper>> {
    return addTraveler(this.http, this.rootUrl, params, context);
  }

  /**
   * Add traveler and traveler remarks to booking.
   *
   * Send the Add Traveler request to add a traveler to the reservation workbench. You must add each traveler to the workbench in a separate POST request. Traveler information can include traveler name and contact details, add traveler-specific remarks including certain SSRs and travel documents such as a passport.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTraveler$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTraveler(params: AddTraveler$Params, context?: HttpContext): Observable<TravelerResponseWrapper> {
    return this.addTraveler$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerResponseWrapper>): TravelerResponseWrapper => r.body)
    );
  }

}
