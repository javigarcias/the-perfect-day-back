const OpinionController = require('../controllers/OpinionController');
const router = require('express').Router();

router.post('/create', OpinionController.create);
router.get('/getByCommerce', OpinionController.getByCommerce)
router.get('/', OpinionController.getAll)


module.exports = router;