const express = require('express');

const thingController = require('../controllers/thingController');

exports.router = (function() {
    const router = express.Router()

    router.route('/user/:id').get(thingController.user)
    router.route('/users').get(thingController.users)


    return router
})()