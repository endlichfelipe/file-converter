import Joi from 'joi';

export const convertFromCode = {
    body: {
        code: Joi.string().required(),
    },
};

export const convertFromFile = {
    body: {
        file: Joi.string().required(),
    },
};

export const convertFromUrl = {
    body: {
        url: Joi.string().required(),
    },
};
