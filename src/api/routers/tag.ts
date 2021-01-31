import { Router } from "express";
import TagController from "../../controllers/tag";
import tokenVerification from "../middlewares/tokenVerification";
import validate, { Property } from "../middlewares/paramValidation";
import { clubSchema, tagSchema } from "../middlewares/paramValidation/schemas";
import tryCatchHandler from "../middlewares/tryCatchHandler";
const route = Router();

export default (app: Router) => {
    const tagController = new TagController();

    app.use("/tag", route);

    route.post(
        "/:club_id",
        tokenVerification,
        validate({ schema: clubSchema, property: Property.PARAMS }),
        validate({ schema: tagSchema, property: Property.BODY }),
        tryCatchHandler(tagController.createTag)
    );
}