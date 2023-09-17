/* tslint:disable */
/* eslint-disable */
import { NextStepMethodEnum } from '../models/next-step-method-enum';

/**
 * A URL that describes a step that can be applied to the resource containing the next step structure.
 */
export interface NextStep {

  /**
   * The action this next step is intended to achieve
   */
  action: string;

  /**
   * Additional clarification for the next step
   */
  description?: string;

  /**
   * Identifier for the Next Step
   */
  id?: string;
  method: NextStepMethodEnum;
  value?: string;
}
