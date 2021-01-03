const CommerceController = require('../controllers/CommerceController');
const router = require('express').Router();

router.post('/', CommerceController.register);


module.exports = router;