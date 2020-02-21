const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'techs'
    })
  }

  static associate(models) {
    this.belongsToMany(models.Project, 
    { 
      foreignKey: 'tech_id',
      through: 'project_techs',
      as: 'project'
    })
  }
}

module.exports = Tech