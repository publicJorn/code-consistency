# Repo setup

This doc contains some info about how this repo works. It is intended as a reference for when a similar situation is needed in some other project.

## Versioning & Publishing

This is a monorepo with packages that should be versioned separately.

Initially Lerna was used in combination with conventional commits. This required specific formatting of commit messages and a couple of manual steps.  
It turned out to be easy to make a mistake, which resulted in the auto-generated changelog to be messy and unnecessary versions. Also it is hard to configure the changesets exactly how I wanted them.

Instead I chose to use [changesets](https://github.com/changesets/changesets). It is a bit more work to add a changeset file for versioning, but it is transparent. The repo is using github bots to automate the process of versioning and publishing, whilst it is still possible to do it manually.

## Changesets release workflow (github action)

The `.github/workflows/release.yml` file will create a pull-request when changesets are detected in main. It needs special permissions to run:

- In Github, go to repo Settings -> Actions -> General
- Set workflow permissions: Read & Write and check the box "Allow GitHub Actions to create and approve pull requests"
