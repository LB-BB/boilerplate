const Sequelize = require("sequelize");
const db = require("./database");

const Apple = db.define("apple", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  origin: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  amount: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10,
    },
  },
});

module.exports = Apple;
