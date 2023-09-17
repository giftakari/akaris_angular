/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPrimaryContact } from '../fn/workbench-manage-primary-contact/add-primary-contact';
import { AddPrimaryContact$Params } from '../fn/workbench-manage-primary-contact/add-primary-contact';
import { addPrimaryContacts } from '../fn/workbench-manage-primary-contact/add-primary-contacts';
import { AddPrimaryContacts$Params } from '../fn/workbench-manage-primary-contact/add-primary-contacts';
import { deletePrimaryContact } from '../fn/workbench-manage-primary-contact/delete-primary-contact';
import { DeletePrimaryContact$Params } from '../fn/workbench-manage-primary-contact/delete-primary-contact';
import { PrimaryContactListResponseWrapper } from '../models/primary-contact-list-response-wrapper';
import { PrimaryContactResponseWrapper } from '../models/primary-contact-response-wrapper';
import { updatePrimaryContact } from '../fn/workbench-manage-primary-contact/update-primary-contact';
import { UpdatePrimaryContact$Params } from '../fn/workbench-manage-primary-contact/update-primary-contact';

@Injectable({ providedIn: 'root' })
export class WorkbenchManagePrimaryContactService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePrimaryContact()` */
  static readonly UpdatePrimaryContactPath = '/book/primarycontact/reservationworkbench/{ReservationResource_Identifier}/primarycontacts';

  /**
   * Update primary contact.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePrimaryContact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePrimaryContact$Response(params: UpdatePrimaryContact$Params, context?: HttpContext): Observable<StrictHttpResponse<PrimaryContactResponseWrapper>> {
    return updatePrimaryContact(this.http, this.rootUrl, params, context);
  }

  /**
   * Update primary contact.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePrimaryContact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePrimaryContact(params: UpdatePrimaryContact$Params, context?: HttpContext): Observable<PrimaryContactResponseWrapper> {
    return this.updatePrimaryContact$Response(params, context).pipe(
      map((r: StrictHttpResponse<PrimaryContactResponseWrapper>): PrimaryContactResponseWrapper => r.body)
    );
  }

  /** Path part for operation `addPrimaryContact()` */
  static readonly AddPrimaryContactPath = '/book/primarycontact/reservationworkbench/{ReservationResource_Identifier}/primarycontacts';

  /**
   * Add a primary contact.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPrimaryContact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPrimaryContact$Response(params: AddPrimaryContact$Params, context?: HttpContext): Observable<StrictHttpResponse<PrimaryContactResponseWrapper>> {
    return addPrimaryContact(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a primary contact.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPrimaryContact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPrimaryContact(params: AddPrimaryContact$Params, context?: HttpContext): Observable<PrimaryContactResponseWrapper> {
    return this.addPrimaryContact$Response(params, context).pipe(
      map((r: StrictHttpResponse<PrimaryContactResponseWrapper>): PrimaryContactResponseWrapper => r.body)
    );
  }

  /** Path part for operation `deletePrimaryContact()` */
  static readonly DeletePrimaryContactPath = '/book/primarycontact/reservationworkbench/{ReservationResource_Identifier}/primarycontacts/{id}';

  /**
   * Delete a primary contact.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePrimaryContact()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePrimaryContact$Response(params: DeletePrimaryContact$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePrimaryContact(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a primary contact.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePrimaryContact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePrimaryContact(params: DeletePrimaryContact$Params, context?: HttpContext): Observable<void> {
    return this.deletePrimaryContact$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addPrimaryContacts()` */
  static readonly AddPrimaryContactsPath = '/book/primarycontact/reservationworkbench/{ReservationResource_Identifier}/primarycontacts/list';

  /**
   * Add multiple primary contacts.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPrimaryContacts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPrimaryContacts$Response(params: AddPrimaryContacts$Params, context?: HttpContext): Observable<StrictHttpResponse<PrimaryContactListResponseWrapper>> {
    return addPrimaryContacts(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple primary contacts.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPrimaryContacts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPrimaryContacts(params: AddPrimaryContacts$Params, context?: HttpContext): Observable<PrimaryContactListResponseWrapper> {
    return this.addPrimaryContacts$Response(params, context).pipe(
      map((r: StrictHttpResponse<PrimaryContactListResponseWrapper>): PrimaryContactListResponseWrapper => r.body)
    );
  }

}
