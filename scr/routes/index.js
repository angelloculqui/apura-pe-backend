const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Backend APURA.PE funcionando 🚀");
});

module.exports = router;
