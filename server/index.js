// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
const {data} = require("./mytestdata.json");

app.get("/", async (req, res) => {
   res.json(data)    
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.json(data.filter(d => d.id == id));    
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});