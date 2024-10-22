# @devjorn/eslint-config

## 1.0.1

### Patch Changes

- a2091a3: Contains the following fixes:

  - Now checking `tsconfig.json` and all `tsconfig.*.json` files for paths (aliases) so import plugin doesn't complain for eg: `import x from @/x`.
  - CJS files now have the global `node`, so no more error for `module` doesn't exist.

## 1.0.0

### Major Changes

- e69ca14: Implemented eslint flat config (BREAKING CHANGES)

  # BREAKING CHANGES

  - Now using eslint flat config. See the [docs](./README.md) to learn how to update your existing config.
  - The package is now in ESM format. I don't know of any dependents using CJS, but if there is let me know.
  - **Eslint version >=9** is now required as peerdependency.
  - **Typescript version >=5** is now required for typescript projects.
  - The default eslint config should now be imported like: `import { eslintConfigDefault } from '@devjorn/eslint-config'`
  - The expo eslint config should now be imported like: `import { eslintConfigExpo } from '@devjorn/eslint-config'`
  - The expo plugin is not updated yet, so the two [expo rules](https://github.com/expo/expo/tree/main/packages/eslint-plugin-expo/docs/rules) no longer work.
    These are quite minor and should give runtime warnings in development anyway.

### Minor Changes

- 7190392: Added typescript-eslint plugin, so consumers don't need to add it themselves anymore

## 0.3.0

### Minor Changes

- 7084524: fix(eslint): add globals
