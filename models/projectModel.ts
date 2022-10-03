const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

// "mongoose.models.Project" check Project model exists if not
// create project "model mongoose.model("Project", projectSchema)"
