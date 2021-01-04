const CommerceController = require('../controllers/CommerceController');
const router = require('express').Router();

router.post('/', CommerceController.register);
router.get('/', CommerceController.getAll);
router.get('/restaurants', CommerceController.getRestaurant);
router.get('/photographers', CommerceController.getPhotographers);
router.get('/name/:name', CommerceController.getByName);


module.exports = router;