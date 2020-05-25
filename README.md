# Symbol Components Library

[![npm-badge][npm-badge]][npm-url]
[![size-badge][size-badge]][npm-url]
[![dl-badge][dl-badge]][npm-url]
[![Build Status](https://travis-ci.com/symbol/symbol-components.svg?branch=master)](https://travis-ci.com/symbol/symbol-components)
[![Slack](https://img.shields.io/badge/chat-on%20slack-green.svg)](https://nem2.slack.com/messages/CB0UU89GS)

Library to provide Javascript Components for Symbol.

This is a PoC to validate the proposed [NIP 15 Transaction Taxonomy](https://github.com/nemtech/NIP/issues/50). When stable, the repository will be moved to the [nemtech](https://github.com/nemtech) organization.

**NOTE**: The author of this package cannot be held responsible for any loss of money or any malintentioned usage forms of this package. Please use this package with caution.

## Components Found Here

You can use any of the following custom elements when `@symbolui/symbol-components` is imported:

| Component | Description |
| --------- | ----------- |
| [`<symbol-node-health-icon>`][cmpurl-node-health-icon] | Icon displaying peer health status |
| [`<symbol-transaction-icon>`][cmpurl-transaction-icon] | Icon displaying peer health status |

## Usage

### Node modules

You can import the library into your Vue, React, Angular or vanilla Javascript projects with NPM as follows:

```bash
$ npm install symbol-components
```

### Script tag

You can import the library directly into your HTML files with following `<script>` tag example:

```html
<script src='https://unpkg.com/symbol-components@0.2.0/dist/symbol-components.js'></script>
```

Then you can use the custom elements anywhere in your template, Vue files, JSX, HTML, etc.

## Getting help

Use the following available resources to get help:

- [Symbol Documentation][docs]
- Join the community [slack group (#sig-client)][slack]
- If you found a bug, [open a new issue][issues]

## Contributing

This project is developed and maintained by NEM Foundation.

Contributions are welcome and appreciated.
Check [CONTRIBUTING](CONTRIBUTING.md) for information on how to contribute.

## License

Copyright 2020-present Grégory Saive for NEM

Licensed under the [Apache License 2.0](LICENSE)

[self]: https://github.com/symbol/symbol-components
[docs]: https://nemtech.github.io
[issues]: https://github.com/symbol/symbol-components/issues
[slack]: https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLWZmZWRiMjViYTVhZjEzOTA0MzUyMTA1NTA5OWQ0MWUzNTA4NjM5OTJhOGViOTBhNjkxYWVhMWRiZDRkOTE0YmU
[npm-url]: https://www.npmjs.com/package/@symbolui/symbol-components
[npm-badge]: https://img.shields.io/npm/v/@symbolui/symbol-components
[size-badge]: https://img.shields.io/bundlephobia/min/@symbolui/symbol-components
[dl-badge]: https://img.shields.io/npm/dt/@symbolui/symbol-components

[cmpurl-node-health-icon]: https://github.com/symbol/symbol-components/blob/master/components/node-health-icon
[cmpurl-transaction-icon]: https://github.com/symbol/symbol-components/blob/master/components/transaction-icon
