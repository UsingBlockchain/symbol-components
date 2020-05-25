# symbol-signatures-progressbar

The `<symbol-signatures-progress></symbol-signatures-progress>` component is a Symbol component that provides **a progress bar for displaying progress of expected signatures count**.

## License

Copyright 2020-present Grégory Saive for NEM

Licensed under the [Apache License 2.0](LICENSE)

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute | Description                                              | Type                       | Default     |
| -------------------------- | --------- | -------------------------------------------------------- | -------------------------- | ----------- |
| `graph`                    | --        | The multisig account graph info                          | `MultisigAccountGraphInfo` | `undefined` |
| `transaction` _(required)_ | --        | The transaction for which signatures have to be expected | `Transaction`              | `undefined` |


## Events

| Event   | Description    | Type                  |
| ------- | -------------- | --------------------- |
| `error` | Emits an error | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
