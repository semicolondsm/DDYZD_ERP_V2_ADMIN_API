import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import moment from "moment-timezone";
import logger, { errorStream, infoStream } from "./config/winston";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

import { HttpError, apiNotFoundError } from "./error";
import { config } from "./config";

import route from "./api"

// DB connect
import { createConnection } from "typeorm";
import { createOptions } from "./ormconfig";

createConnection(createOptions)
.then(() => console.log("DB Connected"))
.catch((err) => {
    logger.error(`Mysql connection error: ${err}`);
    process.exit(1);
});

const app: express.Application = express();

morgan.token("date", (req, res) => {
    return moment().tz("Asia/Seoul").format();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("combined", { 
        stream: errorStream, 
        skip: (req, res) => res.statusCode < 500,
    })
)
app.use(morgan("combined", {
        stream: infoStream,
        skip: (req, res) => res.statusCode >= 500,
    })
)

app.use("/v2", route());

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

app.listen(config.ServicePort, () => {
    console.log(`server running on port ${config.ServicePort}`);
})