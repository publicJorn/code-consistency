# My preferred prettier settings for personal projects

Shared config for prettier, so all our projects look nice and recognizable.

## Setting up

Once for a project.

```
npm i -D @publicjorn/prettier-config prettier
```

Add prettier to `package.json`:

```json
"prettier": "@publicjorn/prettier-config",
```

Add a script to run prettier from command line:

```json
"scripts": {
  "check-format": "prettier . --check"
}
```

Make sure to add a step to the pipeline of your project that runs this script.

## Editor integration

For every developer.

### VSCode

- Install the prettier extension: `esbenp.prettier-vscode`
- Open VSCode's `settings.json` and add:  
  `"editor.defaultFormatter": "esbenp.prettier-vscode",`
- Related settings you may want to add are:
  ```
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  ```
