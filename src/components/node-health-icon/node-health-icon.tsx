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
import { Component, Prop, h, Host, EventEmitter, Listen, Element, State, Event } from '@stencil/core'

// internal dependencies
import { NodeProvider } from '../../providers/NodeProvider'
import { NodeHealthStatus } from '../../models/NodeHealthStatus'

// resources
// @ts-ignore
import IconUp from './resources/up.png'
// @ts-ignore
import IconDown from './resources/down.png'

@Component({
  tag: 'symbol-node-health-icon',
  styleUrl: 'node-health-icon.css',
  shadow: true
})
export class NodeHealthIcon {
  @Element() el: HTMLElement;

  /// region component properties
  /**
   * The node url (REST gateway)
   */
  @Prop() nodeUrl: string
  /// end-region component properties

  /**
   * The node health status
   */
  @State() status: NodeHealthStatus;

  /**
   * Emits the node health
   */
  @Event({
    eventName: 'fetched',
    cancelable: false
  }) fetched: EventEmitter<NodeHealthStatus>;

  /// region component lifecycle
  /**
   * Read node health endpoint
   */
  componentDidLoad() {
    if (!this.nodeUrl || !this.nodeUrl.length) {
      return
    }

    if (!('fetch' in window)) {
      return
    }

    const provider = new NodeProvider(this.nodeUrl)
    provider.getNodeHealth().then(
      (json) => this.fetched.emit(json as NodeHealthStatus)
    )
  }
  /// end-region component lifecycle

  /// region event handlers
  /**
   * Update state when `fetched` is emitted
   */
  @Listen('fetched')
  fetchedHandler(status: any) {
    this.status = status.detail as NodeHealthStatus
  }
  /// end-region event handlers

  /// region render methods
  renderIcon() {
    if (this.status && this.status.apiNode === 'up' && this.status.db === 'up') {
      return <img src={IconUp}
                  title="Connected"
                  class="symbol-node-health-icon" />
    }

    return <img src={IconDown}
                title="Disconnected"
                class="symbol-node-health-icon" />
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
