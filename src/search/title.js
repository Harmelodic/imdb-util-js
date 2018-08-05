const { query } = require("../db_query");

console.log("pid:" + process.pid);

function validate(boolean) {
    if (!boolean) {
        console.log("Failed argument validation! Please give arguments in the format:\n");
        console.log("node search.js <search> (<optional_extra_search>)");
        process.exit(1);
    }
}

const args = process.argv.slice(2);

validate(args[0] !== undefined); // Title search must be defined
validate(args[1] === undefined || !isNaN(args[1])); // Title year must either be undefined OR a number

let titleSQL =
    "SELECT " +
    "tb.tconst," +
    "tb.title_type," +
    "tb.primary_title," +
    "tb.original_title," +
    "tb.is_adult," +
    "tb.start_year," +
    "tb.end_year," +
    "tb.runtime_minutes," +
    "tb.genres," +
    "tc.directors," +
    "tc.writers," +
    "te.parent_tconst," +
    "te.season_number," +
    "te.episode_number," +
    "tr.average_rating," +
    "tr.num_votes " +
    "FROM title_basics AS tb " +
    "LEFT JOIN title_crew AS tc " +
    "ON tb.tconst = tc.tconst " +
    "LEFT JOIN title_episode AS te " +
    "ON tb.tconst = te.tconst " +
    "LEFT JOIN title_ratings AS tr " +
    "ON tb.tconst = tr.tconst " +
    "WHERE " +
    "UPPER(tb.primary_title) LIKE '%" + args[0].toUpperCase() + "%'";

if (args[1] !== undefined) {
    titleSQL += " AND start_year=" + args[1];
}

query(titleSQL)
    .then(titleResults => {
        return new Promise((resolve, reject) => {
            // titleResults.forEach(title => {
    
            //     query("SELECT ordering, nconst, category, job, characters FROM title_principals WHERE tconst='" + title.tconst + "'")
            //         .then(principalsResults => {
            //             title.principals = principalsResults.map(principal => {
            //                 query("SELECT primary_name, birth_year, death_year, primary_profession FROM name_basics WHERE nconst='" + principal.nconst + "'")
            //                     .then(nameResults => {
            //                         principal.details = nameResults[0];
            //                         return principal;
            //                     })
            //             });
    
            //         });
    
            //     title.directors = title.directors && title.directors.split(",").map(director => {
            //         query("SELECT primary_name, birth_year, death_year, primary_profession FROM name_basics WHERE nconst='" + director + "'")
            //             .then(nameResults => {
            //                 director = nameResults[0];
            //                 return director;
            //             })
            //     });
    
            //     title.writers = title.writers && title.writers.split(",").map(writer => {
            //         query("SELECT primary_name, birth_year, death_year, primary_profession FROM name_basics WHERE nconst='" + writer + "'")
            //             .then(nameResults => {
            //                 writer = nameResults[0];
            //                 return writer;
            //             })
            //     });;
            // });

            resolve(titleResults);
        })
    })
    .then((results) => {
        console.log(results);
    });
