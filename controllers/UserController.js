const mongoose = require('mongoose')
const  UserModel = require('../models/UserModel')

module.exports = {
    user: (req, res) => {
        UserModel.findById(req.body.id, (err, user) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.render('user', { user })
            }
        })
    }, 
    users: (req, res) => {
        UserModel.find({}, (err, users) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                if (!users) {
                    res.status(404).send('Aucun auteur trouvé')
                }
                res.status(200).render('index', {
                    users
                })
            }
        })
    },
    addUser: (req, res) => {
        const user = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        })
        user.save((err, user) => {
            if (err) {
                res.status(500).render('error', {
                    error: err
                })
            } else {
                res.status(200).redirect('/user')
            }
        })
    }
}