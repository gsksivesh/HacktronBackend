const bcrypt = require('bcryptjs');
const {Users} = require('./models');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

class UsersRepository {
  constructor() {
    this.model = Users
  }

  async getAllUsers() {
    return this.model.find().select('-Hash').exec();
  }

  async getByID(_id) {
    return this.model.findOne({_id}).exec();
  }

  async authenticate({Username, Password}) {
    const user = await this.model.findOne({Username});
    if (user && bcrypt.compareSync(Password, user.Hash)) {
      const {Hash, ...userWithoutHash} = user.toObject();
      const token = jwt.sign({sub: user._id}, JWT_SECRET);
      return {
        ...userWithoutHash,
        token
      };
    }
  }

  async createUser(userInfo) {
    if (await this.model.findOne({Username: userInfo.Username})) {
      throw 'Username "' + userInfo.Username + '" is already taken';
    }
    if (await this.model.findOne({Email: userInfo.Email})) {
      throw 'Email "' + userInfo.Email + '" is already registered';
    }

    // hash password
    if (userInfo.Password) {
      userInfo.Hash = bcrypt.hashSync(userInfo.Password, 10);
    }

    // save user
    await this.model.create(userInfo);
    return true;
  }
}

module.exports = new UsersRepository();
