/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayCompatMutations
 * 
 * @format
 */

'use strict';

var _require = require('./RelayCompatEnvironment'),
    getRelayClassicEnvironment = _require.getRelayClassicEnvironment,
    getRelayModernEnvironment = _require.getRelayModernEnvironment;

var _require2 = require('relay-runtime'),
    commitMutation = _require2.commitMutation;

var RelayCompatMutations = {
  /* $FlowFixMe(site=react_native_fb) - Flow now prevents you from calling a
   * function with more arguments than it expects. This comment suppresses an
   * error that was noticed when we made this change. Delete this comment to
   * see the error. */
  commitUpdate: function commitUpdate(environment, config) {
    var relayStaticEnvironment = getRelayModernEnvironment(environment);
    if (relayStaticEnvironment) {
      return commitMutation(relayStaticEnvironment, config);
    } else {
      var relayClassicEnvironment = getRelayClassicEnvironment(environment);
      require('fbjs/lib/invariant')(relayClassicEnvironment, 'RelayCompatMutations: Expected an object that conforms to the ' + '`RelayEnvironmentInterface`, got `%s`.', environment);
      return commitRelay1Mutation(
      // getRelayClassicEnvironment returns a RelayEnvironmentInterface
      // (classic APIs), but we need the modern APIs on old core here.
      relayClassicEnvironment, config);
    }
  }
};

function commitRelay1Mutation(environment, _ref) {
  var configs = _ref.configs,
      mutation = _ref.mutation,
      onCompleted = _ref.onCompleted,
      onError = _ref.onError,
      optimisticResponse = _ref.optimisticResponse,
      variables = _ref.variables,
      uploadables = _ref.uploadables;
  var getOperation = environment.unstable_internal.getOperation;

  var operation = getOperation(mutation);
  if (optimisticResponse && operation.node.kind === 'Mutation' && operation.node.calls && operation.node.calls.length === 1) {
    var mutationRoot = operation.node.calls[0].name;
    var optimisticResponseObject = optimisticResponse();
    if (optimisticResponseObject[mutationRoot]) {
      optimisticResponse = function optimisticResponse() {
        return optimisticResponseObject[mutationRoot];
      };
    } else {
      require('fbjs/lib/warning')(false, 'RelayCompatMutations: Expected result from `optimisticResponse()`' + 'to contain the mutation name `%s` as a property, got `%s`', mutationRoot, optimisticResponseObject);
    }
  }
  return environment.sendMutation({
    configs: configs || [],
    operation: operation,
    onCompleted: onCompleted,
    onError: onError,
    optimisticResponse: optimisticResponse && optimisticResponse(),
    variables: variables,
    uploadables: uploadables
  });
}

module.exports = RelayCompatMutations;