const express = require('express');

const thingController = require('../controllers/thingController');

exports.router = (function() {
    const router = express.Router()

    router.route('/').get(thingController.thing)
    // router.route('/').get(thingController.index)

    return router
})()