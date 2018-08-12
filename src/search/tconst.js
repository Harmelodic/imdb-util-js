const { lookupMini } = require("../services/title");
const { question } = require("../interfaces/std");

console.log("pid:" + process.pid);

question("tconst?: ")
    .then(tconst => {
        lookupMini(tconst)
            .then((result) => {
                console.log(JSON.stringify(result, null, 4));
                process.exit();
            });
    })