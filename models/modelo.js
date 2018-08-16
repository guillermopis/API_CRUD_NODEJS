'use strict';
module.exports = (sequelize, DataTypes) => {
  var modelo = sequelize.define('modelo', {
    nombre: DataTypes.STRING,
    carnet: DataTypes.STRING,
    facultad: DataTypes.STRING,
    ciclo: DataTypes.STRING,
    evento: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    timestamps: false,
  });
  modelo.associate = function(models) {
    // associations can be defined here
  };
  return modelo;
};
