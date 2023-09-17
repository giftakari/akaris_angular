/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSpecialServices } from '../fn/workbench-manage-special-services/add-special-services';
import { AddSpecialServices$Params } from '../fn/workbench-manage-special-services/add-special-services';
import { deleteSpecialServices } from '../fn/workbench-manage-special-services/delete-special-services';
import { DeleteSpecialServices$Params } from '../fn/workbench-manage-special-services/delete-special-services';
import { SpecialServiceListResponseWrapper } from '../models/special-service-list-response-wrapper';
import { SpecialServiceResponseWrapper } from '../models/special-service-response-wrapper';
import { updateSpecialServices } from '../fn/workbench-manage-special-services/update-special-services';
import { UpdateSpecialServices$Params } from '../fn/workbench-manage-special-services/update-special-services';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageSpecialServicesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addSpecialServices()` */
  static readonly AddSpecialServicesPath = '/book/specialservices/reservationworkbench/{ReservationResource_Identifier}/specialservices/list\'';

  /**
   * Add special services.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSpecialServices()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSpecialServices$Response(params: AddSpecialServices$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialServiceListResponseWrapper>> {
    return addSpecialServices(this.http, this.rootUrl, params, context);
  }

  /**
   * Add special services.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSpecialServices$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSpecialServices(params: AddSpecialServices$Params, context?: HttpContext): Observable<SpecialServiceListResponseWrapper> {
    return this.addSpecialServices$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialServiceListResponseWrapper>): SpecialServiceListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateSpecialServices()` */
  static readonly UpdateSpecialServicesPath = '/book/specialservices/reservationworkbench/{ReservationResource_Identifier}/specialservices\'';

  /**
   * Update special service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSpecialServices()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialServices$Response(params: UpdateSpecialServices$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialServiceResponseWrapper>> {
    return updateSpecialServices(this.http, this.rootUrl, params, context);
  }

  /**
   * Update special service.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSpecialServices$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialServices(params: UpdateSpecialServices$Params, context?: HttpContext): Observable<SpecialServiceResponseWrapper> {
    return this.updateSpecialServices$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialServiceResponseWrapper>): SpecialServiceResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteSpecialServices()` */
  static readonly DeleteSpecialServicesPath = '/book/specialservices/reservationworkbench/{ReservationResource_Identifier}/specialservices/{id}\'';

  /**
   * Delete a special service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSpecialServices()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialServices$Response(params: DeleteSpecialServices$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteSpecialServices(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a special service.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSpecialServices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialServices(params: DeleteSpecialServices$Params, context?: HttpContext): Observable<void> {
    return this.deleteSpecialServices$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
