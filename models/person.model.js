const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../database/config");

const Person = sequelizeConfig.define("people", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   name: {
      type: Sequelize.STRING
   },
   age: {
      type: Sequelize.INTEGER
   },
   id_task: {
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
   Person
}