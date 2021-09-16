/* eslint-disable no-underscore-dangle */
const express = require("express");
const products = require("../data/products");

const Router = express.Router();

module.exports = Router;

Router.get("/", (req, res) => {
  res.json(products);
});

Router.get("/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
