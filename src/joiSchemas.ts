import Joi from "joi";

export const inputDataSchema = Joi.object({
  name: Joi.string().required(),
  birthdate: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    day: Joi.number(),
    hour: Joi.number(),
    minute: Joi.number(),
  }),
  gender: Joi.string().required(),
  livingcity: Joi.string().required(),
  birthcity: Joi.string().required(),
});

export const todayInputSchema = Joi.object({
  city: Joi.string().required(),
});
