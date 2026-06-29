/**
 * String utility functions — not protected, safe to modify.
 */

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

module.exports = { capitalize, truncate };
