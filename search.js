// This script handles the search by talking to the DB
const mysql = require("mysql");
const config = require("./config.json");

console.log("pid:" + process.pid);

function validate(boolean) {
    if (!boolean) {
        console.log("Failed argument validation! Please give arguments in the format:\n");
        console.log("node search.js <type> <search> (<optional_extra_search>)");
        process.exit(1);
    }
}

const args = process.argv.slice(2);

validate(args[0] === "title" || args[0] === "person"); // Search type must be defined

if (args[0] === "title") {
    validate(args[1] !== undefined); // Title search must be defined
    validate(args[2] === undefined || !isNaN(args[2])); // Title year must either be undefined OR a number
}
else if (args[0] === "person") {
    validate(args[1] !== undefined); // Name search must be defined
}


const con = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});

con.connect(err => {
    if (err) throw err;

    let sql = "SELECT * FROM ";

    if (args[0] === "title") {
        sql += "title_basics WHERE UPPER(primary_title) LIKE '%" + args[1].toUpperCase() + "%'";
        if (args[2] !== undefined) {
            sql += " AND start_year=" + args[2];
        }
    } else { // person
        sql += "name_basics WHERE UPPER(primary_name) LIKE '%" + args[1].toUpperCase() + "%'";
    }

    con.query(sql, (error, results) => {
        if (error) throw error;
        console.log(JSON.stringify(results, null, 4));
    })

    con.end();
})