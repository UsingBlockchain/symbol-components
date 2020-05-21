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
import { NetworkType } from 'symbol-sdk/dist/src/model/network/NetworkType'
import { RepositoryFactoryHttp } from 'symbol-sdk/dist/src/infrastructure/RepositoryFactoryHttp'
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'node-health-icon',
  styleUrl: 'node-health-icon.css',
  shadow: true
})
export class NodeHealthIcon {
  /**
   * The node url (REST gateway)
   */
  @Prop() nodeUrl?: string

  /**
   * The network type
   */
  @Prop() networkType?: NetworkType

  /**
   * The network generation hash
   */
  @Prop() generationHash?: string

  constructor() { console.log('constructed') }

  /**
   * Read node health endpoint
   */
  componentWillLoad() {
    if (this.nodeUrl && this.nodeUrl.length) {
      return this.factory.createNodeRepository().getNodeHealth()
    }
  }

  /**
   * Render component
   */
  render() {
    return <Host>
      <div>Hello, World!</div>
    </Host>;
  }

  /// region private api
  /**
   * Getter for the sdk's repository factory
   */
  private get factory(): RepositoryFactoryHttp {
    return new RepositoryFactoryHttp(
      this.nodeUrl,
      this.networkType,
      this.generationHash
    )
  }
  /// end-region private api
}
