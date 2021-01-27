import { Router } from "express";
import { auth, club, supply } from "./routers";

export default () => {
    const app = Router();

    app.get("/check", (req, res) => {
        res.status(200).end();
    });

    club(app);
    auth(app);
    supply(app);

    return app;
}