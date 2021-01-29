import Joi from "joi";

export default Joi.object().keys({
    club_id: Joi.number().required()
}).unknown();