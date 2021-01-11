const CommerceController = require('../controllers/CommerceController');
const router = require('express').Router();

router.post('/', CommerceController.register);
router.get('/', CommerceController.getAll);
router.get('/restaurants', CommerceController.getRestaurants);
router.get('/photographers', CommerceController.getPhotographers);
router.get('/beauty', CommerceController.getBeauty);
router.get('/florist', CommerceController.getFlorist);
router.get('/name/:name', CommerceController.getByName);
router.get('/typeAndCity', CommerceController.getTypeAndCity);



module.exports = router;