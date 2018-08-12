const { findMini } = require("../services/title");
const { question } = require("../interfaces/std");

console.log("pid:" + process.pid);

question("Title name?: ")
    .then(title => {
        question("Year? (leave empty for any): ")
            .then(year => {
                findMini(title, year)
                    .then((results) => {
                        console.log(JSON.stringify(results, null, 4));
                        process.exit();
                    });
            })
    })