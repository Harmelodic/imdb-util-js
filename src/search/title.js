const { find } = require("../services/title");
const { question } = require("../interfaces/std");

console.log("pid:" + process.pid);

question("Title name?: ")
    .then(title => {
        question("Year? (leave empty for any): ")
            .then(year => {
                find(title, year)
                    .then((results) => {
                        console.log(JSON.stringify(results, null, 4));
                    });
            })
    })