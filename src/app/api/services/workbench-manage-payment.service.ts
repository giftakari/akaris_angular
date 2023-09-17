/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPayment } from '../fn/workbench-manage-payment/add-payment';
import { AddPayment$Params } from '../fn/workbench-manage-payment/add-payment';
import { addPayments } from '../fn/workbench-manage-payment/add-payments';
import { AddPayments$Params } from '../fn/workbench-manage-payment/add-payments';
import { cancelPayment } from '../fn/workbench-manage-payment/cancel-payment';
import { CancelPayment$Params } from '../fn/workbench-manage-payment/cancel-payment';
import { deletePayment } from '../fn/workbench-manage-payment/delete-payment';
import { DeletePayment$Params } from '../fn/workbench-manage-payment/delete-payment';
import { PaymentListResponseWrapper } from '../models/payment-list-response-wrapper';
import { PaymentResponseWrapper } from '../models/payment-response-wrapper';
import { updatePayment } from '../fn/workbench-manage-payment/update-payment';
import { UpdatePayment$Params } from '../fn/workbench-manage-payment/update-payment';

@Injectable({ providedIn: 'root' })
export class WorkbenchManagePaymentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePayment()` */
  static readonly UpdatePaymentPath = '/paymentoffer/reservationworkbench/{ReservationResource_Identifier}/payments';

  /**
   * Update payment.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePayment$Response(params: UpdatePayment$Params, context?: HttpContext): Observable<StrictHttpResponse<PaymentResponseWrapper>> {
    return updatePayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Update payment.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePayment(params: UpdatePayment$Params, context?: HttpContext): Observable<PaymentResponseWrapper> {
    return this.updatePayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaymentResponseWrapper>): PaymentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `addPayment()` */
  static readonly AddPaymentPath = '/paymentoffer/reservationworkbench/{ReservationResource_Identifier}/payments';

  /**
   * Add payment.
   *
   * The Add Payment step takes place in a ticketing workbench session and sends the payment. It references both the form of payment to be used for the payment and the offer to pay for.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPayment$Response(params: AddPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<PaymentResponseWrapper>> {
    return addPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Add payment.
   *
   * The Add Payment step takes place in a ticketing workbench session and sends the payment. It references both the form of payment to be used for the payment and the offer to pay for.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPayment(params: AddPayment$Params, context?: HttpContext): Observable<PaymentResponseWrapper> {
    return this.addPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaymentResponseWrapper>): PaymentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `cancelPayment()` */
  static readonly CancelPaymentPath = '/paymentoffer/reservationworkbench/{ReservationResource_Identifier}/payments/{id}';

  /**
   * Cancel a payment and void documents.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelPayment$Response(params: CancelPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<PaymentResponseWrapper>> {
    return cancelPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Cancel a payment and void documents.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelPayment(params: CancelPayment$Params, context?: HttpContext): Observable<PaymentResponseWrapper> {
    return this.cancelPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaymentResponseWrapper>): PaymentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deletePayment()` */
  static readonly DeletePaymentPath = '/paymentoffer/reservationworkbench/{ReservationResource_Identifier}/payments/{id}';

  /**
   * Delete a payment.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePayment$Response(params: DeletePayment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePayment(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a payment.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePayment(params: DeletePayment$Params, context?: HttpContext): Observable<void> {
    return this.deletePayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addPayments()` */
  static readonly AddPaymentsPath = '/paymentoffer/reservationworkbench/{ReservationResource_Identifier}/payments/list';

  /**
   * Add multiple payments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPayments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPayments$Response(params: AddPayments$Params, context?: HttpContext): Observable<StrictHttpResponse<PaymentListResponseWrapper>> {
    return addPayments(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple payments.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPayments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPayments(params: AddPayments$Params, context?: HttpContext): Observable<PaymentListResponseWrapper> {
    return this.addPayments$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaymentListResponseWrapper>): PaymentListResponseWrapper => r.body)
    );
  }

}
