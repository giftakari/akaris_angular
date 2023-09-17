/* tslint:disable */
/* eslint-disable */
export interface DisplaySequence {
  '@type'?: string;

  /**
   * Offer reference
   */
  OfferRef: string;

  /**
   * Product reference. If blank, display sequence applies to all products within the Offer.
   */
  ProductRef?: string;

  /**
   * Segment sequence, if blank, display sequence applies to all segments within the product
   */
  Sequence?: number;

  /**
   * The sequence the products are to be displayed for sequential date ordering
   */
  displaySequence: string;
}
