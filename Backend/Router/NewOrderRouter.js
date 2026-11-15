const {OrdersModel}  = require("../model/OrdersModel");
const { model } = require("mongoose");

const router = require("express").Router();
router.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved!");
});
module.exports=router;