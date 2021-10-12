const express = require('express');
const { login } = require('../controllers/controller_login');
const { showProducts, detailProducts, registerProducts, updaterProducts, excludeProducts } = require('../controllers/controller_products');
const { registerUsers, detailUsers, updaterUser } = require('../controllers/controller_users');
const { filterAthentication } = require('../middlewares/authentication_filter');

const router = express();


//Users Registrations
router.post('/usuario',registerUsers);

//User Login
router.post('/login',login);

//Requests Need Authorization
router.use(filterAthentication);

//Details, Update and Change users
router.get('/usuario',detailUsers);
router.put('/usuario',updaterUser);

//Show, Details, Inserts, Updates and Changes, Delete Products
router.get('/produtos',showProducts);
router.get('/produtos/:id',detailProducts);
router.post('/produtos',registerProducts);
router.put('/produtos/:id',updaterProducts);
router.delete('/produtos/:id',excludeProducts);

module.exports = router;