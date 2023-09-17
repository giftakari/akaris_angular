/* tslint:disable */
/* eslint-disable */
import { ConnectionPreferences } from '../models/connection-preferences';
import { FlightType } from '../models/flight-type';
export type ConnectionPreferencesAir = ConnectionPreferences & {
'FlightType'?: FlightType;
};
