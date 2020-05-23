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
import { TransactionIcon } from './transaction-icon';

describe('TransactionIcon component should', () => {
  it('render', async () => {
    const {root} = await newSpecPage({
      components: [TransactionIcon],
      html: '<symbol-transaction-icon></symbol-transaction-icon>'
    });

    expect(root).toEqualHtml(`
      <symbol-transaction-icon>
        <mock:shadow-root>
          <img class="symbol-transaction-icon" />
        </mock:shadow-root>
      </symbol-transaction-icon>
    `);
  });
});
