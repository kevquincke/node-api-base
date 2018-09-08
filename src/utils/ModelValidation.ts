import * as _ from 'lodash';
import { ValidationError } from 'class-validator';

export interface IModelValidation {
  [key: string]: object[];
}

export const getValidationErrors = (validationErrors: ValidationError[]): string => {
  const errors: IModelValidation = {};

  _.forEach(validationErrors, (error: ValidationError) => {
    const allErrors: string[] = [];

    _.forEach(error.constraints, (constraint: string) => {
      allErrors.push(constraint);
    });

    (errors as any)[error.property] = allErrors;
  });

  return JSON.stringify(errors);
};
