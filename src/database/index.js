const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// Importar models
const Project = require('../models/Project')
const Tech = require('../models/Tech')

const connection = new Sequelize(dbConfig)

// Iniciar conexão com os models
Project.init(connection)
Tech.init(connection)

// Associar os relacionamentos
Project.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection