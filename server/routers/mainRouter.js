const express = require("express");

const {data} = require("../mytestdata.json")

const mainRouter = express.Router()
mainRouter.get("/", async (req, res) => {
    res.json(data)    
 });
 
mainRouter.get("/:id", async (req, res) => {
   const id = req.params.id;
   res.json(data.filter(d => d.id == id));    
 });

module.exports = mainRouter