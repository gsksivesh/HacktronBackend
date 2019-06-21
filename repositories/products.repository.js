const {Products} = require('./models');

class ProductsRepository {
  constructor() {
    this.model = Products
  }

  async getAllProducts() {
    return this.model.find({}, {_id: 0}).exec();
  }
}


module.exports = new ProductsRepository();
