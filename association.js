import Product from "./models/Product.js";
import ImgProduct from "./models/ImgProducts.js";

// Definindo as associações
Product.hasMany(ImgProduct, { foreignKey: 'product_id', as: 'images' });
ImgProduct.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });