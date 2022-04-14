const express = require('express');
const ArticleController = require('../controllers/ArticleController');
const UserController = require('../controllers/UserController');

exports.router = (function() {
    const router = express.Router() 

    
    router.get('/',ArticleController.articles);
    router.post('/', ArticleController.addArticle);
    router.get('/article/show/:id',ArticleController.showArticle);
    router.route('/article/:id').delete(ArticleController.deleteArticle);
    router.route('/article/:id').put(ArticleController.updateArticle);


    router.get('/user', UserController.users);
    router.post('/user', UserController.addUser);
    router.get('/user/:id', UserController.user);
    router.get('/user/show/:id',UserController.showUser);
    router.route('/user/:id').delete(UserController.deleteUser);
    router.route('/user/:id').put(UserController.updateUser);


    


    return router
})()