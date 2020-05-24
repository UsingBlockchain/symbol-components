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

  /// region component properties
  /**
   * The transaction type
   */
  @Prop({ mutable: true }) type: string = 'transfer'
  /// end-region component properties

  /// region public api
  /**
   * Read-only property `safeType` makes sure the
   * returned type is a known icon type
   */
  public get safeType() {
    const type = this.type && this.type.length ? this.type.toLowerCase() : 'transfer'
    const icons = this.getIcons()

    return Object.keys(icons).includes(type)
      ? type
      : 'transfer'
  }
  
  /**
   * Get collection of known transaction types
   */
  public getIcons() {
    return {
      'account-link': IconAccountLink,
      'aggregate': IconAggregate,
      'lock': IconLock,
      'metadata': IconMetadata,
      'mosaic': IconMosaic,
      'multisig': IconMultisig,
      'namespace': IconNamespace,
      'restriction': IconRestriction,
      'transfer': IconTransfer,
      'incoming': IconIncoming,
      'outgoing': IconOutgoing,
    }
  }

  /**
   * Get an icon resource (base64 URI)
   */
  public getIcon() {
    // get known transaction icons
    const icons: {
      [k: string]: any
    } = this.getIcons()

    // make case insensitive
    return icons[this.safeType]
  }
  /// end-region public api

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
}
