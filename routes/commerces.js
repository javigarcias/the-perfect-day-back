const CommerceController = require('../controllers/CommerceController');
const router = require('express').Router();

router.post('/register', CommerceController.register);


module.exports = router;