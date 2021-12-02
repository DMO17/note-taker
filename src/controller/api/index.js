const { getNotesList } = require("../../utility/util");

const getNotes = (req, res) => {
  // get notes data fom the db file by reading, then parse the string and then res.json

  const notesList = getNotesList();

  res.json(notesList);
};

const addNewNote = (req, res) => {
  res.send("dfg");
};

module.exports = { addNewNote, getNotes };
