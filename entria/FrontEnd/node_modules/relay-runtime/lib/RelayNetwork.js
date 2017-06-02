/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayNetwork
 * 
 * @format
 */

'use strict';

var _require = require('./RelayStoreUtils'),
    ROOT_ID = _require.ROOT_ID;

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given a single `fetch` function.
 */
function create(fetch, subscribe) {
  function request(operation, variables, cacheConfig, uploadables) {
    return fetch(operation, variables, cacheConfig, uploadables).then(function (payload) {
      return normalizePayload(operation, variables, payload);
    });
  }

  function requestStream(operation, variables, cacheConfig, _ref) {
    var onCompleted = _ref.onCompleted,
        onError = _ref.onError,
        _onNext = _ref.onNext;

    if (operation.query.operation === 'subscription') {
      require('fbjs/lib/invariant')(subscribe, 'The default network layer does not support GraphQL Subscriptions. To use ' + 'Subscriptions, provide a custom network layer.');
      return subscribe(operation, variables, null, {
        onCompleted: onCompleted,
        onError: onError,
        onNext: function onNext(payload) {
          var relayPayload = void 0;
          try {
            relayPayload = normalizePayload(operation, variables, payload);
          } catch (err) {
            onError && onError(err);
            return;
          }
          _onNext && _onNext(relayPayload);
        }
      });
    }

    var pollInterval = cacheConfig && cacheConfig.poll;
    if (pollInterval != null) {
      return doFetchWithPolling(request, operation, variables, { onCompleted: onCompleted, onError: onError, onNext: _onNext }, pollInterval);
    }

    var isDisposed = false;
    fetch(operation, variables, cacheConfig).then(function (payload) {
      if (isDisposed) {
        return;
      }
      var relayPayload = void 0;
      try {
        relayPayload = normalizePayload(operation, variables, payload);
      } catch (err) {
        onError && onError(err);
        return;
      }
      _onNext && _onNext(relayPayload);
      onCompleted && onCompleted();
    }, function (error) {
      if (isDisposed) {
        return;
      }
      onError && onError(error);
    })['catch'](rethrow);
    return {
      dispose: function dispose() {
        isDisposed = true;
      }
    };
  }

  return {
    fetch: fetch,
    request: request,
    requestStream: requestStream
  };
}

function doFetchWithPolling(request, operation, variables, _ref2, pollInterval) {
  var onCompleted = _ref2.onCompleted,
      onError = _ref2.onError,
      onNext = _ref2.onNext;

  require('fbjs/lib/invariant')(pollInterval > 0, 'RelayNetwork: Expected pollInterval to be positive, got `%s`.', pollInterval);
  var isDisposed = false;
  var timeout = null;
  var dispose = function dispose() {
    if (!isDisposed) {
      isDisposed = true;
      timeout && clearTimeout(timeout);
    }
  };
  function poll() {
    request(operation, variables, { force: true }).then(function (payload) {
      onNext && onNext(payload);
      timeout = setTimeout(poll, pollInterval);
    }, function (error) {
      dispose();
      onError && onError(error);
    });
  }
  timeout = setTimeout(poll, pollInterval);

  return { dispose: dispose };
}

function normalizePayload(operation, variables, payload) {
  var data = payload.data,
      errors = payload.errors;

  if (data != null) {
    return require('./normalizeRelayPayload')({
      dataID: ROOT_ID,
      node: operation.query,
      variables: variables
    }, data, errors, { handleStrippedNulls: true });
  }
  var error = require('./RelayError').create('RelayNetwork', 'No data returned for operation `%s`, got error(s):\n%s\n\nSee the error ' + '`source` property for more information.', operation.name, errors ? errors.map(function (_ref3) {
    var message = _ref3.message;
    return message;
  }).join('\n') : '(No errors)');
  error.source = { errors: errors, operation: operation, variables: variables };
  throw error;
}

function rethrow(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}

module.exports = { create: create };