import ApiError from '@api-v1/helpers/ApiError';
import { errorConverter, errorHandler } from 'api/middlewares/error';
import express, { Application } from 'express';
import helmet from 'helmet';
import httpStatus from 'http-status';

const app: Application = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse url encoded request body
app.use(express.urlencoded({ extended: true }));

// send back a 404 error for any unknown api request
app.use((req, res, next) =>
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
