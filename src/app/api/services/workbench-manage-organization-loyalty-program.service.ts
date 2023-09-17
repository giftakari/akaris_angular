/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addOrganizationLoyaltyProgram } from '../fn/workbench-manage-organization-loyalty-program/add-organization-loyalty-program';
import { AddOrganizationLoyaltyProgram$Params } from '../fn/workbench-manage-organization-loyalty-program/add-organization-loyalty-program';
import { addOrganizationLoyaltyPrograms } from '../fn/workbench-manage-organization-loyalty-program/add-organization-loyalty-programs';
import { AddOrganizationLoyaltyPrograms$Params } from '../fn/workbench-manage-organization-loyalty-program/add-organization-loyalty-programs';
import { deleteOrganizationLoyaltyProgram } from '../fn/workbench-manage-organization-loyalty-program/delete-organization-loyalty-program';
import { DeleteOrganizationLoyaltyProgram$Params } from '../fn/workbench-manage-organization-loyalty-program/delete-organization-loyalty-program';
import { OrganizationLoyaltyProgramListResponse } from '../models/organization-loyalty-program-list-response';
import { OrganizationLoyaltyProgramResponse } from '../models/organization-loyalty-program-response';

@Injectable({ providedIn: 'root' })
export class WorkbenchManageOrganizationLoyaltyProgramService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `deleteOrganizationLoyaltyProgram()` */
  static readonly DeleteOrganizationLoyaltyProgramPath = '/book/reservationworkbench/{ReservationResource_Identifier}/OrganizationLoyaltyPrograms/{id}';

  /**
   * Delete an Organization Loyalty Program.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrganizationLoyaltyProgram()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrganizationLoyaltyProgram$Response(params: DeleteOrganizationLoyaltyProgram$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOrganizationLoyaltyProgram(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete an Organization Loyalty Program.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrganizationLoyaltyProgram$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrganizationLoyaltyProgram(params: DeleteOrganizationLoyaltyProgram$Params, context?: HttpContext): Observable<void> {
    return this.deleteOrganizationLoyaltyProgram$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addOrganizationLoyaltyPrograms()` */
  static readonly AddOrganizationLoyaltyProgramsPath = '/book/reservationworkbench/{ReservationResource_Identifier}/organizationloyaltyprograms/list';

  /**
   * Add multiple Organization Loyalty Program.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOrganizationLoyaltyPrograms()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOrganizationLoyaltyPrograms$Response(params: AddOrganizationLoyaltyPrograms$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationLoyaltyProgramListResponse>> {
    return addOrganizationLoyaltyPrograms(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple Organization Loyalty Program.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOrganizationLoyaltyPrograms$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOrganizationLoyaltyPrograms(params: AddOrganizationLoyaltyPrograms$Params, context?: HttpContext): Observable<OrganizationLoyaltyProgramListResponse> {
    return this.addOrganizationLoyaltyPrograms$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationLoyaltyProgramListResponse>): OrganizationLoyaltyProgramListResponse => r.body)
    );
  }

  /** Path part for operation `addOrganizationLoyaltyProgram()` */
  static readonly AddOrganizationLoyaltyProgramPath = '/book/reservationworkbench/{ReservationResource_Identifier}/organizationloyaltyprograms';

  /**
   * Add an Organization Loyalty Program.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOrganizationLoyaltyProgram()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOrganizationLoyaltyProgram$Response(params: AddOrganizationLoyaltyProgram$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationLoyaltyProgramResponse>> {
    return addOrganizationLoyaltyProgram(this.http, this.rootUrl, params, context);
  }

  /**
   * Add an Organization Loyalty Program.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOrganizationLoyaltyProgram$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOrganizationLoyaltyProgram(params: AddOrganizationLoyaltyProgram$Params, context?: HttpContext): Observable<OrganizationLoyaltyProgramResponse> {
    return this.addOrganizationLoyaltyProgram$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationLoyaltyProgramResponse>): OrganizationLoyaltyProgramResponse => r.body)
    );
  }

}
