import { Request, Response, Router } from "express";
import ClubController from "../../controllers/club";
const route = Router();

export default (app: Router) => {
    const clubController = new ClubController();

    app.use("/club", route);

    route.get("/list", clubController.clubList);
}