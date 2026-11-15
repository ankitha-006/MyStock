const  {PositionsModel}  = require("../model/PositionsModel");
const { model } = require("mongoose");
const router = require("express").Router();
router.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
module.exports=router;