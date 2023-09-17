/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { buildReceiptsFromLocator } from '../fn/reservation-receipt/build-receipts-from-locator';
import { BuildReceiptsFromLocator$Params } from '../fn/reservation-receipt/build-receipts-from-locator';
import { buildReceiptsFromPayment } from '../fn/reservation-receipt/build-receipts-from-payment';
import { BuildReceiptsFromPayment$Params } from '../fn/reservation-receipt/build-receipts-from-payment';
import { cancelReservation } from '../fn/reservation-receipt/cancel-reservation';
import { CancelReservation$Params } from '../fn/reservation-receipt/cancel-reservation';
import { getReceipts } from '../fn/reservation-receipt/get-receipts';
import { GetReceipts$Params } from '../fn/reservation-receipt/get-receipts';
import { ReceiptListResponseWrapper } from '../models/receipt-list-response-wrapper';

@Injectable({ providedIn: 'root' })
export class ReservationReceiptService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getReceipts()` */
  static readonly GetReceiptsPath = '/receipt/reservations/{ReservationResource_Identifier}/receipts';

  /**
   * ReceiptResource - Get.
   *
   * Get a list of ticket receipts for a reservation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReceipts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReceipts$Response(params: GetReceipts$Params, context?: HttpContext): Observable<StrictHttpResponse<ReceiptListResponseWrapper>> {
    return getReceipts(this.http, this.rootUrl, params, context);
  }

  /**
   * ReceiptResource - Get.
   *
   * Get a list of ticket receipts for a reservation.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReceipts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReceipts(params: GetReceipts$Params, context?: HttpContext): Observable<ReceiptListResponseWrapper> {
    return this.getReceipts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReceiptListResponseWrapper>): ReceiptListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `cancelReservation()` */
  static readonly CancelReservationPath = '/receipt/reservations/{ReservationResource_Identifier}/receipts';

  /**
   * ReceiptResource - CancelReservation.
   *
   * Create a set of offer cancelation receipts for every offer in the reservation.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelReservation$Response(params: CancelReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReceiptListResponseWrapper>> {
    return cancelReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * ReceiptResource - CancelReservation.
   *
   * Create a set of offer cancelation receipts for every offer in the reservation.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelReservation(params: CancelReservation$Params, context?: HttpContext): Observable<ReceiptListResponseWrapper> {
    return this.cancelReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReceiptListResponseWrapper>): ReceiptListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildReceiptsFromLocator()` */
  static readonly BuildReceiptsFromLocatorPath = '/receipt/reservations/{ReservationResource_Identifier}/receipts/buildfromlocator';

  /**
   * ReceiptResource - BuildFromLocator.
   *
   * Process all unprocessesed offers and create ticket receipts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildReceiptsFromLocator()` instead.
   *
   * This method doesn't expect any request body.
   */
  buildReceiptsFromLocator$Response(params: BuildReceiptsFromLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<ReceiptListResponseWrapper>> {
    return buildReceiptsFromLocator(this.http, this.rootUrl, params, context);
  }

  /**
   * ReceiptResource - BuildFromLocator.
   *
   * Process all unprocessesed offers and create ticket receipts.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildReceiptsFromLocator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buildReceiptsFromLocator(params: BuildReceiptsFromLocator$Params, context?: HttpContext): Observable<ReceiptListResponseWrapper> {
    return this.buildReceiptsFromLocator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReceiptListResponseWrapper>): ReceiptListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `buildReceiptsFromPayment()` */
  static readonly BuildReceiptsFromPaymentPath = '/receipt/reservations/{ReservationResource_Identifier}/receipts/buildfrompayment';

  /**
   * ReceiptResource - BuildFromPayment.
   *
   * Process all un-processesed payments and create a list of payment receipts.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buildReceiptsFromPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildReceiptsFromPayment$Response(params: BuildReceiptsFromPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<ReceiptListResponseWrapper>> {
    return buildReceiptsFromPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * ReceiptResource - BuildFromPayment.
   *
   * Process all un-processesed payments and create a list of payment receipts.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buildReceiptsFromPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buildReceiptsFromPayment(params: BuildReceiptsFromPayment$Params, context?: HttpContext): Observable<ReceiptListResponseWrapper> {
    return this.buildReceiptsFromPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReceiptListResponseWrapper>): ReceiptListResponseWrapper => r.body)
    );
  }

}
