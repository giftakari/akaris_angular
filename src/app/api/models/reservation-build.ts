/* tslint:disable */
/* eslint-disable */
import { AccountingId } from '../models/accounting-id';
import { DocumentOverridesId } from '../models/document-overrides-id';
import { FormOfPaymentId } from '../models/form-of-payment-id';
import { PaymentId } from '../models/payment-id';
import { PreferenceId } from '../models/preference-id';
import { PrimaryContactId } from '../models/primary-contact-id';
import { ReceiptConfirmation } from '../models/receipt-confirmation';
import { ReservationCommentId } from '../models/reservation-comment-id';
import { SpecialServiceId } from '../models/special-service-id';
import { TravelAgency } from '../models/travel-agency';
import { TravelerId } from '../models/traveler-id';
export interface ReservationBuild {
  '@type': string;
  Accounting?: AccountingId;
  DocumentOverrides?: Array<DocumentOverridesId>;
  FormOfPayment?: Array<FormOfPaymentId>;
  Payment?: Array<PaymentId>;
  Preference?: Array<PreferenceId>;
  PrimaryContact?: Array<PrimaryContactId>;
  ReceiptConfirmation?: ReceiptConfirmation;
  ReservationComment?: Array<ReservationCommentId>;
  SpecialService?: Array<SpecialServiceId>;
  TravelAgency?: TravelAgency;
  Traveler: Array<TravelerId>;
}
