const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    marks: { type: Number, required: true },
    fees: { type: Number, required: true },
    location: { type: String, required: true },
    courses: [{ type: String }],
    accreditation: { type: String },
    facilities: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const College = mongoose.model("College", collegeSchema);

module.exports = College;
