/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buildFromTraveler } from '../fn/workbench-traveler-updatable-items/build-from-traveler';
import { BuildFromTraveler$Params } from '../fn/workbench-traveler-updatable-items/build-from-traveler';
import { TravelerUpdatableItemsListResponseWrapper } from '../models/traveler-updatable-items-list-response-wrapper';

@Injectable({ providedIn: 'root' })
export class WorkbenchTravelerUpdatableItemsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `buildFromTraveler()` */
  static readonly BuildFromTravelerPath = '/book/updateableitem/reservationworkbench/{ReservationResource_Identifier}/travelerupdatableitems/buildfromtraveler';

  /**
   * Retrieve updatable items by traveler.
   *
   * The Updatable Items request retrieves by traveler ID a list of objects that are updatable for that traveler, and returns for each an indicator for whether that item can be added, modified, or deleted.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildFromTraveler()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromTraveler$Response(params: BuildFromTraveler$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelerUpdatableItemsListResponseWrapper>> {
    return buildFromTraveler(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve updatable items by traveler.
   *
   * The Updatable Items request retrieves by traveler ID a list of objects that are updatable for that traveler, and returns for each an indicator for whether that item can be added, modified, or deleted.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildFromTraveler$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildFromTraveler(params: BuildFromTraveler$Params, context?: HttpContext): Observable<TravelerUpdatableItemsListResponseWrapper> {
    return this.buildFromTraveler$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelerUpdatableItemsListResponseWrapper>): TravelerUpdatableItemsListResponseWrapper => r.body)
    );
  }

}
