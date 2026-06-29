/**
 * Invoice generation module.
 * This file is protected by the billing folder's .holy marker.
 */

function generateInvoice(customerId, items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // changed tax rate from 8% to 10%
  const total = subtotal + tax;

  return {
    customerId,
    items,
    subtotal,
    tax,
    total,
    createdAt: new Date().toISOString(),
  };
}

function applyDiscount(invoice, discountPercent) {
  const discount = invoice.subtotal * (discountPercent / 100);
  return {
    ...invoice,
    discount,
    total: invoice.total - discount,
  };
}

module.exports = { generateInvoice, applyDiscount };
