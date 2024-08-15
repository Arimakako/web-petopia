// comboRoute.js
const express = require('express');
const router = express.Router();
const comboController = require('../src/combo/comboController');
const cors = require('cors');
router.get('/', comboController.getcombos);
router.get('/:id', comboController.getcombo);
router.post('/', comboController.createcombo);
// Update combo
router.put("/:id", cors(), comboController.updatecombo);

// Delete combo
router.delete("/:id", cors(), comboController.deletecombo);

module.exports = router;