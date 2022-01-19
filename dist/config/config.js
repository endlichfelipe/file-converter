"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const joi_1 = __importDefault(require("joi"));
dotenv_1.default.config();
const envVarsSchema = joi_1.default.object({
    NODE_ENV: joi_1.default.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: joi_1.default.number().default(3000),
}).unknown();
const { value: envVars, error } = envVarsSchema
    .prefs({
    errors: { label: 'key' },
})
    .validate(process.env);
if (error)
    throw new Error(`Config validation error: ${error.message}`);
exports.default = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
};
