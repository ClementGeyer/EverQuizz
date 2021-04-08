const db = require('../models');

module.exports = {
    get_random: (req, res, next) => {
        return db.Question.findAll({
            order: sequelize.random(),
			limit: 1
        })
        .then(question => res.json(question[0]))
        .catch(next)
    },

    get_answer: (req, res, next) => {
        return db.Question.findAll({
            where: req.query.id
        })
        .then(answer => res.json(answer))
        .catch(next)
    }
};