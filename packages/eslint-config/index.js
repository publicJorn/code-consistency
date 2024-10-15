module.exports = {
  env: {
    browser: true,
    es2022: true, // Can be different per project
  },
  extends: [
    'eslint:recommended',
    './configs/generic.js',
    './configs/react.js',
    './configs/import.js',
    'prettier',
  ],
  plugins: ['prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'package.json', '*-lock.json'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      globals: {
        React: true,
        JSX: true,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
}
