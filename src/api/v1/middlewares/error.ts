import httpStatus from 'http-status';
import config from '@config/config';
import logger from '@config/Logger';
import ApiError from '@api-v1/helpers/ApiError';
import { NextFunction, Request, Response } from 'express';
import { ENVIRONMENT } from '@config/constants';

export const errorConverter = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let error: Error = err;

    if (!(error instanceof ApiError)) {
        const statusCode =
            (error as any).statusCode || httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode, message as any, false, err.stack);
    }
    next(error);
};

export const errorHandler = (
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let { statusCode, message } = err;

    if (config.env === ENVIRONMENT.PRODUCTION && !err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[statusCode].toString();
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(config.env === ENVIRONMENT.DEVELOPMENT && { stack: err.stack }),
    };

    if (config.env === ENVIRONMENT.DEVELOPMENT) {
        logger.error(response);
    }

    res.status(statusCode).json(response);
};
