const db = require('../models');

module.exports = {
    get_all: (req, res, next) => {
        return db.User.findAll()
        .then(users => res.json(users))
        .catch(next)
    },

    create: (req, res, next) => {
        const data = {
            username: req.body.username || '', 
            password: req.body.password || '',
            mail: req.body.mail || ''
        };
        return db.User.create(data)
        .then(user => res.json(user))
        .catch(next)
    },

    get_by_id: (req, res, next) => {
        return db.User.findByPk(req.params.user_id)
        .then(user => {
            if(!user)
                throw { status: 404, message: 'User not found' };
            else
                res.json(user)
        })
        .catch(next)
    },

    update_by_id: (req, res, next) => {
        const data = {
            password: req.body.password || ''
        }
        db.User.findByPk(req.params.user_id)
        .then(user => {
            if(!user)
                throw { status: 404, message: 'User not found' };
            else{
                Object.assign(user, data);
                user.save()
                    .then(user => {
                      res.json(user);
                    })
            }
        })
        .catch(next)
    },

    delete_by_id: (req, res, next) => {
        return db.Person.findByPk(req.params.person_id)
        .then(person => {
            if(!person)
                throw { status: 404, message: 'Person not found' };
            else{
                return person.destroy();
            }
        })
        .then(() => res.status(200).send("Person destroyed"))
        .catch(err => next(err))
    }
};