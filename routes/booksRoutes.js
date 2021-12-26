const express = require("express");
const { get } = require("express/lib/response");
const router = express.Router();

const {
  getBook,
  addBook,
  getSingleBook,
  updateBook,
  removeBook,
} = require("../controls");

router.get("/", addBook);
router.get("/", getBook);
router.get("/:id", getSingleBook);
router.get("/:id", updateBook);
router.get("/:id", removeBook);

module.exports = router;
