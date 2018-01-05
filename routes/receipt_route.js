// routes/receipt_route.js

var express     = require('express');
var router      = express.Router();
var middlewares = require('../middlewares/middleware');
var receiptsAuth = require('../middlewares/receiptsAuthentication');

// require controller modules
var receiptsController=require('../controllers/receiptsController');

// Add Authentication middleware
router.use('/receipt_route', middlewares.authenticateToken);

// GET /api/receipt/{id}/
router.get('/receipt/:id', receiptsAuth.authenticateReceiptsManagement, receiptsController.get_receipt);

module.exports=router;