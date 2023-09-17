/* tslint:disable */
/* eslint-disable */
import { Confirmation } from '../models/confirmation';
import { Receipt } from '../models/receipt';
export type ReceiptConfirmation = Receipt & {
'Confirmation'?: Confirmation;

/**
 * The segmentSequenceList the ReceiptConfirmation applies to
 */
'SegmentSequenceList'?: Array<number>;
};
