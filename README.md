# Symbol Components Library

[![npm][npm]][npm-url]
[![size][size]][size-url]
[![Build Status](https://travis-ci.com/symbol/symbol-components.svg?branch=master)](https://travis-ci.com/symbol/symbol-components)
[![Slack](https://img.shields.io/badge/chat-on%20slack-green.svg)](https://nem2.slack.com/messages/CB0UU89GS//)

Library to provide Javascript Components for Symbol.

This is a PoC to validate the proposed [NIP 15 Transaction Taxonomy](https://github.com/nemtech/NIP/issues/50). When stable, the repository will be moved to the [nemtech](https://github.com/nemtech) organization.

**NOTE**: The author of this package cannot be held responsible for any loss of money or any malintentioned usage forms of this package. Please use this package with caution.

## Usage

### Node modules

You can import the library into your Vue, React, Angular or vanilla Javascript projects with NPM as follows:

`npm install symbol-components`

### Script tag

You can import the library directly into your HTML files with following `<script>` tag example:

```html
<script src='https://unpkg.com/symbol-components@0.1.0/dist/symbol-components.js'></script>
```

Then you can use the custom elements anywhere in your template, Vue files, JSX, HTML, etc.

### Example usage

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <title>Symbol Components Library Starter</title>

  <!-- Include Symbol Components Library Styles -->
  <link rel="stylesheet" href="/build/symbol-components.css">

  <!-- (Optional) Add polyfills for web-components in older browsers -->
  <script nomodule src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

  <!-- Add Symbol Components for Modern browsers: ES Module -->
  <script type="module" src="/build/symbol-components.esm.js"></script>

  <!-- (Optional) Add Symbol Components for Edge 11 -->
  <script nomodule src="/build/symbol-components.js"></script>
</head>
<body>

  <label>Node status: </label>
  <symbol-node-health-icon node-url="http://localhost:3000" />

</body>
</html>
```

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
[npm]: https://img.shields.io/npm/v/@symbolui/symbol-components
[npm-url]: https://www.npmjs.com/package/@symbolui/symbol-components
[size]: https://packagephobia.now.sh/badge?p=@symbolui/symbol-components
[size-url]: https://packagephobia.now.sh/result?p=@symbolui/symbol-components
