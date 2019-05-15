const { lookupMini } = require("../services/title");
const { std } = require("@harmelodic/interfaces");

console.log("pid:" + process.pid);

std.prompt("tconst?: ")
    .then(tconst => {
        lookupMini(tconst)
            .then((result) => {
                console.log(JSON.stringify(result, null, 4));
                process.exit();
            });
    })