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
import { Component, Prop, h, Host } from '@stencil/core'
import { TransactionType } from 'symbol-sdk/dist/src/model/transaction/TransactionType'

/// region resources
// @ts-ignore
import IconAccountLink from './resources/tx-account-link.png'
// @ts-ignore
import IconAggregate from './resources/tx-aggregate.png'
// @ts-ignore
import IconIncoming from './resources/tx-incoming.png'
// @ts-ignore
import IconLock from './resources/tx-lock.png'
// @ts-ignore
import IconMetadata from './resources/tx-metadata.png'
// @ts-ignore
import IconMosaic from './resources/tx-mosaic.png'
// @ts-ignore
import IconMultisig from './resources/tx-multisig.png'
// @ts-ignore
import IconNamespace from './resources/tx-namespace.png'
// @ts-ignore
import IconOutgoing from './resources/tx-outgoing.png'
// @ts-ignore
import IconRestriction from './resources/tx-restriction.png'
// @ts-ignore
import IconTransfer from './resources/tx-transfer.png'
/// end-region resources

@Component({
  tag: 'symbol-transaction-icon',
  styleUrl: 'transaction-icon.css',
  shadow: true
})
export class TransactionIcon {

  /**
   * The transaction type
   */
  @Prop() type: TransactionType | number | string

  /// region render methods
  /**
   * Render an icon element (<img>)
   */
  renderIcon() {
    return <img src={this.getIcon()}
                class="symbol-transaction-icon" />
  }

  /**
   * Render component
   */
  render() {
    return <Host>
      {this.renderIcon()}
    </Host>;
  }
  /// end-region render methods

  /// region private api
  /**
   * Get an icon resource (base64 URI)
   */
  private getIcon() {
    const types: {
      [k: string]: any
    } = {
      'account-link': IconAccountLink,
      'aggregate': IconAggregate,
      'lock': IconLock,
      'metadata': IconMetadata,
      'mosaic': IconMosaic,
      'multisig': IconMultisig,
      'namespace': IconNamespace,
      'restriction': IconRestriction,
      'incoming': IconIncoming,
      'outgoing': IconOutgoing
    }

    if (typeof this.type === 'string') {
      // make case insensitive
      const type = this.type.toLowerCase()
      if (type in types) {
        return types[type]
      }
    }

    switch (this.type) {
      default:
      case 'transfer':
      case TransactionType.TRANSFER: return IconTransfer
      case TransactionType.ACCOUNT_LINK: return IconAccountLink
      case 'aggregate':
      case TransactionType.AGGREGATE_BONDED:
      case TransactionType.AGGREGATE_COMPLETE: return IconAggregate
      case TransactionType.HASH_LOCK: return IconLock
      case TransactionType.ACCOUNT_METADATA:
      case TransactionType.MOSAIC_METADATA:
      case TransactionType.NAMESPACE_METADATA: return IconMetadata
      case TransactionType.MOSAIC_DEFINITION:
      case TransactionType.MOSAIC_SUPPLY_CHANGE: return IconMosaic
      case TransactionType.MULTISIG_ACCOUNT_MODIFICATION: return IconMultisig
      case TransactionType.NAMESPACE_REGISTRATION: return IconNamespace
      case TransactionType.ACCOUNT_ADDRESS_RESTRICTION:
      case TransactionType.ACCOUNT_MOSAIC_RESTRICTION:
      case TransactionType.ACCOUNT_OPERATION_RESTRICTION:
      case TransactionType.MOSAIC_ADDRESS_RESTRICTION:
      case TransactionType.MOSAIC_GLOBAL_RESTRICTION: return IconRestriction
    }
  }
  /// end-region private api
}
