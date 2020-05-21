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
import { newSpecPage, newE2EPage } from '@stencil/core/testing';
import { NodeHealthIcon } from './node-health-icon';

describe('node-health-icon spec should', () => {
  it('render with values', async () => {
    const {root} = await newSpecPage({
      components: [NodeHealthIcon],
      html: `<node-health-icon node-url="http://localhost:3000"></node-health-icon>`
    });

    expect(root).toEqualHtml(`
      <node-health-icon node-url="http://localhost:3000">
        <mock:shadow-root>
          <div>
            Hello, World!
          </div>
        </mock:shadow-root>
      </node-health-icon>
    `);
  });
});

describe('node-health-icon end-to-end should', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<node-health-icon></node-health-icon>');
    const element = await page.find('node-health-icon');
    expect(element).toHaveClass('hydrated');
  });
});
