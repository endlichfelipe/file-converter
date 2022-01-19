import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: Joi.number().default(3000),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({
        errors: { label: 'key' },
    })
    .validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
};
