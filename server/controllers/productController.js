const Product = require("./../model/Product")

exports.addProduct = async (req, res) => {
    try {
        // const result = await Product.create(req.body)
        res.json({ message : "Product Add Success"})
    } catch (error) {
        console.log("productController => addProduct");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}
exports.readProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.json({ message : "Product Read Success", result})
    } catch (error) {
        console.log("productController => readProducts");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}
exports.readProductsDetails = async (req, res) => {
    try {
        // const result = await Product.find()
        res.json({ message : "Product Read Success"})
    } catch (error) {
        console.log("productController => readProductsDetails");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}
exports.updateProducte = async (req, res) => {
    try {
        // const result = await Product.find()
        res.json({ message : "Product Read Success"})
    } catch (error) {
        console.log("productController => updateProducte");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        // const result = await Product.find()
        res.json({ message : "Product Read Success"})
    } catch (error) {
        console.log("productController => deleteProduct");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}
exports.destroyProducts = async (req, res) => {
    try {
        // const result = await Product.find()
        res.json({ message : "Product Read Success"})
    } catch (error) {
        console.log("productController => destroyProducts");
        console.log(error);
        res.status(400).json({ message : `Error ${error}`})
    }
}