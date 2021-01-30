import Joi from "joi";

export default Joi.object().keys({
    club_name: Joi.string().min(1).max(45).required(),
    gcn: Joi.number().required()
}).unknown();