import dotenv from 'dotenv';
import Joi from 'joi';
import { ENVIRONMENT } from './constants';

dotenv.config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().required(),
    // Joi is not translating to JS.
    // valid(
    //     ENVIRONMENT.DEVELOPMENT,
    //     ENVIRONMENT.PRODUCTION,
    //     ENVIRONMENT.TEST,
    //     ENVIRONMENT.PROVISION
    // )
    //.default('development'),
    PORT: Joi.number().default(3000),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
};
