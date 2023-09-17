/* tslint:disable */
/* eslint-disable */
export interface TravelerUpdatedItem {
  '@type': string;

  /**
   * A unique GUID to identify the TravelerUpdatedItem
   */
  TravelerUpdatableItemID?: string;

  /**
   * If true the TravelerUpdatedItem is being added to the Traveler
   */
  addInd?: boolean;

  /**
   * If true the TravelerUpdatedItem is being deleted from the Traveler
   */
  deleteInd?: boolean;

  /**
   * If true the TravelerUpdatedItem is being modified in the Traveler
   */
  modifyInd?: boolean;
}
