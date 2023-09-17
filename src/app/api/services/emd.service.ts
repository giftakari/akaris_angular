/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { emdGetByLocator } from '../fn/emd/emd-get-by-locator';
import { EmdGetByLocator$Params } from '../fn/emd/emd-get-by-locator';
import { EmdListResponseWrapper } from '../models/emd-list-response-wrapper';
import { getEmd } from '../fn/emd/get-emd';
import { GetEmd$Params } from '../fn/emd/get-emd';
import { updateEmd } from '../fn/emd/update-emd';
import { UpdateEmd$Params } from '../fn/emd/update-emd';

@Injectable({ providedIn: 'root' })
export class EmdService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEmd()` */
  static readonly GetEmdPath = '/emds/{Identifier}';

  /**
   * Retrieve an EMD.
   *
   * Display an EMD to retrieve EMD details such as the amount paid and agency ticketing information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmd()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmd$Response(params: GetEmd$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
    return getEmd(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve an EMD.
   *
   * Display an EMD to retrieve EMD details such as the amount paid and agency ticketing information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEmd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmd(params: GetEmd$Params, context?: HttpContext): Observable<EmdListResponseWrapper> {
    return this.getEmd$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmdListResponseWrapper>): EmdListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `updateEmd()` */
  static readonly UpdateEmdPath = '/emds/{Identifier}';

  /**
   * Void an EMD.
   *
   * Void an EMD to cancel it. You can also use EMD void with GDS Exchange Ticketing API to refund an EMD back to the FOP.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmd()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmd$Response(params: UpdateEmd$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
    return updateEmd(this.http, this.rootUrl, params, context);
  }

  /**
   * Void an EMD.
   *
   * Void an EMD to cancel it. You can also use EMD void with GDS Exchange Ticketing API to refund an EMD back to the FOP.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEmd$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmd(params: UpdateEmd$Params, context?: HttpContext): Observable<EmdListResponseWrapper> {
    return this.updateEmd$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmdListResponseWrapper>): EmdListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `emdGetByLocator()` */
  static readonly EmdGetByLocatorPath = '/emds/getbylocator';

  /**
   * Retrieve EMD by locator.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emdGetByLocator()` instead.
   *
   * This method doesn't expect any request body.
   */
  emdGetByLocator$Response(params: EmdGetByLocator$Params, context?: HttpContext): Observable<StrictHttpResponse<EmdListResponseWrapper>> {
    return emdGetByLocator(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve EMD by locator.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emdGetByLocator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  emdGetByLocator(params: EmdGetByLocator$Params, context?: HttpContext): Observable<EmdListResponseWrapper> {
    return this.emdGetByLocator$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmdListResponseWrapper>): EmdListResponseWrapper => r.body)
    );
  }

}
