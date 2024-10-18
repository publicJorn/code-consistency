---
'@devjorn/eslint-config': major
---

Implemented eslint flat config (BREAKING CHANGES)

# BREAKING CHANGES

- Now using eslint flat config. See the [docs](./README.md) to learn how to update your existing config.
- The package is now in ESM format. I don't know of any dependents using CJS, but if there is let me know.
- **Eslint version >=9** is now required as peerdependency.
- **Typescript version >=5** is now required for typescript projects.
- The default eslint config should now be imported like: `import { eslintConfigDefault } from '@devjorn/eslint-config'`
- The expo eslint config should now be imported like: `import { eslintConfigExpo } from '@devjorn/eslint-config'`
- The expo plugin is not updated yet, so the two [expo rules](https://github.com/expo/expo/tree/main/packages/eslint-plugin-expo/docs/rules) no longer work.  
  These are quite minor and should give runtime warnings in development anyway.
