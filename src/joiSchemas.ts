import Joi from "joi";

export const inputDataSchema = Joi.object({
  name: Joi.string().allow(""),
  birthdate: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    day: Joi.number(),
    hour: Joi.number(),
    minute: Joi.number(),
  }),
  gender: Joi.string().allow(""),
  livingcity: Joi.string().allow(""),
  birthcity: Joi.string().allow(""),
});

export const todayInputSchema = Joi.object({
  city: Joi.string().required(),
});

export const userInputSchema = Joi.object({
  token: Joi.string(),
  mail: Joi.string(),
  name: Joi.string(),
});
