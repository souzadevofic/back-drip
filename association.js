import Product from "./models/Product.js";
import ImgProduct from "./models/ImgProducts.js";
import Categories from "./models/Categories.js";
import ProdCategory from "./models/ProdCategory.js";

// Definindo as associações
//Associação entre tabelas de imagem do produto e produto
Product.hasMany(ImgProduct, { foreignKey: 'product_id', as: 'images' });
ImgProduct.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

//Associação entre tabelas de produtos e categoria
Product.hasMany(ProdCategory, { foreignKey: 'product_id', as: 'tipeproduct' });
ProdCategory.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

Categories.hasMany(ProdCategory, { foreignKey: 'category_id', as: 'tipecategory' });
ProdCategory.belongsTo(Product, { foreignKey: 'product_id', as: 'category' });


