import { Router } from "express";
import AuthController from "../../controllers/auth";
import validate, { Property } from "../middlewares/paramValidation";
import { loginSchema, refreshSchema } from "../middlewares/paramValidation/schemas";
import tryCatchHandler from "../middlewares/tryCatchHandler";

const route = Router();

export default (app: Router) => {
    const authController = new AuthController();

    app.use("/admin", route);

    route.post(
        "/auth",
        validate({ schema: loginSchema, property: Property.BODY }),
        tryCatchHandler(authController.login)
    );

    route.get(
        "/refresh",
        validate({ schema: refreshSchema, property: Property.HEADERS}),
        tryCatchHandler(authController.refresh)
    );
}
