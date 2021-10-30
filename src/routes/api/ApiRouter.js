const router = require("express").Router();
const testProductsRouter = require("./TestProductsRouter");
const productsRouter = require("./ProductsRouter");
const randomsRouter = require("./RandomsRouter");

router.use("/productos-test", testProductsRouter);
router.use("/productos", productsRouter);
router.use("/randoms", randomsRouter);

module.exports = router;
