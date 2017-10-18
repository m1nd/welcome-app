var Sequelize = require('sequelize');

var attributes = {
  // id: { autoincrement: true, primaryKey: true, type: Sequelize.INTEGER },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
};

var options = {
  freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
