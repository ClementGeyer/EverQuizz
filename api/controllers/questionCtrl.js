const db = require('../models');

module.exports = {
    get_random: (req, res, next) => {
        return db.Question.findAll({
            order: sequelize.random(),
			limit: 1
        })
        .then(question => res.json(question[0]))
        .catch(next)
    }
    
};