const fs = require("fs");
const path = require("path");

const getNotesList = () => {
  // get manga data fom the db file by reading, then parse the string and re.json

  const notesJSON = fs.readFileSync(
    path.join(__dirname, "../../db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);

  return notes;
};

const writeNotesToFile = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(data)
  );
};

module.exports = { getNotesList, writeNotesToFile };
