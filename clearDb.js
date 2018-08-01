const mysql = require("mysql");
const config = require("./config.json");

console.log("pid: " + process.pid);

const con = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});


con.connect(err => {
    if (err) throw err;
    console.log("Connected!");

    con.query("TRUNCATE TABLE name_basics", (err) => {
        if (err) throw err;
        console.log("Cleared name_basics");
    })

    con.query("TRUNCATE TABLE title_akas", (err) => {
        if (err) throw err;
        console.log("Cleared title_akas");
    })

    con.query("TRUNCATE TABLE title_basics", (err) => {
        if (err) throw err;
        console.log("Cleared title_basics");
    })

    con.query("TRUNCATE TABLE title_crew", (err) => {
        if (err) throw err;
        console.log("Cleared title_crew");
    })

    con.query("TRUNCATE TABLE title_episode", (err) => {
        if (err) throw err;
        console.log("Cleared title_episode");
    })

    con.query("TRUNCATE TABLE title_principals", (err) => {
        if (err) throw err;
        console.log("Cleared title_principals");
    })

    con.query("TRUNCATE TABLE title_ratings", (err) => {
        if (err) throw err;
        console.log("Cleared title_ratings");
    })

    con.end();
});