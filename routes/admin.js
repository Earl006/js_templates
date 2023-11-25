// routes/admin.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

// Login form
router.get('/login', (req, res) => {
  res.render('admin/login');
});

// Login logic
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
  })
);

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Register form
router.get('/register', (req, res) => {
  res.render('admin/register');
});

// Register logic
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  User.register(new User({ username }), password, (err, user) => {
    if (err) {
      console.error(err);
      res.redirect('/admin/register');
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/admin/dashboard');
    });
  });
});

// Middleware to check authentication
router.use(authMiddleware.isAuthenticated);

// Add the rest of your admin routes here

module.exports = router;
