/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteProduct } from '../fn/workbench-manage-products/delete-product';
import { DeleteProduct$Params } from '../fn/workbench-manage-products/delete-product';
import { getProduct } from '../fn/workbench-manage-products/get-product';
import { GetProduct$Params } from '../fn/workbench-manage-products/get-product';
import { productBuildFromCatalogProductOfferings } from '../fn/workbench-manage-products/product-build-from-catalog-product-offerings';
import { ProductBuildFromCatalogProductOfferings$Params } from '../fn/workbench-manage-products/product-build-from-catalog-product-offerings';
import { productBuildFromProducts } from '../fn/workbench-manage-products/product-build-from-products';
import { ProductBuildFromProducts$Params } from '../fn/workbench-manage-products/product-build-from-products';
import { ProductListResponseWrapper } from '../models/product-list-response-wrapper';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageProductsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productBuildFromCatalogProductOfferings()` */
  static readonly ProductBuildFromCatalogProductOfferingsPath = '/book/products/reservationworkbench/{ReservationResource_Identifier}/shoppingcart/products/buildfromcatalogproductofferings';

  /**
   * Add unpriced products to the workbench by reference to an availability.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productBuildFromCatalogProductOfferings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productBuildFromCatalogProductOfferings$Response(params: ProductBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResponseWrapper>> {
    return productBuildFromCatalogProductOfferings(this.http, this.rootUrl, params, context);
  }

  /**
   * Add unpriced products to the workbench by reference to an availability.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productBuildFromCatalogProductOfferings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productBuildFromCatalogProductOfferings(params: ProductBuildFromCatalogProductOfferings$Params, context?: HttpContext): Observable<ProductListResponseWrapper> {
    return this.productBuildFromCatalogProductOfferings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductListResponseWrapper>): ProductListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `productBuildFromProducts()` */
  static readonly ProductBuildFromProductsPath = '/book/products/reservationworkbench/{ReservationResource_Identifier}/shoppingcart/products/buildfromproducts';

  /**
   * Add unpriced products to the workbench using full payload.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productBuildFromProducts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productBuildFromProducts$Response(params: ProductBuildFromProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResponseWrapper>> {
    return productBuildFromProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * Add unpriced products to the workbench using full payload.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productBuildFromProducts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productBuildFromProducts(params: ProductBuildFromProducts$Params, context?: HttpContext): Observable<ProductListResponseWrapper> {
    return this.productBuildFromProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductListResponseWrapper>): ProductListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `getProduct()` */
  static readonly GetProductPath = '/book/products/reservationworkbench/{ReservationResource_Identifier}/Products/{id}';

  /**
   * Retrieve unpriced products.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduct$Response(params: GetProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResponseWrapper>> {
    return getProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve unpriced products.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduct(params: GetProduct$Params, context?: HttpContext): Observable<ProductListResponseWrapper> {
    return this.getProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductListResponseWrapper>): ProductListResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deleteProduct()` */
  static readonly DeleteProductPath = '/book/products/reservationworkbench/{ReservationResource_Identifier}/Products/{id}';

  /**
   * Delete unpriced products.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct$Response(params: DeleteProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete unpriced products.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct(params: DeleteProduct$Params, context?: HttpContext): Observable<void> {
    return this.deleteProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
