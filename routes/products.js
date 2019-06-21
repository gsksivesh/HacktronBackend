const express = require('express');
const router = express.Router();
const {ProductsRepository} = require('../repositories');

router.get('/', async function (req, res, next) {
  res.json(await ProductsRepository.getAllProducts());
});

module.exports = router;
