const mysql = require('mysql');

const sql = {};
let pool;

sql.close = () => {
	if (pool) pool.end();
	pool = null;
};

sql.query = (sql) => {
	return new Promise(((resolve, reject) => {
		pool.getConnection((err, con) => {
			if (err) reject(err);

			con.query(sql, (error, results) => {
				if (error) reject(error);

				con.release();
				resolve(results);
			});
		});
	}));
};

process.on('beforeExit', () => {
	sql.close();
});

module.exports = () => {
	pool = mysql.createPool({
        host: "localhost",
        port: 3306,
        database: "imdb",
        user: "root",
        password: "",
        connectionLimit: 100
    });
	return sql;
};
