const express = require("express");
const {
  allCollege,
  singleCollege,
} = require("../controllers/CollegeControllers");
const { createReview } = require("../controllers/ReviewControllers");
const { createCandidate } = require("../controllers/CandidateControllers");

const router = express.Router();

router.get("/getColleges", allCollege);
router.get("/college/:id", singleCollege);
router.post("/createReview", createReview);
router.post("/createCandidate", createCandidate);

module.exports = router;
