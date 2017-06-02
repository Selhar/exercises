/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule stableJSONStringify
 * @format
 */

'use strict';

/**
 * Simple recursive stringifier that produces a stable JSON string suitable for
 * use as a cache key. Does not handle corner-cases such as circular references
 * or exotic types.
 */

var _stringify2 = _interopRequireDefault(require('babel-runtime/core-js/json/stringify'));

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function stableJSONStringify(obj) {
  if (Array.isArray(obj)) {
    var result = [];
    for (var ii = 0; ii < obj.length; ii++) {
      var value = obj[ii] !== undefined ? obj[ii] : null;
      result.push(stableJSONStringify(value));
    }
    return '[' + result.join(',') + ']';
  } else if (typeof obj === 'object' && obj) {
    var _result = [];
    var keys = (0, _keys2['default'])(obj);
    keys.sort();
    for (var _ii = 0; _ii < keys.length; _ii++) {
      var key = keys[_ii];
      var _value = stableJSONStringify(obj[key]);
      _result.push('"' + key + '":' + _value);
    }
    return '{' + _result.join(',') + '}';
  } else {
    return (0, _stringify2['default'])(obj);
  }
}

module.exports = stableJSONStringify;