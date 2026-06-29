// @holy steward=@carllippert
// AI agents and automated PRs must not modify authentication config without steward approval.

module.exports = {
  sessionSecret: process.env.SESSION_SECRET,
  sessionDuration: 60 * 60 * 24 * 30, // changed from 7 to 30 days
  allowedOrigins: ["https://example.com", "https://app.example.com"],
  requireMfa: true,
};
// webhook test 1782726230
// ping 1782726338
// deploy-fix-test 1782726847
