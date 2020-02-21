const Project = require('../models/Project')
const Tech = require('../models/Tech')

module.exports = {
  async index(req, res) {
    const { project_id } = req.params

    const project = await Project.findByPk(project_id, {
      include: {
        association: 'techs',
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }
    })

    return res.json(project.techs)
  },

  async store(req, res) {
    const { project_id } = req.params
    const { name } = req.body

    const project = await Project.findByPk(project_id)

    if (!project) {
      return res.status(400).json({ error: 'Project not found' })
    }

    const [ tech ] = await Tech.findOrCreate({
      where: { name }
    })

    await project.addTech(tech)

    return res.json(tech)
  },

  async delete(req, res) {
    const { project_id } = req.params
    const { name } = req.body

    const project = await Project.findByPk(project_id)

    if (!project) {
      return res.status(400).json({ error: 'Project not found' })
    }

    const tech = await Tech.findOne({
      where: { name }
    })

    await project.removeTech(tech)

    return res.json()
  }
}