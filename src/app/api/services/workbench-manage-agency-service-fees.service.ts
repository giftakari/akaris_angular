/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAgencyServiceFee } from '../fn/workbench-manage-agency-service-fees/add-agency-service-fee';
import { AddAgencyServiceFee$Params } from '../fn/workbench-manage-agency-service-fees/add-agency-service-fee';
import { AgencyServiceFeeResponseWrapper } from '../models/agency-service-fee-response-wrapper';
import { deleteAgencyServiceFee } from '../fn/workbench-manage-agency-service-fees/delete-agency-service-fee';
import { DeleteAgencyServiceFee$Params } from '../fn/workbench-manage-agency-service-fees/delete-agency-service-fee';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageAgencyServiceFeesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addAgencyServiceFee()` */
  static readonly AddAgencyServiceFeePath = '/book/reservationworkbench/{ReservationResource_Identifier}/agencyservicefees';

  /**
   * Add Agency ServiceFee.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAgencyServiceFee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAgencyServiceFee$Response(params: AddAgencyServiceFee$Params, context?: HttpContext): Observable<StrictHttpResponse<AgencyServiceFeeResponseWrapper>> {
    return addAgencyServiceFee(this.http, this.rootUrl, params, context);
  }

  /**
   * Add Agency ServiceFee.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAgencyServiceFee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAgencyServiceFee(params: AddAgencyServiceFee$Params, context?: HttpContext): Observable<AgencyServiceFeeResponseWrapper> {
    return this.addAgencyServiceFee$Response(params, context).pipe(
      map((r: StrictHttpResponse<AgencyServiceFeeResponseWrapper>): AgencyServiceFeeResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteAgencyServiceFee()` */
  static readonly DeleteAgencyServiceFeePath = '/book/reservationworkbench/{ReservationResource_Identifier}/agencyservicefees/{id}';

  /**
   * AgencyServiceFee - Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAgencyServiceFee()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgencyServiceFee$Response(params: DeleteAgencyServiceFee$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAgencyServiceFee(this.http, this.rootUrl, params, context);
  }

  /**
   * AgencyServiceFee - Delete.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAgencyServiceFee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgencyServiceFee(params: DeleteAgencyServiceFee$Params, context?: HttpContext): Observable<void> {
    return this.deleteAgencyServiceFee$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
