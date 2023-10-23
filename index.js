const express = require("express");
const userRouter = require("./routes/users/UserRoute");
const postRouter = require("./routes/Posts/postRoute");
const categoryRouter = require("./routes/categories/categoryRoute");
const commentRouter = require("./routes/comments/commentsRoute");
const globalError = require("./middleware/globalError");

const app = express();
require("dotenv").config();
require("./config/dbConnect");

//Port

// middle ware

app.use(express.json());

// ROUTES
// USER ROUTE
// register Users
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/categories", categoryRouter);

app.use(globalError)
const port = process.env.PORT || 3000;

app.listen("3000", console.log(`Server started on Port ${port}`));
