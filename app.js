const express = require("express");
const app = express();
const bookRoutes = require("./api/books.routes");
app.use(express.json());

const connectDB = require("./database");
connectDB();

app.use("/api", bookRoutes);
app.listen(8000, () => {
  console.log("Works fine");
});
