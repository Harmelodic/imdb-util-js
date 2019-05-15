const { findMini } = require("../services/title");
const { std } = require("@harmelodic/interfaces");

console.log("pid:" + process.pid);

std.prompt("Title name?: ")
    .then(title => {
        std.prompt("Year? (leave empty for any): ")
            .then(year => {
                findMini(title, year)
                    .then((results) => {
                        console.log(JSON.stringify(results, null, 4));
                        process.exit();
                    });
            })
    })