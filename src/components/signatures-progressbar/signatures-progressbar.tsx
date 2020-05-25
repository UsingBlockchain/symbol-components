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
import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core'
import { AggregateTransaction } from 'symbol-sdk/dist/src/model/transaction/AggregateTransaction'
import { Transaction } from 'symbol-sdk/dist/src/model/transaction/Transaction'
import { TransactionType } from 'symbol-sdk/dist/src/model/transaction/TransactionType'
import { MultisigAccountGraphInfo } from 'symbol-sdk/dist/src/model/account/MultisigAccountGraphInfo'
import { MultisigAccountInfo } from 'symbol-sdk/dist/src/model/account/MultisigAccountInfo'

@Component({
  tag: 'symbol-signatures-progressbar',
  styleUrl: 'signatures-progressbar.css',
  shadow: true
})
export class SignaturesProgressBar {
  /**
   * The component html element
   */
  @Element() el: HTMLElement;

  /// region component properties
  /**
   * The transaction for which signatures have to be expected
   */
  @Prop() transaction!: Transaction

  /**
   * The multisig account graph info
   */
  @Prop() graph?: MultisigAccountGraphInfo
  /// end-region component properties

  /**
   * Emits an error
   */
  @Event({
    eventName: 'error',
    cancelable: false
  }) error: EventEmitter<string>;

  /// region public api
  /**
   * Reads cosignatories from multisig account graph
   * 
   * @readonly
   */
  public get actorsCount(): number {
    if (!this.graph) {
      return 1
    }

    // get addresses from multisig graph
    const infos = [...this.graph.multisigAccounts.keys()]
      .sort((a, b) => b - a) // sort from top to bottom
      .map((key) => this.graph.multisigAccounts.get(key) || [])
      .filter((x) => x.length > 0)

    // flatten output and return length
    return infos.reduce((
      {}, // `prev` ignored
      it: MultisigAccountInfo[]) => [...it]
    )
    .map(m => m.cosignatories.map(c => c.address))
    .reduce((prev, it) => prev.concat(it))
    .length || 1
  }
  /// end-region public api

  /// region render methods
  /**
   * Render component
   */
  render() {
    if (!this.transaction) {
      this.error.emit(
        '<symbol-signatures-progressbar> is missing mandatory property \'transaction\'.'
      );
      return <Host></Host>
    }

    // include transaction signature
    let cntSigs: number = this.transaction.signature && this.transaction.signature.length 
      ? 1
      : 0

    // include aggregate cosignatures
    if ([
      TransactionType.AGGREGATE_BONDED,
      TransactionType.AGGREGATE_COMPLETE,
    ].includes(this.transaction.type)) {
      cntSigs += (this.transaction as AggregateTransaction).cosignatures.length
    }

    // calculate progress bar percentage
    const percentage = (cntSigs/this.actorsCount) * 100;

    // render
    return <Host>
      <progress max={this.actorsCount} value={cntSigs}>
        <div class="polyfilld-progress-bar">
          <span style={{width: percentage.toString() + '%'}}>
            {cntSigs} of {this.actorsCount}
          </span>
        </div>
      </progress>
    </Host>;
  }
  /// end-region render methods
}
