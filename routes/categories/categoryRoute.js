const express = require("express");

const categoryRouter = express.Router();

categoryRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Categories Created",
    });
  } catch (error) {
    res.json(error.message);
  }
});
categoryRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Categories",
    });
  } catch (error) {
    res.json(error.message);
  }
});
categoryRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Category",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Categories Deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Categories updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = categoryRouter;
