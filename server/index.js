// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    setTimeout(() => res.json({ message: "Hello from server!" }), 5000);    
    
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});