import Joi from "joi";

export const inputDataSchema = Joi.object({
  name: Joi.string().allow(""),
  birthdate: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    day: Joi.number(),
    hour: Joi.number(),
    minute: Joi.number(),
    _id: Joi.string(),
  }),
  gender: Joi.string().allow(""),
  livingcity: Joi.string().allow(""),
  birthcity: Joi.string().allow(""),
  _id: Joi.string(),
});

export const todayInputSchema = Joi.object({
  user: Joi.object(),
});

export const userInputSchema = Joi.object({
  token: Joi.string(),
  mail: Joi.string(),
  name: Joi.string(),
  livingcity: Joi.string().allow(""),
  birthcity: Joi.string().allow(""),
  _id: Joi.string(),
});
