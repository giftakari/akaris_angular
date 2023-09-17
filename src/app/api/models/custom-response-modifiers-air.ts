/* tslint:disable */
/* eslint-disable */
import { BrandAttributeInclusion } from '../models/brand-attribute-inclusion';
import { SearchRepresentationEnum } from '../models/search-representation-enum';

/**
 * Modifiers to customize the result set
 */
export interface CustomResponseModifiersAir {
  '@type'?: string;
  BrandAttributeInclusion?: Array<BrandAttributeInclusion>;
  SearchRepresentation?: SearchRepresentationEnum;

  /**
   * If true, Baggage Fees will be inhibited from the response
   */
  excludeBaggageFeesInd?: boolean;

  /**
   * If true, Penalties will be excluded from the response
   */
  excludePenaltiesInd?: boolean;

  /**
   * If true, the surcharge breakdown will be excluded from Price_Detail
   */
  excludeSurchargesInd?: boolean;

  /**
   * If true, unbundled fares will not be returned in the response
   */
  excludeUnbundledFaresInd?: boolean;

  /**
   * if true, the fare calculation string will be returned in the response
   */
  includeFareCalculationInd?: boolean;
}
