let Joi = require('joi');

module.exports = {
    urlAdd: (reqObj) => {
        let schema = Joi.object().keys({
            originalUrl: Joi.string().uri().required(),
        })
        let validation = schema.validate(reqObj);
        return validation;
    },
}