/* tslint:disable */
/* eslint-disable */
import { CabinPreference } from '../models/cabin-preference';
import { CarrierPreference } from '../models/carrier-preference';
import { ClassOfServicePreference } from '../models/class-of-service-preference';
import { ConnectionPreferencesAir } from '../models/connection-preferences-air';
import { ExcludeGroundTypeEnum } from '../models/exclude-ground-type-enum';
import { ProductInclusionPreference } from '../models/product-inclusion-preference';
export interface SearchModifiersAir {
  '@type'?: string;
  CabinPreference?: Array<CabinPreference>;
  CarrierPreference?: Array<CarrierPreference>;
  ClassOfServicePreference?: Array<ClassOfServicePreference>;
  ConnectionPreferences?: Array<ConnectionPreferencesAir>;
  ProductInclusionPreference?: Array<ProductInclusionPreference>;
  excludeGround?: ExcludeGroundTypeEnum;

  /**
   * If present and true, connections that require a change of airports are not returned
   */
  prohibitChangeOfAirportInd?: boolean;
}
