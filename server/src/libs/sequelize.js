const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../models/index");


 let sequelize = new Sequelize(
  `postgresql://postgres:mPPjyBrHyZVUcGjjRCHLQisUBTXHvTKi@ballast.proxy.rlwy.net:48653/railway`,
  {
    logging: false,
    native: false,
  }
); 

setupModels(sequelize);

module.exports = sequelize;