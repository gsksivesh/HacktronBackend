const {Products} = require('./models');

class ProductsRepository {
  constructor() {
    this.model = Products
  }

  async getAllProducts() {
    return this.model.find().exec();
  }
}


module.exports = new ProductsRepository();
