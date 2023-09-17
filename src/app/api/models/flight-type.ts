/* tslint:disable */
/* eslint-disable */
import { ConnectionTypeEnum } from '../models/connection-type-enum';
export interface FlightType {
  '@type'?: string;
  connectionType?: ConnectionTypeEnum;

  /**
   * If present and true, exclude interline connections
   */
  excludeInterlineConnectionsInd?: boolean;
}
