const express = require("express");
const path = require("path");
// const routes = require("./routes");

const PORT = 4000;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

//middleware

// app.use(routes);

app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
