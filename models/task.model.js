const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../database/config");
const { Person } = require("./Person.model");
const { Skill } = require("./skill.model");

const Task = sequelizeConfig.define("tasks", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   title: {
      type: Sequelize.STRING
   },
   date_limit: {
      type: Sequelize.DATE
   },
   createdAt: {
      type: Sequelize.DATE
   },
   updatedAt: {
      type: Sequelize.DATE
   },
   status: {
      type: Sequelize.STRING,
      default: 'pending'
   },
   state: {
      type: Sequelize.TINYINT,
      default: 1
   }
});

Task.hasMany(Person, { foreignKey: 'id_task'});
Person.belongsTo(Task, { foreignKey: 'id_task'});

Person.hasMany(Skill, { foreignKey: 'id_person'});
Skill.belongsTo(Person, { foreignKey: 'id_person'});

module.exports = {
   Task
}