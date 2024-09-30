const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../database/config");

const Skill = sequelizeConfig.define("skills", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   name: {
      type: Sequelize.STRING
   },
   id_person: {
      type: Sequelize.INTEGER
   },
   createdAt: {
      type: Sequelize.DATE
   },
   updatedAt: {
      type: Sequelize.DATE
   },
   state: {
      type: Sequelize.TINYINT,
      default: 1
   }
});

module.exports = {
   Skill
}