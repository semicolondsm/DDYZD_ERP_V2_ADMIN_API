import fs from "fs";
import * as winston from "winston";

const logDir = __dirname + "/../logs";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const consoleTransport = new winston.transports.Console({
    format: winston.format.printf(
        (info) => `[${info.level.toUpperCase()}] - ${info.message}`
    ),
    level: "debug",
})

const fileTransport = new winston.transports.File({
    filename: "ddyzd.log",
    zippedArchive: false,
    format: winston.format.printf(
        (info) => `[${info.level.toUpperCase()}] - ${info.message}`
    ),
    dirname: logDir,
    level: "info",
})

winston.add(consoleTransport);
if(process.env.NODE_ENV !== "test") {
    winston.add(fileTransport);
}

export const errorStream = {
    write: (message: string) => winston.error(message.trim()),
}

export const infoStream = {
    write: (message: string) => winston.info(message.trim()),
}

export default winston;