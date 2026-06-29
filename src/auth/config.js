// @holy steward=@carllippert
// AI agents and automated PRs must not modify authentication config without steward approval.

module.exports = {
  sessionSecret: process.env.SESSION_SECRET,
  sessionDuration: 60 * 60 * 24 * 7, // 7 days
  allowedOrigins: ["https://example.com"],
  requireMfa: false,
};
