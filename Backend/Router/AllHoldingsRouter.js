const {HoldingsModel}  = require("../model/HoldingsModel");
const { model } = require("mongoose");
const router = require("express").Router();
router.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
module.exports=router;