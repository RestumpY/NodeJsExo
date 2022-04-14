const mongoose = require('mongoose')
const  {UserModel} = require('../models/UserModel')

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
                res.status(200).render('users', {
                    users
                })
            }
        })
    },
    addUser: (req, res) => {
        const User = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age : req.body.age,
        })
        User.save((err, user) => {
            if (err) {
                res.status(500).render('error', {
                    error: err
                })
            } else {
                res.status(200).redirect('/user')
            }
        })
    },
    deleteUser: (req, res) => {
        UserModel.deleteOne({id : req.params.id}, (err, user) => {
            res.json({
                user
            })
        })
    },
    
    updateUser: (req,res)=>{
    
      UserModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { firstname: req.body.firstname, lastname: req.body.lastname, age : req.body.age } },
        (err, user) => {
          res.json({
              user
          })
      })
    },
    
    showUser: async(req,res) => {
      const user = await UserModel.findOne( {_id: req.params.id})
      return res.status(200).render('showUser',{user})
    }
}