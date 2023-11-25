// routes/index.js

const express = require('express');
const router = express.Router();

const Page = require('../models/Page');

// Home page
router.get('/', async (req, res) => {
  const pages = await Page.find();
  res.render('blog/home', { pages });
});

module.exports = router;
