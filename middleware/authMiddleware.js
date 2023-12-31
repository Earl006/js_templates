// middleware/authMiddleware.js

module.exports = {
    isAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/admin/login');
    },
  };
  