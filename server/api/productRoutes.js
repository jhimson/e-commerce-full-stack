/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const express = require("express");
const asyncHandler = require("express-async-handler");
// const products = require("../data/products");

const Router = express.Router();

const Product = require("../models/productModel");

module.exports = Router;

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
Router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
Router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(`Product not found!`);
    }
  })
);
