/* tslint:disable */
/* eslint-disable */

/**
 * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
 */
export interface Identifier {

  /**
   * Name of the authoritative system that created this Guid
   */
  authority?: string;
  value?: string;
}
