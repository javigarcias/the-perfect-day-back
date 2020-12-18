const EventController = require('../controllers/EventController');
const router = require('express').Router();

router.post('/create', EventController.create);


module.exports = router;