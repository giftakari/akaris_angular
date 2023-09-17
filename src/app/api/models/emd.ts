/* tslint:disable */
/* eslint-disable */
import { AgencyInfo } from '../models/agency-info';
import { Emdid } from '../models/emdid';
import { EmdSegment } from '../models/emd-segment';
import { FormOfPayment } from '../models/form-of-payment';
import { PersonName } from '../models/person-name';
import { SupplierLocator } from '../models/supplier-locator';
import { TicketNumber } from '../models/ticket-number';
import { TotalAmount } from '../models/total-amount';
export type Emd = Emdid & {
'PersonName': PersonName;
'ReservationLocator'?: Array<SupplierLocator>;
'AgencyInfo': AgencyInfo;
'EMDSegment': Array<EmdSegment>;
'TotalAmount'?: TotalAmount;
'FormOfPayment': FormOfPayment;

/**
 * The BSP ESAC code assign for a void or refund transaction\nThe BSP E
 */
'ESAC'?: string;
'AssociatedTicketNumber'?: TicketNumber;
'Restrictions'?: Array<string>;
};
