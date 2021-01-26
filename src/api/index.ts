import { Router } from "express";
import { auth, club } from "./routers";

export default () => {
    const app = Router();

    app.get("/check", (req, res) => {
        res.status(200).end();
    });

    club(app);
    auth(app);

    return app;
}