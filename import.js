// This script reads the .tsv files and puts them in the DB

// 0        1           2
// tconst	directors	writers

// 0        1           2           3           4                   5
// nconst	primaryName	birthYear	deathYear	primaryProfession	knownForTitles

const fs = require("fs");
const readline = require("readline");

const myTitleCrew = readline.createInterface({
    input: fs.createReadStream('my.title.crew.tsv')
});


let titleCrewPeople = [];

myTitleCrew.on('line', (line) => {
    let crewArray = line.split("\t");
    crew = {
        titleId: crewArray[0],
        directorsIds: crewArray[1].split(","),
        writersIds: crewArray[2].split(",")
    }

    titleCrewPeople.push(crew);
});

function findNameForId(nameId) {
    const readStream = fs.createReadStream('name.basics.tsv');
    const nameBasics = readline.createInterface({
        input: readStream
    })

    let name = "";

    nameBasics.on("line", (line) => {
        let nameArray = line.split("\t");
        person = {
            id: nameArray[0],
            name: nameArray[1]
        }

        if (person.id === nameId) {
            name = person.name;
            nameBasics.close();
            readStream.close();
        }
    })
    
    nameBasics.on("close", () => {
        return name;
    })
}

myTitleCrew.on("close", () => {
    let result = [];
    console.log(JSON.stringify(titleCrewPeople));
    titleCrewPeople.forEach(titleCrew => {
        let entry = {
            id: titleCrew.titleId,
            directors: [],
            writers: []
        }
        titleCrew.directorsIds.forEach(directorId => {
            entry.directors.push(findNameForId(directorId));
        })
        titleCrew.writersIds.forEach(writerId => {
            entry.writers.push(findNameForId(writerId));
        })

        result.push(entry);
    })

    result.forEach(entry => {
        fs.appendFileSync("someFile", entry.id + "\t" + entry.directors.join() + "\t" + entry.writers.join() + "\n");
    })
})