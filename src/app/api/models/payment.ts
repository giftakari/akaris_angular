/* tslint:disable */
/* eslint-disable */
import { AgencyServiceFeeIdentifier } from '../models/agency-service-fee-identifier';
import { CurrencyAmount } from '../models/currency-amount';
import { ExtendedPayment } from '../models/extended-payment';
import { Fees } from '../models/fees';
import { FormOfPaymentIdentifier } from '../models/form-of-payment-identifier';
import { OfferIdentifier } from '../models/offer-identifier';
import { PaymentId } from '../models/payment-id';
import { Taxes } from '../models/taxes';
import { TravelerIdentifierRef } from '../models/traveler-identifier-ref';
export type Payment = PaymentId & {
'Amount': CurrencyAmount;
'FormOfPaymentIdentifier'?: FormOfPaymentIdentifier;
'OfferIdentifier'?: Array<OfferIdentifier>;
'Fees'?: Fees;
'Taxes'?: Taxes;
'TravelerIdentifierRef'?: Array<TravelerIdentifierRef>;
'BaseAmount'?: CurrencyAmount;

/**
 * If true, the payment is a deposit on the referenced Offer
 */
'depositInd'?: boolean;
'ExtendedPayment'?: ExtendedPayment;
'AgencyServiceFeeIdentifier'?: Array<AgencyServiceFeeIdentifier>;

/**
 * If true, the payment is a guarantee for the referenced Offer
 */
'guaranteeInd'?: boolean;
};
