/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addReservationComments } from '../fn/workbench-manage-reservation-comments/add-reservation-comments';
import { AddReservationComments$Params } from '../fn/workbench-manage-reservation-comments/add-reservation-comments';
import { deleteReservationComments } from '../fn/workbench-manage-reservation-comments/delete-reservation-comments';
import { DeleteReservationComments$Params } from '../fn/workbench-manage-reservation-comments/delete-reservation-comments';
import { ReservationCommentListResponseWrapper } from '../models/reservation-comment-list-response-wrapper';
import { ReservationCommentResponseWrapper } from '../models/reservation-comment-response-wrapper';
import { updateReservationComments } from '../fn/workbench-manage-reservation-comments/update-reservation-comments';
import { UpdateReservationComments$Params } from '../fn/workbench-manage-reservation-comments/update-reservation-comments';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageReservationCommentsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addReservationComments()` */
  static readonly AddReservationCommentsPath = '/book/remarks/reservationworkbench/{ReservationResource_Identifier}/reservationcomments/list';

  /**
   * Add Reservation Comments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReservationComments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReservationComments$Response(params: AddReservationComments$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCommentListResponseWrapper>> {
    return addReservationComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Add Reservation Comments.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReservationComments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReservationComments(params: AddReservationComments$Params, context?: HttpContext): Observable<ReservationCommentListResponseWrapper> {
    return this.addReservationComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationCommentListResponseWrapper>): ReservationCommentListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateReservationComments()` */
  static readonly UpdateReservationCommentsPath = '/book/remarks/reservationworkbench/{ReservationResource_Identifier}/reservationcomments';

  /**
   * Update Reservation Comments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReservationComments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservationComments$Response(params: UpdateReservationComments$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCommentResponseWrapper>> {
    return updateReservationComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Reservation Comments.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReservationComments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservationComments(params: UpdateReservationComments$Params, context?: HttpContext): Observable<ReservationCommentResponseWrapper> {
    return this.updateReservationComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationCommentResponseWrapper>): ReservationCommentResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteReservationComments()` */
  static readonly DeleteReservationCommentsPath = '/reservationworkbench/{ReservationResource_Identifier}/reservationcomments/{id}/comments';

  /**
   * Delete Reservation Comments.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReservationComments()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservationComments$Response(params: DeleteReservationComments$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReservationComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Reservation Comments.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReservationComments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservationComments(params: DeleteReservationComments$Params, context?: HttpContext): Observable<void> {
    return this.deleteReservationComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
