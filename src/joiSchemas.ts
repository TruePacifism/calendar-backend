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
  offset: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    pillar: Joi.number(),
    _id: Joi.string(),
  }),
});

export const todayInputSchema = Joi.object({
  user: Joi.object({
    _id: Joi.string(),
    id: Joi.number(),
    token: Joi.string(),
    name: Joi.string(),
    mail: Joi.string(),
    livingcity: Joi.string(),
    birthcity: Joi.string(),
    UTC: Joi.number(),
    __v: Joi.string(),
  }),
  dayOffset: Joi.number(),
});

export const collisionsFramesInputSchema = Joi.object({
  birthdate: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    day: Joi.number(),
    hour: Joi.number(),
    minute: Joi.number(),
    _id: Joi.string(),
  }),
  trueBirthdate: Joi.object({
    year: Joi.number(),
    month: Joi.number(),
    day: Joi.number(),
    hour: Joi.number(),
    minute: Joi.number(),
    _id: Joi.string(),
  }),
});

export const userInputSchema = Joi.object({
  token: Joi.string(),
  mail: Joi.string(),
  firstName: Joi.string().required(),
  secondName: Joi.string().allow(""),
  thirdName: Joi.string().allow(""),
  livingcity: Joi.string().allow(""),
  birthcity: Joi.string().allow(""),
  _id: Joi.string(),
});
