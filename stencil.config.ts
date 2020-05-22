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
      'symbol-openapi-typescript-node-client': ['NodeRoutesApi'],
      './node_modules/request/index.js': ['get']
    }
  },
  nodeResolve: {
    preferBuiltins: true,
  },
  rollupPlugins: {
    before: [],
    after: [
      polyfills()
    ]
  },
  /// end-region rollup plugins

  /// region distribution
  globalStyle: 'src/resources/variables.css',
  bundles: [
    {components: ['symbol-node-health-icon']}
  ]
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'dist-lazy', dir: 'dist/lazy' },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'resources/icons', dest: 'assets/icons' }
      ]
    }
  ]
  /// end-region distribution
});

export const config = create();
