const CollegeModel = require("../models/collegeModel");

exports.allCollege = async (req, res) => {
  try {
    const colleges = await CollegeModel.find({});
    res.json(colleges);
  } catch (error) {
    console.log(error);
  }
};

exports.singleCollege = async (req, res) => {
  try {
    const { slug } = req.params;
    const college = await CollegeModel.findOne({ slug });
    res.json(college);
  } catch (error) {
    console.log(error);
  }
};
