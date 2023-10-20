const express = require('express');

const router = express.Router();
const orderController = require('../controllers/order');

router.post('/', orderController.create)
router.get('/all', orderController.getAll)
router.delete('/:id', orderController.delete)

module.exports = router;