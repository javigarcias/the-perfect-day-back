const CommerceController = require('../controllers/CommerceController');
const router = require('express').Router();

router.post('/', CommerceController.register);
router.get('/', CommerceController.getAll);


module.exports = router;