const Sequelize = require("sequelize");
/* Using variables in .env file to connect to database */
const sequelizeConfig = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PW_DB,
  {
    host: "localhost",
    dialect: "mysql",
    timezone: "-05:00",
  },
);

module.exports = {
  sequelizeConfig,
};