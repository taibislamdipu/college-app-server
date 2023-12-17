const College = require("../models/CollegeModel");

exports.allCollege = async (req, res) => {
  try {
    const colleges = await College.find({});
    res.json(colleges);
  } catch (error) {
    console.log(error);
  }
};

exports.singleCollege = async (req, res) => {
  try {
    const { slug } = req.params;
    const college = await College.findOne({ slug });
    res.json(college);
  } catch (error) {
    console.log(error);
  }
};
