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
import { TransactionIcon } from './transaction-icon';

describe('TransactionIcon component should', () => {
  it('render and hydrate', async () => {
    const page = await newE2EPage();

    await page.setContent('<symbol-transaction-icon></symbol-transaction-icon>');
    const element = await page.find('symbol-transaction-icon');
    expect(element).toHaveClass('hydrated');
  });
});
