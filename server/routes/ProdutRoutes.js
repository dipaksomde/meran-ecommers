const { readProducts, readProductsDetails, updateProducte, destroyProducts, deleteProduct } = require("../controllers/productController");
const router = require("./userRoutes");

router
    .get("/", readProducts)
    .get("/:productId",readProductsDetails )
    .put("/:productId", updateProducte)
    .delete("/:destroy", destroyProducts)
    .delete("/:productId", deleteProduct)

    module.exports = router
    