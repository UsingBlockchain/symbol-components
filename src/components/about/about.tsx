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
import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'symbol-storybook-introduction',
  shadow: true
})
export class About {
  /// region render methods
  /**
   * Render component
   */
  render() {
    return <Host>
      <h1>Symbol Components</h1>
      <table>
          <tbody>
          <tr>
              <td>
              <a href="https://www.npmjs.com/package/@symbolui/symbol-components" target="_blank">
                  <img src="https://img.shields.io/npm/v/@symbolui/symbol-components" />
              </a>
              </td>
              <td>
              <a href="https://www.npmjs.com/package/@symbolui/symbol-components" target="_blank">
                  <img src="https://img.shields.io/npm/dt/@symbolui/symbol-components" />
              </a>
              </td>
              <td>
              <a href="https://nem2.slack.com/messages/CB0UU89GS" target="_blank">
                  <img src="https://img.shields.io/badge/chat-on%20slack-green.svg" />
              </a>
              </td>
          </tr>
          </tbody>
      </table>
      <p>Welcome to Storybook for Symbol Components.</p>
      <p>You can browse through stories (integration tests) displayed on the left-side menu.</p>
      <h2>Getting started</h2>
      <ul>
          <li>Pick a component in the left-side menu under <b>Components</b></li>
          <li>Pick one of the component-level stories for said Component.</li>
          <li>Checkout <b>Docs</b>, <b>Story Source</b> and <b>Dynamic properties</b></li>
          <li><i>Integrate your components!</i></li>
      </ul>
      <p>Adding stories matches following minimatch pattern: ./stories/**/*.stories.*</p>
      <h2>References</h2>
      <p>This page is powered by <a href="https://storybook.js.org/docs" target="_blank">Storybook</a></p>
      <ul>
          <li><b>@symbolui/symbol-components</b> on <a href="https://www.npmjs.com/package/@symbolui/symbol-components" target="_blank">NPM</a></li>
          <li><b>@symbolui/symbol-components</b> on <a href="https://www.github.com/symbol/symbol-components" target="_blank">Github</a></li>
          <li><a href="https://storybook.js.org/docs/formats/component-story-format/" target="_blank">Using <b>CSF</b>: Component Story Format</a></li>
          <li><a href="https://stenciljs.com/docs/introduction" target="_blank">Using <b>Stencil</b> components compiler</a></li>
      </ul>
    </Host>;
  }
  /// end-region render methods
}
