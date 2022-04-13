const express = require('express');
const UserController = require('../controllers/UserController');

exports.router = (function() {
    const router = express.Router()

    router.get('/user', UserController.users);
    router.post('/user', UserController.addUser);
    router.get('/user/:id', UserController.user);


    return router
})()