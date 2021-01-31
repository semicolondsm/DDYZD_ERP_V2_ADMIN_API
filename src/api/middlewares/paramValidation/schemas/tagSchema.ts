import Joi from "joi";

export default Joi.object().keys({
    tags: Joi.array().items(
        Joi.number().required()
    )
}).unknown();