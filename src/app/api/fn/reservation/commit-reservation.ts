/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationQueryCommitReservation } from '../../models/reservation-query-commit-reservation';
import { ReservationResponseWrapper } from '../../models/reservation-response-wrapper';

export interface CommitReservation$Params {

/**
 * Acts as a retention segment to hold the reservation open past the last date of travel purge date. Sending a new autoDeleteDate at commit step will update the existing autoDeleteDate. Sending 000/00/00 will delete an existing autoDeleteDate.
 */
  autoDeleteDate?: string;

/**
 * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
 */
  Identifier: string;

/**
 * Indicates the type of issuance that should be performed at commit. (Ticket, BackOffice (MIR\/TAIR))
 */
  Issuance?: 'Ticket' | 'BackOffice' | 'All' | 'Invoice';

/**
 * Indicates of the value of the document should be refunded or retained following a CancelOffer action
 */
  DocumentValue?: 'Retain' | 'Refund' | 'Forfeit';

/**
 * If true, the Reservation will be fulfilled at a later date
 */
  payLaterInd?: boolean;

/**
 * Identifier used to correlate API invocations across long-running or multi-call business flows.
 */
  TraceId?: string;

/**
 * Identifies the Travelport access group with which the caller is associated
 */
  XAUTH_TRAVELPORT_ACCESSGROUP?: string;

/**
 * Travelport Plus Session ID used to maintain an established agency session
 */
  TravelportPlusSessionID?: string;
      body?: ReservationQueryCommitReservation
}

export function commitReservation(http: HttpClient, rootUrl: string, params: CommitReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponseWrapper>> {
  const rb = new RequestBuilder(rootUrl, commitReservation.PATH, 'post');
  if (params) {
    rb.query('autoDeleteDate', params.autoDeleteDate, {"style":"form","explode":true});
    rb.path('Identifier', params.Identifier, {"style":"simple","explode":false});
    rb.query('Issuance', params.Issuance, {"style":"form","explode":true});
    rb.query('DocumentValue', params.DocumentValue, {"style":"form","explode":true});
    rb.query('payLaterInd', params.payLaterInd, {"style":"form","explode":true});
    rb.header('TraceId', params.TraceId, {"style":"simple","explode":false});
    rb.header('XAUTH_TRAVELPORT_ACCESSGROUP', params.XAUTH_TRAVELPORT_ACCESSGROUP, {"style":"simple","explode":false});
    rb.header('TravelportPlusSessionID', params.TravelportPlusSessionID, {"style":"simple","explode":false});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReservationResponseWrapper>;
    })
  );
}

commitReservation.PATH = '/book/reservation/reservations/{Identifier}';
