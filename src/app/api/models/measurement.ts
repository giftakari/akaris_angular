/* tslint:disable */
/* eslint-disable */
import { MeasurementTypeEnum } from '../models/measurement-type-enum';
import { UnitOfMeasureEnum } from '../models/unit-of-measure-enum';

/**
 * Used for dimensional units (width, height, depth) or weight
 */
export interface Measurement {
  measurementType?: MeasurementTypeEnum;
  unit?: UnitOfMeasureEnum;
  value?: number;
}
