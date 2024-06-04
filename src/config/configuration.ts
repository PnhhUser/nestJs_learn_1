export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    secret: process.env.SECRET,

    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT
});