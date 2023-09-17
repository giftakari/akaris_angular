/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BrandListResponseWrapper } from '../models/brand-list-response-wrapper';
import { createBrand } from '../fn/brand/create-brand';
import { CreateBrand$Params } from '../fn/brand/create-brand';

@Injectable({ providedIn: 'root' })
export class BrandService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createBrand()` */
  static readonly CreateBrandPath = '/brandfullinfo/brands/buildcompleteinfofromoffer';

  /**
   * Follow-on request for full brand pricing.
   *
   * The full brand pricing request is a follow-on request to air pricing that returns any additional content for the branded fares returned. All attributes associated with that branded fare are returned along with any additional details available, such as beverages, mileage accrual, etc. If brand details are not available for that market, no additional details are returned.The full brand pricing request can be sent after either an AirPrice reference payload request or an AirPrice full payload request , as long as the request sent returnBrandedFaresInd set to true to return brand attributes.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createBrand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBrand$Response(params: CreateBrand$Params, context?: HttpContext): Observable<StrictHttpResponse<BrandListResponseWrapper>> {
    return createBrand(this.http, this.rootUrl, params, context);
  }

  /**
   * Follow-on request for full brand pricing.
   *
   * The full brand pricing request is a follow-on request to air pricing that returns any additional content for the branded fares returned. All attributes associated with that branded fare are returned along with any additional details available, such as beverages, mileage accrual, etc. If brand details are not available for that market, no additional details are returned.The full brand pricing request can be sent after either an AirPrice reference payload request or an AirPrice full payload request , as long as the request sent returnBrandedFaresInd set to true to return brand attributes.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createBrand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBrand(params: CreateBrand$Params, context?: HttpContext): Observable<BrandListResponseWrapper> {
    return this.createBrand$Response(params, context).pipe(
      map((r: StrictHttpResponse<BrandListResponseWrapper>): BrandListResponseWrapper => r.body)
    );
  }

}
