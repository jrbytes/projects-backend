const express = require('express')

//Importar controllers
const ProjectController = require('./controllers/ProjectController')
const TechController = require('./controllers/TechController')

const routes = express.Router()

//Configurar as rotas da api
routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:project_id', ProjectController.update)

routes.get('/projects/:project_id/techs', TechController.index)
routes.post('/projects/:project_id/techs', TechController.store)
routes.delete('/projects/:project_id/techs', TechController.delete)

module.exports = routes