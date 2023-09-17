/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccountingResponseWrapper } from '../models/accounting-response-wrapper';
import { createAccounting } from '../fn/workbench-manage-accounting-remarks/create-accounting';
import { CreateAccounting$Params } from '../fn/workbench-manage-accounting-remarks/create-accounting';
import { deleteAccounting } from '../fn/workbench-manage-accounting-remarks/delete-accounting';
import { DeleteAccounting$Params } from '../fn/workbench-manage-accounting-remarks/delete-accounting';
import { updateAccounting } from '../fn/workbench-manage-accounting-remarks/update-accounting';
import { UpdateAccounting$Params } from '../fn/workbench-manage-accounting-remarks/update-accounting';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageAccountingRemarksService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateAccounting()` */
  static readonly UpdateAccountingPath = '/book/accounting/reservationworkbench/{ReservationResource_Identifier}/accountings';

  /**
   * Update accounting remarks.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAccounting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccounting$Response(params: UpdateAccounting$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountingResponseWrapper>> {
    return updateAccounting(this.http, this.rootUrl, params, context);
  }

  /**
   * Update accounting remarks.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAccounting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccounting(params: UpdateAccounting$Params, context?: HttpContext): Observable<AccountingResponseWrapper> {
    return this.updateAccounting$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountingResponseWrapper>): AccountingResponseWrapper => r.body)
    );
  }

  /** Path part for operation `createAccounting()` */
  static readonly CreateAccountingPath = '/book/accounting/reservationworkbench/{ReservationResource_Identifier}/accountings';

  /**
   * Add accounting remarks.
   *
   * Accounting remarks are optional remarks that are added to the PNR and typically used by an agency's back office system in some way. The remarks can include ticket numbers, customer or account numbers, fares offered to the customer but refused, and canned remarks that document fare rules. Accounting remarks replace the back office accounting remarks in AirReservation prior to version 11.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAccounting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAccounting$Response(params: CreateAccounting$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountingResponseWrapper>> {
    return createAccounting(this.http, this.rootUrl, params, context);
  }

  /**
   * Add accounting remarks.
   *
   * Accounting remarks are optional remarks that are added to the PNR and typically used by an agency's back office system in some way. The remarks can include ticket numbers, customer or account numbers, fares offered to the customer but refused, and canned remarks that document fare rules. Accounting remarks replace the back office accounting remarks in AirReservation prior to version 11.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAccounting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAccounting(params: CreateAccounting$Params, context?: HttpContext): Observable<AccountingResponseWrapper> {
    return this.createAccounting$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountingResponseWrapper>): AccountingResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteAccounting()` */
  static readonly DeleteAccountingPath = '/book/reservationworkbench/{ReservationResource_Identifier}/accountings/{id}/namevaluepairs';

  /**
   * Delete accounting remarks.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAccounting()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccounting$Response(params: DeleteAccounting$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAccounting(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete accounting remarks.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAccounting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccounting(params: DeleteAccounting$Params, context?: HttpContext): Observable<void> {
    return this.deleteAccounting$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
