import { config } from './config';
import { Club, Tag, ClubHasTag, Admin, Supply, User, ClubHead } from './models';
import { ConnectionOptions } from "typeorm";

export const createOptions: ConnectionOptions = {
   type: "mysql",
   host: config.dbHost,
   port: config.dbPort,
   username: config.dbUser,
   password: config.dbPassword,
   database: config.dbName,
   synchronize: config.dbSynchronize,
   logging: config.dbLogging,
   entities: [ Club, Tag, ClubHasTag, Admin, Supply, User, ClubHead ]
}