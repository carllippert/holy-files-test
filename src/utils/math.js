/**
 * Math utility functions.
 * calculateTax is a holy symbol — its logic must not change without steward approval.
 */

/** @holy steward=@carllippert
 * Core tax calculation. Changing this formula affects all invoices company-wide.
 */
function calculateTax(amount, rate) {
  return amount * rate;
}

function roundCurrency(amount) {
  return Math.round(amount * 100) / 100;
}

function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

module.exports = { calculateTax, roundCurrency, formatCurrency };
