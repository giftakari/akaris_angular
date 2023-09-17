/* tslint:disable */
/* eslint-disable */
import { ChangeFeeCollectionMethod } from '../models/change-fee-collection-method';
import { Commissions } from '../models/commissions';
import { DestinationPurpose } from '../models/destination-purpose';
import { DocumentOverridesId } from '../models/document-overrides-id';
import { NetRemitInfo } from '../models/net-remit-info';
import { OfferIdentifier } from '../models/offer-identifier';
import { ProductIdentifier } from '../models/product-identifier';
import { Restrictions } from '../models/restrictions';
import { TourCodes } from '../models/tour-codes';
export type DocumentOverrides = DocumentOverridesId & {
'OfferIdentifier'?: OfferIdentifier;
'ProductIdentifier'?: ProductIdentifier;
'Commissions'?: Array<Commissions>;
'DestinationPurpose'?: Array<DestinationPurpose>;
'Restrictions'?: Array<Restrictions>;
'TourCodes'?: Array<TourCodes>;
'ChangeFeeCollectionMethod'?: ChangeFeeCollectionMethod;
'NetRemitInfo'?: NetRemitInfo;
};
