const express = require('express');
const ArticleController = require('../controllers/ArticleController');
const UserController = require('../controllers/UserController');

exports.router = (function() {
    const router = express.Router()

    router.get('/',ArticleController.articles);
    router.post('/', ArticleController.addArticle);

    router.get('/user', UserController.users);
    router.post('/user', UserController.addUser);
    router.get('/user/:id', UserController.user);

    


    return router
})()