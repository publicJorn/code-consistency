---
'@devjorn/eslint-config': patch
---

Contains the following fixes:

- Now checking `tsconfig.json` and all `tsconfig.*.json` files for paths (aliases) so import plugin doesn't complain for eg: `import x from @/x`.
- CJS files now have the global `node`, so no more error for `module` doesn't exist.
