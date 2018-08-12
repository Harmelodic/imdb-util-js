const mysql = require("mysql");
const config = require("./db_config.json");

let pool;

const initPool = () => {
    pool = mysql.createPool({
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        connectionLimit: 100
    })
}

process.on("beforeExit", () => {
    if (pool) pool.end();
})

exports.query = (sql) => {
    if (!pool) initPool();
    return new Promise(((resolve, reject) => {

        pool.getConnection((err, con) => {
            if (err) reject(err);

            con.query(sql, (error, results) => {
                if (error) reject(error);

                con.release();
                resolve(results);
            })
        })
    }))
}