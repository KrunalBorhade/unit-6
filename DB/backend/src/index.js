const express = require("express");
const userController = require("./controllers/user.controller");
const brandController = require("./controllers/brand.controller");
const productController = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/brands", brandController);
app.use("/products", productController);

module.exports = app;
