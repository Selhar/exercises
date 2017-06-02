/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayRuntime
 * 
 * @format
 */

'use strict';

/**
 * The public interface to Relay Runtime.
 */
module.exports = {
  // Core API
  Environment: require('./RelayModernEnvironment'),
  Network: require('./RelayNetwork'),
  RecordSource: require('./RelayInMemoryRecordSource'),
  Store: require('./RelayMarkSweepStore'),

  areEqualSelectors: require('./RelayCore').areEqualSelectors,
  createFragmentSpecResolver: require('./RelayCore').createFragmentSpecResolver,
  createOperationSelector: require('./RelayCore').createOperationSelector,
  getDataIDsFromObject: require('./RelayCore').getDataIDsFromObject,
  getFragment: require('./RelayModernGraphQLTag').getFragment,
  getOperation: require('./RelayModernGraphQLTag').getOperation,
  getSelector: require('./RelayCore').getSelector,
  getSelectorList: require('./RelayCore').getSelectorList,
  getSelectorsFromObject: require('./RelayCore').getSelectorsFromObject,
  getVariablesFromObject: require('./RelayCore').getVariablesFromObject,
  graphql: require('./RelayModernGraphQLTag').graphql,

  // Extensions
  ConnectionHandler: require('./RelayConnectionHandler'),
  ViewerHandler: require('./RelayViewerHandler'),

  // Helpers (can be implemented via the above API)
  commitLocalUpdate: require('./commitLocalUpdate'),
  commitMutation: require('./commitRelayModernMutation'),
  fetchQuery: require('./fetchRelayModernQuery'),
  isRelayModernEnvironment: require('./isRelayModernEnvironment'),
  requestSubscription: require('./requestRelaySubscription')
};