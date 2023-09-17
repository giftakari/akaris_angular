/* tslint:disable */
/* eslint-disable */
import { NextStep } from '../models/next-step';
export interface NextSteps {
  NextStep: Array<NextStep>;

  /**
   * The base portion of the uri in order to shorten the uri's in the individual steps
   */
  baseURI: string;

  /**
   * Optional internally referenced id
   */
  id?: string;
}
