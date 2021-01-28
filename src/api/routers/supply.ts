import { Router } from "express";
import SupplyController from "../../controllers/supply";
import tokenVerification from "../middlewares/tokenVerification";
import tryCatchHandler from "../middlewares/tryCatchHandler";
import validate, { Property } from "../middlewares/paramValidation";
import { supplySchema } from "../middlewares/paramValidation/schemas";
const route = Router();

export default (app: Router) => {
    const supplyController = new SupplyController();

    app.use("/supply", route);

    route.patch(
        "/:supply_id/accept",
        tokenVerification, 
        validate({ schema: supplySchema, property: Property.PARAMS }),
        tryCatchHandler(supplyController.supplyAccept)
    );

    route.patch(
        "/:supply_id/deny",
        tokenVerification,
        validate({ schema: supplySchema, property: Property.PARAMS }),
        tryCatchHandler(supplyController.supplyDeny)
    );

    route.get(
        "/:supply_id/invoice",
        tokenVerification,
        validate({ schema: supplySchema, property: Property.PARAMS }),
        tryCatchHandler(supplyController.supplyInvoice)
    );

}