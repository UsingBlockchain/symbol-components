/*
 * Copyright 2020-present Grégory Saive for NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Config } from '@stencil/core';
import polyfills from 'rollup-plugin-node-polyfills';
import image from '@rollup/plugin-image';

export const create: () => Config = () => ({
  /// region packaging
  preamble: 'Built for Symbol',
  namespace: 'symbol-components',
  //taskQueue: 'async',
  /// end-region packaging

  /// region compiler/transpiler
  buildEs5: false,
  shadowDomShim: false,
  enableCache: false,
  minifyJs: false,
  minifyCss: true,
  srcIndexHtml: "src/index.html",
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true
  },
  /// end-region compiler/transpiler

  /// region rollup plugins
  commonjs: {
    namedExports: {
      'punycode': ['toASCII'],
      'events': ['EventEmitter'],
      'node_modules/buffer/index.js': ['isBuffer'],
      'process': ['nextTick'],
    }
  },
  nodeResolve: {
    preferBuiltins: true,
  },
  rollupPlugins: {
    before: [
      image({
        include: [
          'src/components/node-health-icon/resources/*.png',
          'src/components/transaction-icon/resources/*.png'
        ]
      })
    ],
    after: [
      polyfills()
    ]
  },
  /// end-region rollup plugins

  /// region testing (complements jest.config.js)
  testing: {
    automock: false,
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
      "\\.(css|less)$": "identity-obj-proxy"
    }
  },
  /// end-region testing (complements jest.config.js)

  /// region distribution
  globalStyle: 'src/resources/variables.css',
  bundles: [
    {components: ['symbol-storybook-introduction']},
    {components: ['symbol-node-health-icon']},
    {components: ['symbol-transaction-icon']},
    {components: ['symbol-signatures-progressbar']}
  ],
  outputTargets: [
    { type: 'docs-readme' },
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-lazy', dir: 'dist/lazy' },
    { type: 'dist-custom-elements-bundle', dir: 'dist/elements' }
  ]
  /// end-region distribution
});

export const config = create();
