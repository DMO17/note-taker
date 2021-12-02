const { Router } = require("express");
const { addNewNote, getNotes } = require("../../controller/api");
const { renderHomePage, renderNotesPage } = require("../../controller/view");

const router = Router();

router.post("/notes", addNewNote);
router.get("/notes", getNotes);

module.exports = router;
