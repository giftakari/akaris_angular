/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCorporateCode } from '../fn/workbench-manage-travel-agency-corporate-code/add-corporate-code';
import { AddCorporateCode$Params } from '../fn/workbench-manage-travel-agency-corporate-code/add-corporate-code';
import { deleteCorporateCode } from '../fn/workbench-manage-travel-agency-corporate-code/delete-corporate-code';
import { DeleteCorporateCode$Params } from '../fn/workbench-manage-travel-agency-corporate-code/delete-corporate-code';
import { TravelAgencyResponse } from '../models/travel-agency-response';
import { updateCorporateCode } from '../fn/workbench-manage-travel-agency-corporate-code/update-corporate-code';
import { UpdateCorporateCode$Params } from '../fn/workbench-manage-travel-agency-corporate-code/update-corporate-code';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageTravelAgencyCorporateCodeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addCorporateCode()` */
  static readonly AddCorporateCodePath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/addcorporatecode';

  /**
   * Add Corporate Code.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCorporateCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCorporateCode$Response(params: AddCorporateCode$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelAgencyResponse>> {
    return addCorporateCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Add Corporate Code.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCorporateCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCorporateCode(params: AddCorporateCode$Params, context?: HttpContext): Observable<TravelAgencyResponse> {
    return this.addCorporateCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelAgencyResponse>): TravelAgencyResponse => r.body)
    );
  }

  /** Path part for operation `updateCorporateCode()` */
  static readonly UpdateCorporateCodePath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/{id}/updatecorporatecode';

  /**
   * Update Corporate Code.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCorporateCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCorporateCode$Response(params: UpdateCorporateCode$Params, context?: HttpContext): Observable<StrictHttpResponse<TravelAgencyResponse>> {
    return updateCorporateCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Corporate Code.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCorporateCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCorporateCode(params: UpdateCorporateCode$Params, context?: HttpContext): Observable<TravelAgencyResponse> {
    return this.updateCorporateCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<TravelAgencyResponse>): TravelAgencyResponse => r.body)
    );
  }

  /** Path part for operation `deleteCorporateCode()` */
  static readonly DeleteCorporateCodePath = '/reservationworkbench/{ReservationResource_Identifier}/travelagency/{id}/deletecorporatecode';

  /**
   * Delete Corporate Code.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCorporateCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCorporateCode$Response(params: DeleteCorporateCode$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCorporateCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Corporate Code.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCorporateCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCorporateCode(params: DeleteCorporateCode$Params, context?: HttpContext): Observable<void> {
    return this.deleteCorporateCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
