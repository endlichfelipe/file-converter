import Joi from 'joi';
import httpStatus from 'http-status';
import pick from '@api-v1/helpers/pick';
import ApiError from '@api-v1/helpers/ApiError';
import { NextFunction, Request, Response } from 'express';

const validate = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ['body', 'params', 'query']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(', ');
        return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }

    Object.assign(req, value);
    return next();
};

export default validate;
