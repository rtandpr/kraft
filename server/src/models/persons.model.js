const { Model, DataTypes } = require("sequelize");
// const { DEPARTMENT_TABLE } = require("./departments.model");

const PERSON_TABLE = "persons";

class Person extends Model {
  static config(sequelize) {
    return { 
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamps: true,
    };
  }
}

const PersonSchema = {

  id: {
        allowNull: true,
        autoIncrement: true, // Auto-incremental
        primaryKey: true, // Clave primaria
        type: DataTypes.INTEGER, // Tipo entero
      },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },


  tel: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "phone", 
  },


  email: {  
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
    validate: {
      isEmail: true,
    },
  },

  img: {
      allowNull: false,
      type: DataTypes.TEXT,
      field: "img_voucher",
    },

  userText: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "userText",
  },



};

module.exports = { Person, PersonSchema, PERSON_TABLE };