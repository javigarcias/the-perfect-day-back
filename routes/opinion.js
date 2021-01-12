const OpinionController = require('../controllers/OpinionController');
const router = require('express').Router();

router.post('/create', OpinionController.create);
router.get('/getByCommerce/:id', OpinionController.getByCommerce)
router.get('/getByUser/:id', OpinionController.getByUser)

router.get('/', OpinionController.getAll)


module.exports = router;