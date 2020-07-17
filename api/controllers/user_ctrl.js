const db = require('../models'),
    { Op } = require('sequelize'),
    { paginate } = require('../utils');

module.exports = {
    getAll: (req, res, next) => {
        return db.User.findAll({
            where: {
                username: { [Op.substring]: `${req.query.username}` },
            },
            ...paginate(parseInt(req.query.page), parseInt(req.query.pageSize)),
        })
            .then((users) => res.json(users))
            .catch((err) => next(err));
    },

    updateById: (req, res, next) => {
        return db.User.findByPk(req.params.userId)
            .then((user) => {
                if (user) {
                    return user
                        .update(req.body)
                        .then(() => res.sendStatus(200))
                        .catch((err) => next(err));
                }
                throw {
                    status: 404,
                    message: "Cet utilisateur n'existe pas",
                };
            })
            .catch((err) => next(err));
    },

    getCurrent: (req, res, next) => {
        return res.json(req.user);
    },

    update: (req, res, next) => {
        const { username } = req.body;

        if (username) {
            return db.User.usernameIsUnique(username)
                .then((isUnique) => {
                    if (isUnique) {
                        return req.user
                            .update({ username })
                            .then((user) => res.json(user))
                            .catch((err) => next(err));
                    }
                    throw {
                        status: 409,
                        message: "Ce nom d'utilisateur est déjà utilisé",
                    };
                })
                .catch((err) => next(err));
        }
        throw { status: 406, message: 'Paramètres invalides' };
    },
};
