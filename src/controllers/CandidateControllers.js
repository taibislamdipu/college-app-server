const CandidateModel = require("../models/CandidateModel");

exports.createCandidate = async (req, res) => {
  try {
    const data = await CandidateModel.create(req.body);

    res.status(201).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error });
  }
};
