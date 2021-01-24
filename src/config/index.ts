export default {
    port: Number(process.env.PORT),
    mysql: {
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
        dbUser: process.env.DB_USER,
        dbPass: process.env.DB_PASS,
        dbName: process.env.DB_NAME,
    },
    jwtSecret: process.env.JWT_SECRET
}