import config from './src/config';
import { Club, Tag, ClubHasTag, Admin, Supply, User } from './src/models';

export = {
    type: "mysql",
    host: config.mysql.dbHost,
    port: Number(config.mysql.dbPort),
    username: config.mysql.dbUser,
    password: config.mysql.dbPass,
    database: config.mysql.dbName,
    synchronize: true,
    entities: [Club, Tag, ClubHasTag, Admin, Supply, User]
} 