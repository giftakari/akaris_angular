/* tslint:disable */
/* eslint-disable */
import { SpecialService } from '../models/special-service';

/**
 * supports sending a list of SpecialService objects
 */
export interface SpecialServiceListRequest {
  SpecialService: Array<SpecialService>;
}
