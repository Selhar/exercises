/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayModernEnvironment
 * 
 * @format
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RelayModernEnvironment = function () {
  function RelayModernEnvironment(config) {
    (0, _classCallCheck3['default'])(this, RelayModernEnvironment);

    var handlerProvider = config.handlerProvider ? config.handlerProvider : require('./RelayDefaultHandlerProvider');
    this._network = config.network;
    this._publishQueue = new (require('./RelayPublishQueue'))(config.store, handlerProvider);
    this._store = config.store;
    this.unstable_internal = require('./RelayCore');
  }

  RelayModernEnvironment.prototype.getStore = function getStore() {
    return this._store;
  };

  RelayModernEnvironment.prototype.applyUpdate = function applyUpdate(updater) {
    var _this = this;

    var optimisticUpdate = { storeUpdater: updater };
    var dispose = function dispose() {
      _this._publishQueue.revertUpdate(optimisticUpdate);
      _this._publishQueue.run();
    };
    this._publishQueue.applyUpdate(optimisticUpdate);
    this._publishQueue.run();
    return { dispose: dispose };
  };

  RelayModernEnvironment.prototype.check = function check(selector) {
    return this._store.check(selector);
  };

  RelayModernEnvironment.prototype.commitPayload = function commitPayload(selector, payload) {
    // Do not handle stripped nulls when commiting a payload
    var relayPayload = require('./normalizeRelayPayload')(selector, payload);
    this._publishQueue.commitPayload(selector, relayPayload);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.commitUpdate = function commitUpdate(updater) {
    this._publishQueue.commitUpdate(updater);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.lookup = function lookup(selector) {
    return this._store.lookup(selector);
  };

  RelayModernEnvironment.prototype.subscribe = function subscribe(snapshot, callback) {
    return this._store.subscribe(snapshot, callback);
  };

  RelayModernEnvironment.prototype.retain = function retain(selector) {
    return this._store.retain(selector);
  };

  RelayModernEnvironment.prototype.sendQuery = function sendQuery(_ref) {
    var _this2 = this;

    var cacheConfig = _ref.cacheConfig,
        onCompleted = _ref.onCompleted,
        onError = _ref.onError,
        onNext = _ref.onNext,
        operation = _ref.operation;

    var isDisposed = false;
    var dispose = function dispose() {
      isDisposed = true;
    };
    this._network.request(operation.node, operation.variables, cacheConfig).then(function (payload) {
      if (isDisposed) {
        return;
      }
      _this2._publishQueue.commitPayload(operation.fragment, payload);
      _this2._publishQueue.run();
      onNext && onNext(payload);
      onCompleted && onCompleted();
    })['catch'](function (error) {
      if (isDisposed) {
        return;
      }
      onError && onError(error);
    });
    return { dispose: dispose };
  };

  RelayModernEnvironment.prototype.streamQuery = function streamQuery(_ref2) {
    var _this3 = this;

    var cacheConfig = _ref2.cacheConfig,
        onCompleted = _ref2.onCompleted,
        onError = _ref2.onError,
        _onNext = _ref2.onNext,
        operation = _ref2.operation;

    return this._network.requestStream(operation.node, operation.variables, cacheConfig, {
      onCompleted: onCompleted,
      onError: onError,
      onNext: function onNext(payload) {
        _this3._publishQueue.commitPayload(operation.fragment, payload);
        _this3._publishQueue.run();
        _onNext && _onNext(payload);
      }
    });
  };

  RelayModernEnvironment.prototype.sendMutation = function sendMutation(_ref3) {
    var _this4 = this;

    var onCompleted = _ref3.onCompleted,
        onError = _ref3.onError,
        operation = _ref3.operation,
        optimisticResponse = _ref3.optimisticResponse,
        optimisticUpdater = _ref3.optimisticUpdater,
        updater = _ref3.updater,
        uploadables = _ref3.uploadables;

    var hasOptimisticUpdate = optimisticResponse || optimisticUpdater;
    var optimisticUpdate = {
      selector: operation.fragment,
      selectorStoreUpdater: optimisticUpdater,
      response: optimisticResponse ? optimisticResponse() : null
    };
    if (hasOptimisticUpdate) {
      this._publishQueue.applyUpdate(optimisticUpdate);
      this._publishQueue.run();
    }
    var isDisposed = false;
    var dispose = function dispose() {
      if (hasOptimisticUpdate) {
        _this4._publishQueue.revertUpdate(optimisticUpdate);
        _this4._publishQueue.run();
        hasOptimisticUpdate = false;
      }
      isDisposed = true;
    };
    this._network.request(operation.node, operation.variables, { force: true }, uploadables).then(function (payload) {
      if (isDisposed) {
        return;
      }
      if (hasOptimisticUpdate) {
        _this4._publishQueue.revertUpdate(optimisticUpdate);
      }
      _this4._publishQueue.commitPayload(operation.fragment, payload, updater);
      _this4._publishQueue.run();
      onCompleted && onCompleted(payload.errors);
    })['catch'](function (error) {
      if (isDisposed) {
        return;
      }
      if (hasOptimisticUpdate) {
        _this4._publishQueue.revertUpdate(optimisticUpdate);
      }
      _this4._publishQueue.run();
      onError && onError(error);
    });
    return { dispose: dispose };
  };

  RelayModernEnvironment.prototype.sendSubscription = function sendSubscription(_ref4) {
    var _this5 = this;

    var onCompleted = _ref4.onCompleted,
        _onNext2 = _ref4.onNext,
        onError = _ref4.onError,
        operation = _ref4.operation,
        updater = _ref4.updater;

    return this._network.requestStream(operation.node, operation.variables, { force: true }, {
      onCompleted: onCompleted,
      onError: onError,
      onNext: function onNext(payload) {
        _this5._publishQueue.commitPayload(operation.fragment, payload, updater);
        _this5._publishQueue.run();
        _onNext2 && _onNext2(payload);
      }
    });
  };

  return RelayModernEnvironment;
}();

// Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
// realm-specific instanceof check, and to aid in module tree-shaking to
// avoid requiring all of RelayRuntime just to detect its environment.


RelayModernEnvironment.prototype['@@RelayModernEnvironment'] = true;

module.exports = RelayModernEnvironment;