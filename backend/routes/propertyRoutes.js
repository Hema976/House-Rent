const express = require("express");
const router = express.Router();

const {
  getAllProperties,
  addProperty,
} = require("../controllers/propertyController");

router.get("/", getAllProperties);
router.post("/", addProperty);

module.exports = router;
