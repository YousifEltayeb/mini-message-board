const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
