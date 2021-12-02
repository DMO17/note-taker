const { Router } = require("express");
const { addNewNote } = require("../../controller/api");
const { renderHomePage, renderNotesPage } = require("../../controller/view");

const router = Router();

router.post("/notes", addNewNote);

module.exports = router;
