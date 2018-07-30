// This script reads the .tsv files and puts them in the DB
const fs = require("fs");
const readline = require("readline");
const mysql = require("mysql");
const config = require("./config.json");

var con = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});

const nameBasicsFile = "./datasets/name.basics.tsv";
const titleAkasFile = "./datasets/title.akas.tsv";
const titleBasicsFile = "./datasets/title.basics.tsv";
const titleCrewFile = "./datasets/title.crew.tsv";
const titleEpisodeFile = "./datasets/title.episode.tsv";
const titlePrincipalsFile = "./datasets/title.principals.tsv";
const titleRatingsFile = "./datasets/title.ratings.tsv";

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

    if (fs.existsSync(nameBasicsFile)) {
        const nameBasics = readline.createInterface({
            input: fs.createReadStream(nameBasicsFile)
        });

        nameBasics.on('line', (line) => {
            const array = line.split("\t");

            if (array[0] !== "nconst") {
                const knownForTitles = array[5].split(",");

                const nameBasicData = {
                    nconst: array[0],
                    primary_name: array[1] !== "\\N" ? array[1] : null,
                    birth_year: array[2] !== "\\N" ? parseInt(array[2]) : null,
                    death_year: array[3] !== "\\N" ? parseInt(array[3]) : null,
                    primary_profession: array[4] !== "\\N" ? array[4] : null,
                    known_for_title_1: knownForTitles[0] ? knownForTitles[0] : null,
                    known_for_title_2: knownForTitles[1] ? knownForTitles[1] : null,
                    known_for_title_3: knownForTitles[2] ? knownForTitles[2] : null,
                    known_for_title_4: knownForTitles[3] ? knownForTitles[3] : null
                }

                con.query("INSERT INTO name_basics SET ?", nameBasicData, (err) => {
                    if (err) throw err;
                })
            }
        });
    }

    // if (fs.existsSync(titleAkasFile)) {
    //     const titleAkas = readline.createInterface({
    //         input: fs.createReadStream(titleAkasFile)
    //     });
    // }

    // if (fs.existsSync(titleBasicsFile)) {
    //     const titleBasics = readline.createInterface({
    //         input: fs.createReadStream(titleBasicsFile)
    //     });
    // }

    // if (fs.existsSync(titleCrewFile)) {
    //     const titleCrew = readline.createInterface({
    //         input: fs.createReadStream(titleCrewFile)
    //     });
    // }

    // if (fs.existsSync(titleEpisodeFile)) {
    //     const titleEpisode = readline.createInterface({
    //         input: fs.createReadStream(titleEpisodeFile)
    //     });
    // }

    // if (fs.existsSync(titlePrincipalsFile)) {
    //     const titlePrincipals = readline.createInterface({
    //         input: fs.createReadStream(titlePrincipalsFile)
    //     });
    // }

    // if (fs.existsSync(titleRatingsFile)) {
    //     const titleRatings = readline.createInterface({
    //         input: fs.createReadStream(titleRatingsFile)
    //     });
    // }
});
