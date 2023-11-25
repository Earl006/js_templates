// utils/slugify.js

module.exports = {
    slugify: (text) =>
      text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-'), // Replace multiple - with single -
  };
  