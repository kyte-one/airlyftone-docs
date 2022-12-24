# AirLyft Documentation Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/45b2361f-4401-4bb8-bbbf-3f17cc1fcbc8/deploy-status)](https://app.netlify.com/sites/keen-hotteok-e806a2/deploys) https://keen-hotteok-e806a2.netlify.app

This is the readme for the AirLyft Documentation Website (will be hosted on https://docs.airlyft.one) and is built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
