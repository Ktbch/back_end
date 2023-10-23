const express = require("express");

const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post Created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Posts",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post",
    });
  } catch (error) {
    res.json(error.message);
  }
});
postRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});
postRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post update",
    });
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = postRouter;
