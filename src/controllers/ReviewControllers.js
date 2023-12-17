const ReviewModel = require("../models/ReviewModel");

exports.createReview = async (req, res) => {
  try {
    const data = await ReviewModel.create(req.body);

    res.status(201).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error });
  }
};
