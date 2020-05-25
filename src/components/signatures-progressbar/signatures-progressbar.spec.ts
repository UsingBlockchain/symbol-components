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
import { newSpecPage } from '@stencil/core/testing';
import { SignaturesProgressBar } from './signatures-progressbar';

describe('<symbol-signatures-progressbar> component should', () => {
  it('render', async () => {
    const {root} = await newSpecPage({
      components: [SignaturesProgressBar],
      html: '<symbol-signatures-progressbar></symbol-signatures-progressbar>'
    });

    expect(root).toEqualHtml(`
      <symbol-signatures-progressbar>
        <mock:shadow-root>
        </mock:shadow-root>
      </symbol-signatures-progressbar>
    `);
  });

  it('render and read transaction.signature field given no graph', async () => {
    const {root} = await newSpecPage({
      components: [SignaturesProgressBar],
      html: '<symbol-signatures-progressbar transaction="{}"></symbol-signatures-progressbar>'
    });

    expect(root).toEqualHtml(`
      <symbol-signatures-progressbar transaction="{}">
        <mock:shadow-root>
          <progress max=1 value=0>
            <div class="polyfilld-progress-bar">
              <span style="width: 0%;">
                0 of 1
              </span>
            </div>
          </progress>
        </mock:shadow-root>
      </symbol-signatures-progressbar>
    `);
  });
});
