import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { configGeneric } from './configs/generic.js'
import { configImport } from './configs/import.js'
import { configPrettier } from './configs/prettier.js'
import { configReact } from './configs/react.js'

export const eslintConfigDefault = [
  {
    name: 'devJorn/default',
    files: ['**/*.js?(x)', '**/*.ts?(x)'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022, // Can be different per project
      },
    },
    ignores: ['**/dist/**', 'package.json', '*-lock.json'],
  },

  {
    name: 'eslint/recommended',
    ...eslint.configs.recommended,
  },

  ...configGeneric,
  ...configReact,
  ...configImport,

  // eslint-disable-next-line import/no-named-as-default-member
  ...tseslint.configs.recommended,

  ...configPrettier,
]

export const eslintConfigExpo = [
  {
    name: 'devJorn/expo',
    files: ['**/*.js?(x)', '**/*.ts?(x)'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022, // Can be different per project
      },
    },
    ignores: ['**/dist/**', 'package.json', '*-lock.json'],
  },

  ...eslintConfigDefault.slice(1),
]
