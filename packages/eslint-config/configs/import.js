import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const tsImportConfig = importPlugin.flatConfigs.typescript
tsImportConfig.settings['import/resolver'].typescript = {
  alwaysTryTypes: true,
}

// importPlugin for correctness and simpleImportSort for.. sorting.
export const configImport = [
  importPlugin.flatConfigs.recommended,

  {
    name: 'import/typescript',
    ...tsImportConfig,
  },

  {
    name: 'devJorn/imports',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'import/no-anonymous-default-export': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
