/* tslint:disable */
/* eslint-disable */
import { FareSelection } from '../models/fare-selection';
export type FareSelectionDetail = FareSelection & {

/**
 * Airline code
 */
'validatingCarrier'?: string;

/**
 * If present and true, fares with minimum stays will not be returned
 */
'prohibitMinStayFaresInd'?: boolean;

/**
 * If present and true, fares with maximum stays will not be returned
 */
'prohibitMaxStayFaresInd'?: boolean;

/**
 * This field is deprecated. Use RefundOptions for refunadability options
 */
'refundableOnlyInd'?: boolean;

/**
 * If present and true, fares with advance purchase requirements will not be returned
 */
'prohibitAdvancePurchaseFaresInd'?: boolean;
'prohibitUnbundledFaresInd'?: boolean;

/**
 * This field is deprecated. Use RefundOptions for refunadability options
 */
'prohibitRefundableFaresInd'?: boolean;
};
