var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Board Home Page");
});

module.exports = router;
