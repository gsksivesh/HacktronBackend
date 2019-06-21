const express = require('express');
const router = express.Router();
const {UsersRepository} = require('../repositories');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.json(await UsersRepository.getAllUsers());
});


router.post('/authenticate', async function (req, res, next) {
  const user = await UsersRepository.authenticate(req.body);
  if (user) {
    res.json(user)
  } else {
    res.status(401).json({message: 'Username or password is incorrect'});
  }
});

router.post('/register', async function (req, res, next) {
  if (await UsersRepository.createUser(req.body)) {
    res.json({Status: true, message: 'Created Successfully'});
  }
});

router.get('/current', async function (req, res, next) {
  res.json(await UsersRepository.getByID(req.user.sub));
});

router.get('/:_id', async function (req, res, next) {
  res.json(await UsersRepository.getByID(req.params._id));
});

module.exports = router;
