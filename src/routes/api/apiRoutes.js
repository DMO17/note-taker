const { Router } = require("express");
const { addNewNote, getNotes, deleteNote } = require("../../controller/api");
const { renderHomePage, renderNotesPage } = require("../../controller/view");

const router = Router();

router.post("/notes", addNewNote);

router.get("/notes", getNotes);

router.get("/notes/:id", deleteNote);

module.exports = router;
