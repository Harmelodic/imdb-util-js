const { query } = require("../db");

console.log("pid: " + process.pid);

query("TRUNCATE TABLE name_basics")
    .then(() => {
        console.log("Cleared name_basics");
    })

query("TRUNCATE TABLE title_akas")
    .then(() => {
        console.log("Cleared title_akas");
    })

query("TRUNCATE TABLE title_basics")
    .then(() => {
        console.log("Cleared title_basics");
    })

query("TRUNCATE TABLE title_crew")
    .then(() => {
        console.log("Cleared title_crew");
    })

query("TRUNCATE TABLE title_episode")
    .then(() => {
        console.log("Cleared title_episode");
    })

query("TRUNCATE TABLE title_principals")
    .then(() => {
        console.log("Cleared title_principals");
    })

query("TRUNCATE TABLE title_ratings")
    .then(() => {
        console.log("Cleared title_ratings");
    })