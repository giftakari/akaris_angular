/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addFormOfPayment } from '../fn/workbench-manage-form-of-payment/add-form-of-payment';
import { AddFormOfPayment$Params } from '../fn/workbench-manage-form-of-payment/add-form-of-payment';
import { addFormOfPayments } from '../fn/workbench-manage-form-of-payment/add-form-of-payments';
import { AddFormOfPayments$Params } from '../fn/workbench-manage-form-of-payment/add-form-of-payments';
import { deleteFormOfPayment } from '../fn/workbench-manage-form-of-payment/delete-form-of-payment';
import { DeleteFormOfPayment$Params } from '../fn/workbench-manage-form-of-payment/delete-form-of-payment';
import { FormOfPaymentListResponseWrapper } from '../models/form-of-payment-list-response-wrapper';
import { FormOfPaymentResponseWrapper } from '../models/form-of-payment-response-wrapper';
import { updateFormOfPayment } from '../fn/workbench-manage-form-of-payment/update-form-of-payment';
import { UpdateFormOfPayment$Params } from '../fn/workbench-manage-form-of-payment/update-form-of-payment';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageFormOfPaymentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addFormOfPayment()` */
  static readonly AddFormOfPaymentPath = '/payment/reservationworkbench/{ReservationResource_Identifier}/formofpayment';

  /**
   * Add form of payment.
   *
   * You can send an Add Form of Payment (FOP) request in either a booking or ticketing workbench session. FOPs of cash and credit are supported. FOPs of agent invoice and non-standard credit card are supported for GDS only.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addFormOfPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addFormOfPayment$Response(params: AddFormOfPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<FormOfPaymentResponseWrapper>> {
    return addFormOfPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Add form of payment.
   *
   * You can send an Add Form of Payment (FOP) request in either a booking or ticketing workbench session. FOPs of cash and credit are supported. FOPs of agent invoice and non-standard credit card are supported for GDS only.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addFormOfPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addFormOfPayment(params: AddFormOfPayment$Params, context?: HttpContext): Observable<FormOfPaymentResponseWrapper> {
    return this.addFormOfPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormOfPaymentResponseWrapper>): FormOfPaymentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `addFormOfPayments()` */
  static readonly AddFormOfPaymentsPath = '/payment/reservationworkbench/{ReservationResource_Identifier}/formofpayments/list';

  /**
   * Add multiple form of payments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addFormOfPayments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addFormOfPayments$Response(params: AddFormOfPayments$Params, context?: HttpContext): Observable<StrictHttpResponse<FormOfPaymentListResponseWrapper>> {
    return addFormOfPayments(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple form of payments.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addFormOfPayments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addFormOfPayments(params: AddFormOfPayments$Params, context?: HttpContext): Observable<FormOfPaymentListResponseWrapper> {
    return this.addFormOfPayments$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormOfPaymentListResponseWrapper>): FormOfPaymentListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateFormOfPayment()` */
  static readonly UpdateFormOfPaymentPath = '/payment/reservationworkbench/{ReservationResource_Identifier}/formofpayment/{Identifier}';

  /**
   * Update form of payments.
   *
   * Update a Form Of Payment with new information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFormOfPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFormOfPayment$Response(params: UpdateFormOfPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<FormOfPaymentResponseWrapper>> {
    return updateFormOfPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Update form of payments.
   *
   * Update a Form Of Payment with new information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFormOfPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFormOfPayment(params: UpdateFormOfPayment$Params, context?: HttpContext): Observable<FormOfPaymentResponseWrapper> {
    return this.updateFormOfPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormOfPaymentResponseWrapper>): FormOfPaymentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteFormOfPayment()` */
  static readonly DeleteFormOfPaymentPath = '/payment/reservationworkbench/{ReservationResource_Identifier}/formofpayment/{Identifier}';

  /**
   * Delete form of payment.
   *
   * Delete a Form Of Payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFormOfPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFormOfPayment$Response(params: DeleteFormOfPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteFormOfPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete form of payment.
   *
   * Delete a Form Of Payment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFormOfPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFormOfPayment(params: DeleteFormOfPayment$Params, context?: HttpContext): Observable<void> {
    return this.deleteFormOfPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
