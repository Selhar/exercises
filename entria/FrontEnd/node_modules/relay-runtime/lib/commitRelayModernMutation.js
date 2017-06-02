/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule commitRelayModernMutation
 * 
 * @format
 */

'use strict';

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function commitRelayModernMutation(environment, config) {
  require('fbjs/lib/invariant')(require('./isRelayModernEnvironment')(environment), 'commitRelayModernMutation: expect `environment` to be an instance of ' + '`RelayModernEnvironment`.');
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getOperation = _environment$unstable.getOperation;

  var mutation = getOperation(config.mutation);
  var onError = config.onError,
      optimisticResponse = config.optimisticResponse,
      optimisticUpdater = config.optimisticUpdater,
      updater = config.updater,
      variables = config.variables,
      uploadables = config.uploadables;

  var operation = createOperationSelector(mutation, variables);
  if (optimisticResponse && mutation.query.selections && mutation.query.selections.length === 1 && mutation.query.selections[0].kind === 'LinkedField') {
    var mutationRoot = mutation.query.selections[0].name;
    require('fbjs/lib/warning')(optimisticResponse()[mutationRoot], 'commitRelayModernMutatuion: Expected result from optimisticResponse()' + ' to be wrapped in mutation name `%s`', mutationRoot);
  }
  return environment.sendMutation({
    onError: onError,
    operation: operation,
    uploadables: uploadables,
    updater: updater,
    optimisticUpdater: optimisticUpdater,
    optimisticResponse: optimisticResponse,
    onCompleted: function onCompleted(errors) {
      var onCompleted = config.onCompleted;

      if (onCompleted) {
        var snapshot = environment.lookup(operation.fragment);
        onCompleted(snapshot.data, errors);
      }
    }
  });
}

module.exports = commitRelayModernMutation;