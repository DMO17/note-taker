const { Router } = require("express");
const viewRoutes = require("./view/viewRoutes");

const router = Router();

router.use("/", viewRoutes);

module.exports = router;
