const { query } = require("../db");

console.log("pid: " + process.pid);

const tables = [
  "name_basics",
  "title_akas",
  "title_basics",
  "title_crew",
  "title_episode",
  "title_principals",
  "title_ratings"
]

const promises = []

tables.forEach(table => {
  promises.push(
    query(`DROP TABLE ${table}`)
      .then(() => {
          console.log(`Cleared ${table}`);
      })
      .catch((err) => {
          if (err.sqlMessage.includes("Unknown table")) {
            console.log(`Table '${table}' already dropped`)
          }
          else {
            console.log(err);
          }
      })
  )
})

Promise.all(promises).then(() => {
  process.exit()
});