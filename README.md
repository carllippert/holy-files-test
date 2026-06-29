# holy-files-test

Test repository for validating holy-files end-to-end protection.

This repo demonstrates all three types of holy protection:

1. **File protection** — `src/auth/config.js` has an inline `@holy` marker
2. **Folder protection** — `src/billing/.holy` protects the entire billing directory
3. **Function protection** — `src/utils/math.js` has a function with a `@holy` JSDoc marker

Any PR that modifies these protected areas will be blocked until the steward approves.
