/* tslint:disable */
/* eslint-disable */

/**
 * Specifies the ID for the membership program.
 */
export interface CustomerLoyalty {

  /**
   * The card holder name
   */
  cardHolderName?: string;

  /**
   * Customer Loyality Id
   */
  id?: string;

  /**
   * Numeric Priority Code
   */
  priority?: number;

  /**
   * Specifies an identifier to indicate the company owner of the loyalty program
   */
  programId?: string;

  /**
   * Supplier's loyalty program name such as Frontier-EarlyReturns
   */
  programName?: string;

  /**
   * The list of suppliers that the CustomerLoyalty number is shared.
   */
  shareWithSupplier?: Array<string>;

  /**
   * Supplier of a loyalty program
   */
  supplier?: string;

  /**
   * The kind of supplier of a loyalty program
   */
  supplierType?: string;

  /**
   * Customer Loyalty tier level
   */
  tier?: string;

  /**
   * Customer loyalty number has been validated by the supplier
   */
  validatedInd?: boolean;
  value?: string;
}
