import Joi from "joi";

export default Joi.object().keys({
    supply_id: Joi.number().required()
}).unknown();