const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'appointment_app',
  'root',
  'YusufgitSharp@25321453',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (err) {
    console.error('DB connection failed:', err);
  }
})();

module.exports = sequelize;