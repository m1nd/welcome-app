var Sequelize = require('sequelize');

var UserMeta = require('./User');

var connection = new Sequelize('postgres://postgres:postgres@localhost:5432/auth', { operatorsAliases: true });

var User = connection.define('users', UserMeta.attributes, UserMeta.options);

module.exports.User = User;