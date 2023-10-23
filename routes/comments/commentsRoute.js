const express = require("express");

const commentRouter = express.Router();

commentRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post Created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Comments",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Comment",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Comments Deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Comments updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = commentRouter;
