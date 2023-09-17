/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createDocumentOverrides } from '../fn/workbench-manage-document-overrides/create-document-overrides';
import { CreateDocumentOverrides$Params } from '../fn/workbench-manage-document-overrides/create-document-overrides';
import { deleteDocumentOverrides } from '../fn/workbench-manage-document-overrides/delete-document-overrides';
import { DeleteDocumentOverrides$Params } from '../fn/workbench-manage-document-overrides/delete-document-overrides';
import { DocumentOverridesResponseWrapper } from '../models/document-overrides-response-wrapper';
import { updateDocumentOverrides } from '../fn/workbench-manage-document-overrides/update-document-overrides';
import { UpdateDocumentOverrides$Params } from '../fn/workbench-manage-document-overrides/update-document-overrides';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageDocumentOverridesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createDocumentOverrides()` */
  static readonly CreateDocumentOverridesPath = '/book/documentoverride/Reservation/{ReservationResource_Identifier}/documentoverrides';

  /**
   * Add document override remark.
   *
   * Use document override to send remarks such as tour code, commission, or endorsements/restrictions.Document override remarks are returned in the PNR retrieve only when the detailViewInd query parameter is set to true. Document override remarks can be added to an existing PNR but cannot be modified or deleted; see PNR Modify Guide.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDocumentOverrides()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDocumentOverrides$Response(params: CreateDocumentOverrides$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentOverridesResponseWrapper>> {
    return createDocumentOverrides(this.http, this.rootUrl, params, context);
  }

  /**
   * Add document override remark.
   *
   * Use document override to send remarks such as tour code, commission, or endorsements/restrictions.Document override remarks are returned in the PNR retrieve only when the detailViewInd query parameter is set to true. Document override remarks can be added to an existing PNR but cannot be modified or deleted; see PNR Modify Guide.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createDocumentOverrides$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDocumentOverrides(params: CreateDocumentOverrides$Params, context?: HttpContext): Observable<DocumentOverridesResponseWrapper> {
    return this.createDocumentOverrides$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentOverridesResponseWrapper>): DocumentOverridesResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateDocumentOverrides()` */
  static readonly UpdateDocumentOverridesPath = '/book/documentoverride/Reservation/{ReservationResource_Identifier}/documentoverrides/{id}';

  /**
   * Update document overrides.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDocumentOverrides()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocumentOverrides$Response(params: UpdateDocumentOverrides$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentOverridesResponseWrapper>> {
    return updateDocumentOverrides(this.http, this.rootUrl, params, context);
  }

  /**
   * Update document overrides.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDocumentOverrides$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocumentOverrides(params: UpdateDocumentOverrides$Params, context?: HttpContext): Observable<DocumentOverridesResponseWrapper> {
    return this.updateDocumentOverrides$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentOverridesResponseWrapper>): DocumentOverridesResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteDocumentOverrides()` */
  static readonly DeleteDocumentOverridesPath = '/book/documentoverride/Reservation/{ReservationResource_Identifier}/documentoverrides/{id}';

  /**
   * Delete document overrides.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDocumentOverrides()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocumentOverrides$Response(params: DeleteDocumentOverrides$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteDocumentOverrides(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete document overrides.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDocumentOverrides$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocumentOverrides(params: DeleteDocumentOverrides$Params, context?: HttpContext): Observable<void> {
    return this.deleteDocumentOverrides$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
