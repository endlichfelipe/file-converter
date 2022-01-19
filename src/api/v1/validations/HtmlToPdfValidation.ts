import Joi from 'joi';

export const fromCode = {
    body: {
        code: Joi.string().required(),
    },
};

export const fromUrl = {
    body: {
        url: Joi.string().required(),
    },
};
