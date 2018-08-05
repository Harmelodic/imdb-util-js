const mysql = require("mysql");
const config = require("./db_config.json");

exports.query = (sql) => {
    return new Promise(((resolve, reject) => {
        const con = mysql.createConnection({
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password
        });

        con.connect(err => {
            if (err) reject(err);

            con.query(sql, (error, results) => {
                if (error) reject(error);
    
                con.end();
                resolve(results);
            })
        })
    }))
}