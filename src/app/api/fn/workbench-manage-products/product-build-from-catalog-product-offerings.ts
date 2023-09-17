/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductListResponseWrapper } from '../../models/product-list-response-wrapper';
import { ProductQueryBuildFromCatalogProductOfferings } from '../../models/product-query-build-from-catalog-product-offerings';

export interface ProductBuildFromCatalogProductOfferings$Params {

/**
 * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
 */
  ReservationResource_Identifier: string;

/**
 * Travelport Plus Session ID used to maintain an established agency session
 */
  TravelportPlusSessionID?: string;

/**
 * Identifier used to correlate API invocations across long-running or multi-call business flows.
 */
  TraceId?: string;

/**
 * Identifies the Travelport access group with which the caller is associated
 */
  XAUTH_TRAVELPORT_ACCESSGROUP?: string;
      body: ProductQueryBuildFromCatalogProductOfferings
}

export function productBuildFromCatalogProductOfferings(http: HttpClient, rootUrl: string, params: ProductBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, productBuildFromCatalogProductOfferings.PATH, 'post');
  if (params) {
    rb.path('ReservationResource_Identifier', params.ReservationResource_Identifier, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductListResponseWrapper>;
    })
  );
}

productBuildFromCatalogProductOfferings.PATH = '/book/products/reservationworkbench/{ReservationResource_Identifier}/shoppingcart/products/buildfromcatalogproductofferings';
