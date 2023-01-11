import Product from '../models/productModel.js';
import ProductStat from '../models/productStatModel.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithStat = await Promise.all(
      products.map(async (product) => {
        const stat = ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
