import { Router } from "express";
import { auth, club, supply, tag } from "./routers";

export default () => {
    const app = Router();

    app.get("/check", (req, res) => {
        res.status(200).end();
    });

    club(app);
    auth(app);
    supply(app);
    tag(app);

    return app;
}