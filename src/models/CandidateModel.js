const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    subject: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
    birth: {
      type: Date,
    },
    img: {
      type: String,
    },
  },
  { versionKey: false }
);

const CandidateModel = mongoose.model("candidate", candidateSchema);
module.exports = CandidateModel;
