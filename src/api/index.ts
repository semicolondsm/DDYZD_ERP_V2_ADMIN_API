import { Router } from "express";
import { club } from "./routers";

export default () => {
    const app = Router();

    app.get("/check", (req, res) => {
        res.status(200).end();
    });

    club(app);

    return app;
}