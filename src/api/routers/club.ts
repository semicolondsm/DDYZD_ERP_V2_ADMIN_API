import { Router } from "express";
import ClubController from "../../controllers/club";
import tryCatchHandler from "../middlewares/tryCatchHandler";
const route = Router();

export default (app: Router) => {
    const clubController = new ClubController();

    app.use("/club", route);

    route.get("/list", tryCatchHandler(clubController.clubList));
    route.patch("/:club_id/budget", tryCatchHandler(clubController.setBudget));
}