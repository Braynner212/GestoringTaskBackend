const { where } = require("sequelize");
const { Person } = require("../models/Person.model");
const { Skill } = require("../models/skill.model");
const { Task } = require("../models/task.model");


const getTask = async (req, res = response) => {
    try {
      const tasksDB = await Task.findAll({
        attributes: ['id','title', 'date_limit','status'], // columnas de la tabla tasks
        include: [
          {
            model: Person,
            attributes: ['name', 'age'], // columnas de la tabla People
            include: [
              {
                model: Skill,
                attributes: ['name'], // columnas de la tabla Skills
              },
            ],
          },
        ],
        order: [['id', 'DESC']]
    });
  
      return res.status(200).json({
        ok: true,
        tasksDB,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Error unexpected... see logs", 
      });
    }
  };

  const createTask = async (req, res = response) => {
    try {
        dataTask = {
            title: req.body.title,
            date_limit: req.body.date_limit,
            status: 'pending'
        }
        const taskDB = await Task.create(dataTask);
        req.body.people.forEach(async formPerson => {
            dataPerson = {
                name: formPerson.name,
                age: formPerson.age,
                id_task: taskDB.id
            }
            const personDB = await Person.create(dataPerson);
            formPerson.skills.forEach(formSkill => {
                dataSkill = {
                    name: formSkill.name,
                    id_person: personDB.id
                }
                Skill.create(dataSkill);
            })
        });
        // console.log(req.body.people[0].skills)
  
      return res.status(200).json({
        ok: true,
        msg: "Task created!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Error unexpected... see logs", 
      });
    }
  };

  const updateTask = async (req, res = response) => {
    try {
      const tasksDB = await Task.findAll({
            where: {
                id: req.body.id
            }
        });

        if (!tasksDB) {
            return res.status(400).json({
                ok: false,
                msg: "Task not found"
            });
        }

        const taskDB = await Task.update(req.body, {
            where: {
                id: req.body.id
            }
        });
  
      return res.status(200).json({
        ok: true,
        msg: "Task updated!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Error unexpected... see logs", 
      });
    }
  };

module.exports = {
    getTask,
    createTask,
    updateTask
}