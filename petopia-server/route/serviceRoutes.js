const express = require('express');
const router = express.Router();
const serviceController = require('../src/service/serviceController');
const cors = require('cors');
router.get('/', serviceController.getservices);
router.get('/:id', serviceController.getservice);
router.post('/', serviceController.createservice);
// Update service
router.put("/:id", cors(), serviceController.updateservice);

// Delete service
router.delete("/:id", cors(), serviceController.deleteservice);

module.exports = router;