import * as _ from 'lodash';
import { ValidationError } from 'class-validator';

export interface ModelValidation {
    [key: string]: Array<Object>
}

export const getValidationErrors = (validationErrors: Array<ValidationError>): String => {
    const errors: ModelValidation = {};

    _.forEach(validationErrors, (error: ValidationError) => {
        const allErrors: Array<String> = [];

        _.forEach(error.constraints, (constraint: string) => {
            allErrors.push(constraint);
        });

        errors[error.property] = allErrors;
    });

    return JSON.stringify(errors);
};
