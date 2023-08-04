const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "libro",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      autor: {
        type: DataTypes.STRING,
      },
      anio_publicacion: {
        type: DataTypes.INTEGER,
      },
      genero_id: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: false }
  );
};
