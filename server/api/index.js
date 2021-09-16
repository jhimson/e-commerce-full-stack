const express = require("express");

const Router = express.Router();

const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

Router.use("/users", userRoutes);
Router.use("/products", productRoutes);

module.exports = Router;
