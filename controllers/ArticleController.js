const mongoose = require('mongoose')
const {ArticleModel} = require('../models/ArticleModel')
const {UserModel} = require('../models/UserModel')

module.exports = {

  articles: (req, res) => {

    UserModel.find({}, (err, users) => {
      if (err) {
        res.status(500).send(err)
      } else {
        ArticleModel.find({}, (err, articles) => {
          if (err) {
            res.status(500).send(err)
          } else {
            if (!articles) {
              res.status(404).send('Aucun article trouvé trouvé')
            }
            res.status(200).render('index', {
              articles,
              users
            })
          }
        })
      }
    })
  },

  addArticle: (req, res) => {
    UserModel.findById(req.body.usersList, (err, user) => {
      if (err) {
        res.status(500).send(err)
      } else {
        const Article = new ArticleModel({
          title: req.body.title,
          description: req.body.description,
          user: user.id,
        })
        Article.save((err, article) => {
          if (err) {
            res.status(500).render('error', {
              error: err
            })
          } else {
            res.status(200).redirect('/article')
          }
        })
      }
    })
  },
}