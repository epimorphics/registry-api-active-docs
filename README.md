# Active API documentation for the environment codes registry

A simple documentation viewer for developers working with the API
to the environment codes registry. The API is
[documented in detail](http://environment-registry.epimorphics.net/registry/ui/api-documentation
by web pages. This application presents a selection of the actions available
through the API in a form that developers can:

- design API URI's by selecting options and entering URL slugs interactively
- try out API calls and view real results, including POST and PATCH update operations.

## Background

The API is documented by a [RAML](https://raml.org/) file. RAML is an API
description and modelling language, designed for documenting and testing RESTful
APIs.  We have not yet used the facilities in RAML and JSON-Schema to fully
document the input and output document formats, the current state focuses on
operations and their parameters.

At the moment, the RAML lives in `static.api.raml`. In the future, we will
probably refactor this project to separate the core API sandbox features from
the specifics of the given RAML spec, and the API livery used to top- and tail-
the page.

## Editing the content for the tool

The intention is that none of the actual copy should be part of the application,
but should be driven by the RAML file. This is not quite achieved, in that
the page leader copy is part of the app at the moment, but this is likely to
change in the future.

To change any of the operations that the user can try, their narrative
description, or the order that they appear in the navigation index, please
edit `static/api.raml`.

To edit the example content that can be passed in for some deeply-linked
operations, please edit `static/example-payloads.json`.

To change the username and password used for authenticating with the test
register, please edit `static/auth.json`. <strong>Developer note</strong>
`auth.json` is not committed to git (for obvious reasons). However, it does need
to be present in `./static` to run any of the updating operations. You need
to obtain or create a copy of the file locally.

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Deployment

There are two npm tasks for doing the production deployment:

- `npm run package` will do the production build, then tar the resulting
`dist` directory into a deployable `ea-registry-active-api-docs.tgz` file.

- `npm deploy` will copy the `.tgz` archive file to S3, where it can be deployed
by the LDS. You will need AWS S3 credentials for the `defra` profile; see
<a href="mailto:dave.reynolds@epimorphics.com">Dave</a> to get access.
