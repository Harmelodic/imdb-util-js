const mysql = require("mysql");
const config = require("./config.json");

var con = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});


con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

    con.query("DELETE FROM name_basics", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_akas", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_basics", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_crew", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_episode", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_principals", (err) => {
        if (err) throw err;
    })

    con.query("DELETE FROM title_ratings", (err) => {
        if (err) throw err;
    })
});
