const Project = require('../models/Project')

module.exports = {
  async index(req, res) {
    const projects = await Project.findAll({
      order: [
        ['id', 'DESC']
      ]
    })

    return res.json(projects)
  },

  async store(req, res) {
    const { name, dirname, repository } = req.body

    const project = await Project.create(
    { 
      name,
      dirname,
      repository
    })

    return res.json(project)
  },

  async update(req, res) {
    const { project_id } = req.params
    const { name, dirname, repository } = req.body

    const project = await Project.findByPk(project_id)

    if (!project) {
      return res.status(400).json({ error: 'Project not found' })
    }

    const project_update = await Project.update(
    { name, dirname, repository },
    { where: { id: project_id }})

    return res.json({ message: 'Project updated' })
  }
}