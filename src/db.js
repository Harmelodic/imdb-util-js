const { sql } = require("@harmelodic/interfaces");
const config = require("./db_config.json");

const db = {};

sql.open(config);

db.query = query => {
    return sql.query(query)
}

db.close = () => {
    sql.close();
}

module.exports = db;