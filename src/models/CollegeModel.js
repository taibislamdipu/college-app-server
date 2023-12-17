const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    rating: {
      type: Number,
    },
    admissionDate: {
      type: Date,
      default: new Date(),
    },
    research: {
      type: Number,
    },
    address: {
      type: String,
    },
    events: {
      type: String,
    },
    sports: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    review: {
      type: String,
    },
  },
  { versionKey: false }
);

const collegeModel = mongoose.model("college", collegeSchema);
module.exports = collegeModel;
