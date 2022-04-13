const mongoose = require('mongoose')
const  {ArticleModel} = require('../models/ArticleModel')

module.exports = {
    
  articles: (req,res) => {
    ArticleModel.find({},(err,articles) => {
      if (err) {
        res.status(500).send(err)
      }
      else{
        if (!articles) {
          res.status(404).send('Aucun article trouvé trouvé')
        }
        res.status(200).render('index', {
          articles
      })
      }
    })
  },

  addArticle : (req, res) => {
    const Article = new ArticleModel({
        title: req.body.title,
        description: req.body.description,
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
},
}