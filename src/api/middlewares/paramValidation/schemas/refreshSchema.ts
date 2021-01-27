import Joi from "joi";

export default Joi.object().keys({
    "x-refresh-token": Joi.string().required()
}).unknown();