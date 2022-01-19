import express, { Application } from 'express';
import helmet from 'helmet';

const app: Application = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse url encoded request body
app.use(express.urlencoded({ extended: true }));

export default app;
