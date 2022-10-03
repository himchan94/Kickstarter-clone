const express = require("express");
const router = express.Router();

const {
  getProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectControllers");

router.route("/").get(getProjects).post(createProject);
router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);

module.exports = router;
