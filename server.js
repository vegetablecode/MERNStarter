const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Connect to MongoDB (Local database)
mongoose
  .connect("mongodb://localhost/mytestapp", { useNewUrlParser: true });

// Connect to MongoDB (MongoDB Atlas)
// const db = config.get("mongoURI");
// mongoose
//   .connect(db, { useNewUrlParser: true, useCreateIndex: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));

// Usr routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  // Hide errors in production mode
  const error = process.env.NODE_ENV === "development" ? err : {};
  const status = err.status || 500;

  // Show errors in development mode
  res.status(status).json({
    msg: error.message
  });
});

// "Catchall" handler
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../dist/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
