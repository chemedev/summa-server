'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id'
        }
      },
      designerTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DesignerTypes',
          key: 'id'
        }
      },
      programmingLanguageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProgrammingLanguages',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Employee',
      paranoid: true
    }
  )
  return Employee
}
