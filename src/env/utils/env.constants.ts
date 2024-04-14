import * as Joi from 'joi';

export const ENV_VALIDATION_SCHEMA = Joi.object({
  DB_USERNAME: Joi.required(),
  DB_PASSWORD: Joi.required(),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.number().required(),
  DB_DATABASE: Joi.required(),

  DATASOURCE_URL: Joi.required(),
});
