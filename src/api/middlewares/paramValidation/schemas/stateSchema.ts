import Joi from "joi";

export default Joi.object().keys({
    state: Joi.number().integer().min(0).max(2).required()
}).unknown();