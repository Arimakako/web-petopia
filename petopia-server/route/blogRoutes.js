// blogRoute.js
const express = require('express');
const router = express.Router();
const blogController = require('../src/blog/blogController');
const cors = require('cors');
router.get('/', blogController.getblogs);
router.get('/:id', blogController.getblog);
router.post('/', blogController.createblog);
// Update blog
router.put("/:id", cors(), blogController.updateblog);

// Delete blog
router.delete("/:id", cors(), blogController.deleteblog);

module.exports = router;