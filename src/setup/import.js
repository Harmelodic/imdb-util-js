// This script reads the .tsv files and puts them in the DB
const fs = require("fs");
const path = require("path");
const { query } = require("../interfaces/db");

console.log("pid: " + process.pid);

const dataSets = [
    {
        file: "name.basics.tsv",
        table: "name_basics"
    },
    {
        file: "title.akas.tsv",
        table: "title_akas"
    },
    {
        file: "title.basics.tsv",
        table: "title_basics"
    },
    {
        file: "title.crew.tsv",
        table: "title_crew"
    },
    {
        file: "title.episode.tsv",
        table: "title_episode"
    },
    {
        file: "title.principals.tsv",
        table: "title_principals"
    },
    {
        file: "title.ratings.tsv",
        table: "title_ratings"
    }
]

function loadDataFromFileIntoTable(file, table) {

    if (fs.existsSync(file)) {
        console.log("Loading data into: " + table);
        const startTime = Date.now();
        query("LOAD DATA LOCAL INFILE '" + file + "' REPLACE INTO TABLE " + table + " IGNORE 1 lines;")
            .then(() => {
                const endtime = Date.now();
                console.log("Finished loading data into: " + table + ". Time taken: " + (endtime - startTime) + "ms");
            })
    } else {
        console.log("File not found! - " + file);
    }
}

dataSets.forEach(dataset => {
    loadDataFromFileIntoTable(path.normalize(__dirname + "/../../datasets/" + dataset.file), dataset.table);
})