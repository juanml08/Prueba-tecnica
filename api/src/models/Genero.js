const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "genero",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: false }
  );
};
