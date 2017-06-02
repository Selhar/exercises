/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule deepFreeze
 * @format
 */

'use strict';

/**
 * Recursively "deep" freezes the supplied object.
 *
 * For convenience, and for consistency with the behavior of `Object.freeze`,
 * returns the now-frozen original object.
 */

var _isFrozen2 = _interopRequireDefault(require('babel-runtime/core-js/object/is-frozen'));

var _getOwnPropertyNames2 = _interopRequireDefault(require('babel-runtime/core-js/object/get-own-property-names'));

var _freeze2 = _interopRequireDefault(require('babel-runtime/core-js/object/freeze'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function deepFreeze(object) {
  (0, _freeze2['default'])(object);
  (0, _getOwnPropertyNames2['default'])(object).forEach(function (name) {
    var property = object[name];
    if (property && typeof property === 'object' && !(0, _isFrozen2['default'])(property)) {
      deepFreeze(property);
    }
  });
  return object;
}

module.exports = deepFreeze;