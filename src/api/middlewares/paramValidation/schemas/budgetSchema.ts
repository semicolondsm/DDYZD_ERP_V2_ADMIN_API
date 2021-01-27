import Joi from "joi";

export default Joi.object().keys({
    budget: Joi.number().required()
}).unknown();