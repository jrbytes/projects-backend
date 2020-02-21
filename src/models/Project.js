const { Model, DataTypes } = require('sequelize')

class Project extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      dirname: DataTypes.STRING,
      repository: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Tech, 
    { 
      foreignKey: 'project_id',
      through: 'project_techs',
      as: 'techs'
    })
  }
}

module.exports = Project