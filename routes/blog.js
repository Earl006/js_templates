// routes/blog.js

const express = require('express');
const router = express.Router();

const Page = require('../models/Page');

// Single page view
router.get('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const page = await Page.findOne({ slug });

  if (!page) {
    res.status(404).send('Page not found');
  } else {
    res.render('blog/single', { page });
  }
});

module.exports = router;
