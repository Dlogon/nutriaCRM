// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
const mainRouter = require("./routers/mainRouter")

app.use("/api", mainRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});