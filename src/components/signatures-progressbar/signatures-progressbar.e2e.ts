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
import { SignaturesProgressBar } from './signatures-progressbar';

describe('<symbol-signatures-progressbar> integrations should', () => {
  it('render and hydrate', async () => {
    const page = await newE2EPage();
    await page.setContent('<symbol-signatures-progressbar></symbol-signatures-progressbar>');
    const element = await page.find('symbol-signatures-progressbar');
    expect(element).toHaveClass('hydrated');
  });

  it('emit error given no transaction', async () => {
    const page = await newE2EPage();

    // hydrate component first
    await page.setContent(`
      <symbol-signatures-progressbar></symbol-signatures-progressbar>
    `);
    await page.waitForChanges();

    // start spying on element
    const elm = await page.find('symbol-signatures-progressbar');
    const spy = await elm.spyOnEvent('error');

    // hijack element content
    elm.innerHTML = '<symbol-signatures-progressbar></symbol-signatures-progressbar>';
    await page.waitForChanges();

    // automatic re-render should emit error
    expect(spy).toHaveReceivedEventDetail(
      '<symbol-signatures-progressbar> is missing mandatory property \'transaction\'.'
    );
  });
});
