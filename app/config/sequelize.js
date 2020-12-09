const config = require('./config');
const Sequelize = require('sequelize');

module.exports.sequelize = function (){
  let sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    port: config.mysql.port,
    loggin: true,
    insecureAuth : true,
    dialect: "mysql", //log: console.log
    define: { 
      freezeTableName: true,
      timestamps: false
    },
    pool: {
      acquire: 300,
      idle: 100
    }
  });

  return sequelize
}