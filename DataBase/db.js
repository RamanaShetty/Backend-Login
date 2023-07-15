const {Pool} = require("pg")

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgresql",
    database: "logindb",
    port: 5432
})

module.exports = pool