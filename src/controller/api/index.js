const {
  getNotesList,
  validKeys,
  writeNotesToFile,
} = require("../../utility/util");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // get notes data fom the db file by reading, then parse the string and then res.json

  const notesList = getNotesList();

  res.json(notesList);
};

const addNewNote = (req, res) => {
  const payLoad = req.body;

  const isValid = validKeys.every((each) => {
    return Object.keys(payLoad).includes(each);
  });

  if (isValid) {
    // create the notes database body object
    const newNote = { id: uuidv4(), ...payLoad };

    //get notes list
    const notesList = getNotesList();

    //check if that note exists in the database
    const doesNotExist = notesList.every((each) => {
      return each.id != newNote.id;
    });

    if (doesNotExist) {
      // push the new notes body object to the notes db
      notesList.push(newNote);

      writeNotesToFile(notesList);

      return res.send(newNote);
    }
  } else
    return res.send({
      message: `This note (${newNote.id}) already excits`,
    });
};

module.exports = { addNewNote, getNotes };

//   if (!payload.note) {
//     return res
//       .status(400)
//       .send({ error: `This note (${payload.note}) cannot be found` });
//   }
