import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

import { HttpError, apiNotFoundError } from "./error";
import config from "./config";

// DB connect
import { createConnection } from "typeorm";
createConnection()
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("<h1>Hello;</h1>");
})

app.use((req: Request, res: Response, next: NextFunction) => {
    next(apiNotFoundError);
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(config.port, () => {
    console.log(`server running on port ${config.port}`);
})