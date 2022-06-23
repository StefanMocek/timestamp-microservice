const express = require('express');
const router = express.Router()
const {nowaData, wyswietlacz} = require("../controllers/datesContr")

router.get("/", nowaData)
  
router.get("/:date", wyswietlacz)

module.exports = router