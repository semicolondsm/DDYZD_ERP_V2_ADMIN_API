import { Router } from "express";
import ClubController from "../../controllers/club";
import tokenVerification from "../middlewares/tokenVerification";
import tryCatchHandler from "../middlewares/tryCatchHandler";
import validate, { Property } from "../middlewares/paramValidation";
import { budgetSchema, stateSchema, clubSchema, newClubSchema } from "../middlewares/paramValidation/schemas";
const route = Router();

export default (app: Router) => {
    const clubController = new ClubController();

    app.use("/club", route);

    route.post(
        "/",
        tokenVerification,
        validate({ schema: newClubSchema, property: Property.BODY }),
        tryCatchHandler(clubController.newClub)   
    );

    route.delete(
        "/:club_id",
        tokenVerification,
        validate({ schema: clubSchema, property: Property.PARAMS }),
        tryCatchHandler(clubController.deleteClub)
    );

    route.get(
        "/list",
        tryCatchHandler(clubController.clubList)
    );

    route.get(
        "/:club_id/supply/list",
        tokenVerification,
        validate({ schema: clubSchema, property: Property.PARAMS }),
        validate({ schema: stateSchema, property: Property.QUERY }),
        tryCatchHandler(clubController.clubSupplyList)
    );

    route.patch(
        "/:club_id/budget",
        tokenVerification,
        validate({ schema: clubSchema, property: Property.PARAMS }),
        validate({ schema: budgetSchema, property: Property.BODY }),
        tryCatchHandler(clubController.setBudget)
    );
}