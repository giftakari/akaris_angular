/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAgencyAddress } from '../fn/workbench-manage-travel-agency/add-agency-address';
import { AddAgencyAddress$Params } from '../fn/workbench-manage-travel-agency/add-agency-address';
import { deleteAgencyAddress } from '../fn/workbench-manage-travel-agency/delete-agency-address';
import { DeleteAgencyAddress$Params } from '../fn/workbench-manage-travel-agency/delete-agency-address';
import { TravelAgencyResponse } from '../models/travel-agency-response';
import { updateAgencyAddress } from '../fn/workbench-manage-travel-agency/update-agency-address';
import { UpdateAgencyAddress$Params } from '../fn/workbench-manage-travel-agency/update-agency-address';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageTravelAgencyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addAgencyAddress()` */
  static readonly AddAgencyAddressPath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/addaddress';

  /**
   * Add Agency Address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAgencyAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAgencyAddress$Response(params: AddAgencyAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelAgencyResponse>> {
    return addAgencyAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * Add Agency Address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAgencyAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAgencyAddress(params: AddAgencyAddress$Params, context?: HttpContext): Observable<TravelAgencyResponse> {
    return this.addAgencyAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelAgencyResponse>): TravelAgencyResponse => r.body)
    );
  }

  /** Path part for operation `updateAgencyAddress()` */
  static readonly UpdateAgencyAddressPath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/{id}/updateaddress';

  /**
   * Update Agency Address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAgencyAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAgencyAddress$Response(params: UpdateAgencyAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelAgencyResponse>> {
    return updateAgencyAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Agency Address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAgencyAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAgencyAddress(params: UpdateAgencyAddress$Params, context?: HttpContext): Observable<TravelAgencyResponse> {
    return this.updateAgencyAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelAgencyResponse>): TravelAgencyResponse => r.body)
    );
  }

  /** Path part for operation `deleteAgencyAddress()` */
  static readonly DeleteAgencyAddressPath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/{id}/deleteaddress/{id}';

  /**
   * Delete Agency Address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAgencyAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgencyAddress$Response(params: DeleteAgencyAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAgencyAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Agency Address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAgencyAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgencyAddress(params: DeleteAgencyAddress$Params, context?: HttpContext): Observable<void> {
    return this.deleteAgencyAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
