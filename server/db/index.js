// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Orange = require("./oranges");
const Apple = require("./apples");
const ApplesOranges = require("./applesoranges");

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Apple.belongsToMany(Orange, { through: ApplesOranges });

Orange.belongsToMany(Apple, { through: ApplesOranges });

module.exports = {
  db,
  Orange,
  Apple,
};
