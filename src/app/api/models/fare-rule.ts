/* tslint:disable */
/* eslint-disable */
import { FareRuleId } from '../models/fare-rule-id';
import { FlightId } from '../models/flight-id';
export type FareRule = FareRuleId & {

/**
 * The rule number of fare rule
 */
'ruleNumber'?: string;

/**
 * Fare rule tarrif number
 */
'tariffNumber'?: string;
'Flight': Array<FlightId>;
};
