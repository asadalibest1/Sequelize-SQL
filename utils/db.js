const Sequelize = require("sequelize");

const sequelize = new Sequelize("asadmysql", "root", "1111", {
  host: "localhost",
  dialect: "mysql",
  // operatorsAliases: false,
});


sequelize.authenticate()
.then(()=> console.log('sql connected!'))
.catch( err => console.log('err'))

// module.exports = sequelize;
// global.sequelize = sequelize;