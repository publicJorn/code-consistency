# Code Consistency

Provides configs and docs to promote and enforce code consistency between projects.  
This project is based on similar work I did for [IGNE agency]() in order to have my own config and learn more about the npm publishing process.

- [eslint config](./packages/eslint-config)
- [prettier config](./packages/prettier-config)

## Contributing

Please fork and make a pull request.

### Commit messages

This project uses conventional-commits with the [angular preset](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-angular/README.md). Please write proper commit messages; they will be used to auto-generate the changelog.

One of the following scopes are mandatory:

- `repo` for non-package stuff
- `eslint` for the eslint-config package
- `prettier` for the prettier-config package

Examples:

```sh
git commit -m"feat(repo): added conventional commits config"

git commit -m"docs(prettier): explain vscode setup"

git commit -m"feat(eslint): add rule X
BREAKING CHANGE: this may cause errors in consuming packages"
```

If you made changes to both the main repo and a package, create separate commits.  
More info: [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Publishing

Mostly a reminder for myself

- Log in to npm
  - Either from the CLI: `npm login`
  - OR create a granular access token in npm and add it to `~/.npmrc` manually  
    `//registry.npmjs.org/:_authToken=<token>`
- On your computer go to the root of this repo and make sure your changes are committed.
- Now run `npx lerna publish` to publish the changed packages. You'll have to choose what kind of version bump to give. Make sure to follow the [guidelines on semantic versioning](https://semver.org/).

## TODO

- Automate publishing using github workflow on merge with main.
