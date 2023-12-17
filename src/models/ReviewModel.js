const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { versionKey: false }
);

const ReviewModel = mongoose.model("review", reviewSchema);
module.exports = ReviewModel;
